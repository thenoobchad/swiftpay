import { createClient } from "https://esm.sh/@supabase/supabase-js@2.34.0";

const RELOADLY_TOKEN = Deno.env.get("RELOADLY_TOKEN");
const RELOADLY_API = "https://topups-sandbox.reloadly.com/topups";

Deno.serve(async (req) => {
	const { transactionId, type, amount, phone, network } = await req.json();

	// Map network to Reloadly operator ID (use sandbox IDs)
	const operatorMap: Record<string, number> = {
		MTN: 152, // MTN Nigeria
		Glo: 153,
		Airtel: 154,
		"9mobile": 155,
	};

	const operatorId = operatorMap[network];
	if (!operatorId) throw new Error("Invalid network");

	const res = await fetch(RELOADLY_API, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${RELOADLY_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			recipientPhone: { countryCode: "NG", number: phone },
			amount,
			operatorId,
			customIdentifier: transactionId,
		}),
	});

	const data = await res.json();

	const supabase = createClient(
		Deno.env.get("SUPABASE_URL")!,
		Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
	);

	if (data.transactionId) {
		await supabase
			.from("transactions")
			.update({ status: "success", reloadly_ref: data.transactionId })
			.eq("id", transactionId);
	} else {
		await supabase
			.from("transactions")
			.update({ status: "failed" })
			.eq("id", transactionId);
	}

	return new Response(JSON.stringify({ success: true }), {
		headers: { "Content-Type": "application/json" },
	});
});
