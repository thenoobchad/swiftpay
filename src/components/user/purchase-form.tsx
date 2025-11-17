import { useState } from "react";
// import PaystackButton from "../payments/pay-stack-button";

export default function PurchaseForm({ onSuccess }: { onSuccess: () => void }) {
	const [type, setType] = useState<"airtime" | "data">("airtime");
	const [amount, setAmount] = useState(500);
	const [phone, setPhone] = useState("");
	const [network, setNetwork] = useState<"MTN" | "Glo" | "Airtel" | "9mobile">(
		"MTN"
	);
	
	
	return (
		<div className="card">
			<h3 className="text-lg font-semibold mb-4">
				Buy {type === "airtime" ? "Airtime" : "Data"}
			</h3>
			<div className="space-y-4">
				<select
					value={type}
					onChange={(e) => setType(e.target.value as "airtime" | "data")}
					className="w-full py-5 active:outline-none outline-none px-3 bg-gray-100 rounded-lg">
					<option value="airtime">Airtime</option>
					<option value="data">Data Bundle</option>
				</select>

				<input
					type="text"
					placeholder="Phone Number (e.g. 08012345678)"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					className="w-full p-3 border rounded-lg"
				/>

				<select
					value={network}
					onChange={(e) =>
						setNetwork(e.target.value as "MTN" | "Glo" | "Airtel" | "9mobile")
					}
					className="w-full p-3 border rounded-lg">
					<option value="MTN">MTN</option>
					<option value="Glo">Glo</option>
					<option value="Airtel">Airtel</option>
					<option value="9mobile">9mobile</option>
				</select>

				<input
					type="number"
					placeholder="Amount (₦)"
					value={amount}
					onChange={(e) => setAmount(Number(e.target.value))}
					className="w-full p-3 border rounded-lg"
					min="100"
				/>
				<button onClick={onSuccess}>Change this</button>

				{/* <PaystackButton
					amount={amount}
					phone={phone}
					network={network}
					type={type}
					onSuccess={onSuccess}
				/> */}
			</div>
		</div>
	);
}
