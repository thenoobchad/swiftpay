import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import PurchaseForm from "./purchase-form";
import { type Transaction } from "../../types";

// const menu = [
// 	{
// 		name: "Airtime",
// 		href: "withdraw",
// 	},

// 	{
// 		name: "Data",
// 		href: "transfer",
// 	},
// 	{
// 		name: "Top Up",
// 		href: "top-up",
// 	},
// 	{
// 		name: "Deposit",
// 		href: "deposit",
// 	},
// ];

export const Dashboard = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	const fetchTransactions = async () => {
		const { data } = await supabase
			.from("transactions")
			.select("*")
			.order("created_at", { ascending: false });
		setTransactions(data || []);
	};

	useEffect(() => {
		fetchTransactions();
	}, []);

	return (
		<div className="p-3 max-w-xl sm:max-w-2xl mx-auto space-y-6">
			<p className="text-lg font-semibold text-center mt-8">Total Balance</p>
			<h1 className="text-5xl sm:text-6xl font-bold text-center">$12,650.00</h1>
			{/* <ul className="flex mx-auto w-full justify-around mt-12">
				{menu.map((m, i) => (
					<li key={i} className="flex flex-col">
						<span className="text-center h-20 w-20 flex items-center justify-center text-gray-300 bg-fuchsia-950 rounded-full text-lg font-semibold">
							{i}
						</span>
						<span className="font-semibold text-lg text-center my-4">
							{m.name}
						</span>
					</li>
				))}
			</ul> */}

			<div className="bg-fuchsia-950 h-[180px] rounded-lg p-6 flex flex-col justify-between">
				<h1 className="text-gray-100 text-lg font-semibold">
					Explore your financial report <br />
					and see the highlight
				</h1>

				<h4 className="text-gray-100 text-lg font-semibold">Learn more</h4>
			</div>
			<PurchaseForm onSuccess={fetchTransactions} />
			<div className="card">
				<h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
				{transactions.length === 0 ? (
					<p className="text-gray-500">No transactions yet.</p>
				) : (
					<div className="space-y-2">
						{transactions.map((t) => (
							<div
								key={t.id}
								className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
								<div>
									<p className="font-medium">
										{t.type.toUpperCase()} - ₦{t.amount}
									</p>
									<p className="text-sm text-gray-600">
										{t.phone_number} ({t.network})
									</p>
								</div>
								<span
									className={`px-3 py-1 rounded-full text-xs font-medium ${
										t.status === "success"
											? "bg-green-100 text-green-800"
											: t.status === "failed"
											? "bg-red-100 text-red-800"
											: "bg-yellow-100 text-yellow-800"
									}`}>
									{t.status}
								</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
