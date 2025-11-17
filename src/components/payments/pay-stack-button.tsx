// import { useEffect, useState } from "react";
// import { usePaystackPayment } from "react-paystack";
// import { supabase } from "../../lib/supabaseClient";
// import type { User } from "@supabase/supabase-js";

// interface Props {
// 	amount: number;
// 	phone: string;
// 	network: string;
// 	type: "airtime" | "data";
// 	onSuccess: () => void;
// }

// export default function PaystackButton({
// 	amount,
// 	phone,
// 	network,
// 	type,
// 	onSuccess, // alias the prop to avoid duplicate identifier
// }: Props) {
// 	// load the user asynchronously and store in state
// 	const [user, setUser] = useState<User | null>(null);
// 	useEffect(() => {
// 		let mounted = true;
// 		supabase.auth.getUser().then((res) => {
// 			if (mounted) setUser(res.data.user ?? null);
// 		});
// 		return () => {
// 			mounted = false;
// 		};
// 	}, []);

// 	const config = {
// 		reference: new Date().getTime().toString(),
// 		email: user?.email ?? "user@example.com",
// 		amount: amount * 100,
// 		publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string,
// 	};

// 	const initializePayment = usePaystackPayment(config);

// 	// rename local handler to avoid duplicate identifier and type the reference
// 	const handlePaystackSuccess = async (reference: { reference: string }) => {
// 		// Insert transaction
// 		const { data } = await supabase
// 			.from("transactions")
// 			.insert({
// 				user_id: user?.id,
// 				type,
// 				amount,
// 				phone_number: phone,
// 				network,
// 				paystack_ref: reference.reference,
// 				status: "pending",
// 			})
// 			.select()
// 			.single();

// 		// Call Edge Function (get session token)
// 		const sessionResp = await supabase.auth.getSession();
// 		const token = sessionResp.data.session?.access_token;

// 		await fetch(
// 			`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/fulfill-vtu`,
// 			{
// 				method: "POST",
// 				headers: {
// 					Authorization: `Bearer ${token}`,
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify({
// 					transactionId: data.id,
// 					type,
// 					amount,
// 					phone,
// 					network,
// 				}),
// 			}
// 		);

// 		onSuccess();
// 	};

// 	return (
// 		<button
// 			onClick={() =>
// 				// initializePayment expects an options object
// 				initializePayment({
// 					onSuccess: handlePaystackSuccess,
// 					onClose: () => {
// 						/* optional close handler */
// 					},
// 				})
// 			}
// 			className="btn btn-primary w-full">
// 			Pay ₦{amount}
// 		</button>
// 	);
// }
