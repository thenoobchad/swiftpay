import { createClient } from "https://esm.sh/@supabase/supabase-js@2.34.0";

Deno.serve(async (req) => {
	const { data } = await req.json();

	return new Response(
		JSON.stringify({
			success: true,
			message: "Hello there",
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
});
