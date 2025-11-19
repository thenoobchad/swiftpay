// import { Dashboard } from "../components/user/dashboard";
import { Navbar } from "../components/layout/navbar";
import {
	Plus,
	// Send,

	// Building2,
	CreditCard,
	// Home,
	// Clock,
	// User,
	ShoppingBag,
	// Bus,
	// CheckCircle,
} from "lucide-react";
import { scrollAdvert } from "../contants";
import { Link } from "react-router-dom";

export default function UserDashboardPage() {
	return (
		<>
			<Navbar />
			{/* <Dashboard /> */}
			<UiApp />
		</>
	);
}

const serviceBtns = [
	{
		name: "Fund Wallet",
		icon: Plus,
		href:"fund-wallet"
	},
	{
		name: "Airtime",
		icon: CreditCard,
		href:"airtime"
	},
	{
		name: "Data",
		icon: ShoppingBag,
		href:"data"
	},
];




function UiApp() {


	
	return (
		<div className="min-h-screen mx-auto max-w-2xl text-white p-4 font-sans">
			{/* Balance Card */}
			<div className="card my-4  border border-zinc-800 ">
				<p className="text-sm text-gray-400">Available Balance</p>
				<h2 className="text-4xl font-bold mt-4 ">$ 450</h2>
				<p className="text-green-400 text-sm mb-4">+9,784.13 (5.78%)</p>

				<div className="flex justify-between gap-4">
					{serviceBtns.map((c, i) => (
						<Link
							to={`/${c.href}`}
							key={i}
							className="bg-zinc-900/70 text-white/90 border border-zinc-800 rounded-md px-4 py-2 text-sm flex-1 flex flex-col gap-1 items-center sm:flex-row sm:gap-3 hover:bg-zinc-800">
							<c.icon className="h-6 w-6" />
							{c.name}
						</Link>
					))}
				</div>
			</div>

			{/* Alert Box */}
			<div className="overflow-x-hidden flex">
				{scrollAdvert.map((c, i) => (
					<div
						key={i}
						className="card mb-4  border border-zinc-800 flex-col flex w-full flex-1">
						<h4 className="font-semibold ">{c.head}</h4>
						<p className="text-sm my-2">
							Graph AI / Pyth Network / Codatta now live after 48hrs of stable
							valuation. Grab & trade now!
						</p>
					</div>
				))}
			</div>

			{/* Transactions */}
			<div className="mb-2 flex justify-between items-center">
				<h2 className="text-lg font-semibold mb-4">Transactions</h2>
				<button className="text-sm text-gray-400">See All</button>
			</div>

			<div className="space-y-3 my-4">
				{/* Transaction Item 1 */}

				{[1, 2, 3, 4].map((c, i) => (
					<div
						key={i}
						className="flex justify-between items-center card border border-zinc-800 ">
						<div className="flex items-center space-x-3">
							<div className="bg-green-500 text-black h-10 w-10 flex items-center justify-center rounded-full">
								$
							</div>
							<div>
								<p className="font-semibold">
									US Dollar
									{c}
								</p>
								<p className="text-sm text-gray-400">USDT</p>
							</div>
						</div>

						<div>
							<p className="text-red-400 font-semibold">-289.99 USD</p>
						</div>
					</div>
				))}

				{/* Bottom Navigation */}
				<div className="fixed sm:hidden bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around py-3">
					{["Home", "Refer", "History", "Profile"].map((item) => (
						<button key={item} className="text-gray-400 text-sm">
							{item}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}