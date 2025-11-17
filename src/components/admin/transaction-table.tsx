import {type Transaction } from "../../types"; 
import { supabase } from "../../lib/supabaseClient"; 

interface Props {
	transactions: Transaction[];
	onUpdate: () => void;
}

export default function TransactionTable({ transactions, onUpdate }: Props) {
	const updateStatus = async (id: string, status: Transaction["status"]) => {
		await supabase.from("transactions").update({ status }).eq("id", id);
		onUpdate();
	};

	return (
		<div className="overflow-x-auto">
			<table className="w-full table-auto border-collapse">
				<thead>
					<tr className="bg-gray-100">
						<th className="p-3 text-left">Type</th>
						<th className="p-3 text-left">Amount</th>
						<th className="p-3 text-left">Phone</th>
						<th className="p-3 text-left">Network</th>
						<th className="p-3 text-left">Status</th>
						<th className="p-3 text-left">Action</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((t) => (
						<tr key={t.id} className="border-b">
							<td className="p-3">{t.type}</td>
							<td className="p-3">₦{t.amount}</td>
							<td className="p-3">{t.phone_number}</td>
							<td className="p-3">{t.network}</td>
							<td className="p-3">
								<span
									className={`px-2 py-1 rounded text-xs ${
										t.status === "success"
											? "bg-green-100"
											: t.status === "failed"
											? "bg-red-100"
											: "bg-yellow-100"
									}`}>
									{t.status}
								</span>
							</td>
							<td className="p-3">
								<select
									value={t.status}
									onChange={(e) => updateStatus(t.id, e.target.value as "pending" | "success" | "failed")}
									className="p-1 border rounded">
									<option value="pending">Pending</option>
									<option value="success">Success</option>
									<option value="failed">Failed</option>
								</select>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
