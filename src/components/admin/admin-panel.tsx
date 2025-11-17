import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import TransactionTable from "./transaction-table";
import type { Transaction } from "../../types";

export default function AdminPanel() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	const fetchAll = async () => {
		const { data } = await supabase
			.from("transactions")
			.select("*")
			.order("created_at", { ascending: false });
		setTransactions(data || []);
	};

	useEffect(() => {
		fetchAll();
	}, []);

	return (
		<div className="p-6 max-w-6xl mx-auto">
			<h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
			<div className="card">
				<h2 className="text-lg font-semibold mb-4">All Transactions</h2>
				<TransactionTable transactions={transactions} onUpdate={fetchAll} />
			</div>
		</div>
	);
}
