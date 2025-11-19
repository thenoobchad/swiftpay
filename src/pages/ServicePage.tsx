import { Link, useParams } from "react-router-dom";
import { useState,  type FormEvent} from "react";

export default function ServicePage() {
	const [form, setForm] = useState({
		amount: 0,
		net: "",
		number: ""
	});
		const [isAmount, setIsAmount] = useState("");
	const [isActive, setIsActive] = useState("")

	const { service } = useParams()
	
	const isAirtime = service === "airtime"
	const isData = service === "data";



	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setForm({...form})
	};
  return (
		<form
			onSubmit={handleSubmit}
			className="min-h-screen mx-auto max-w-2xl text-white p-4 flex flex-col font-sans">
			<div className="flex gap-2 mb-7">
				<Link to="/dashboard" className="text-sm">
					Back
				</Link>
				<p className="text-sm  capitalize text-white/90 ">
					{isAirtime ? "Airtime" : isData ? "Mobile Data" : "Fund Wallet"}
				</p>
			</div>
			{/* Airtime amount */}
			{isAirtime && (
				<div className=" mb-4">
					<div className="grid grid-cols-3 grid-rows-2 gap-4 justify-center items-center">
						{["200", "500", "1000", "2000", "3000", "5000"].map((label) => (
							<option
								onClick={() => {
									if (isAirtime) {
										console.log(isActive);
										setIsAmount(label);
										console.log("this here", label);
										setForm({ ...form, amount: Number(label) });
									}
								}}
								key={label}
								className={`${
									isAmount === label ? "bg-zinc-800" : "bg-zinc-900/70"
								}  text-white border border-zinc-800 rounded-md px-4 py-2 text-sm flex`}>
								<span className="flex w-full justify-center ">{label}</span>
							</option>
						))}
					</div>
				</div>
			)}
			{/* NETWORK DATA */}

			{/* ---------------------- */}
			{isAirtime && (
				<div className="flex flex-col mb-4">
					<label className="text-white/90 text-sm mb-2 mt-7 flex justify-between">
						Amount <span className="text-white/50">Balance: 3000</span>
					</label>
					<input
						className="bg-zinc-900/70 text-white/90 border border-zinc-800 rounded-md px-4 py-2 text-sm h-12 flex flex-col gap-1 items-center sm:flex-row sm:gap-3 w-full outline-none"
						placeholder={`${form.amount}`}
						value={form.amount}
						type="text"
						onChange={(e) => {
							if (
								Number.isNaN(e.target.value) ||
								typeof e.target.value !== "number"
							) {
								setForm({ ...form, amount: 0 });
							}
							setForm({ ...form, amount: Number(e.target.value) });
						}}
					/>
				</div>
			)}

			{/* NETWORKS */}
			<div className=" mb-4">
				<p className="text-white/90 text-sm mb-2 mt-7">Choose network</p>
				<div className="grid grid-cols-4  gap-4 justify-between mt-4">
					{["MTN", "GLO", "AIRTEL", "9MOBILE"].map((label) => (
						<option
							key={label}
							value={form.net}
							onClick={() => {
								if (isData) {
									console.log(isActive);
									setIsActive(label);
									console.log("this here", label);
								} else if (isAirtime) {
									console.log(isActive);
									setIsActive(label);
									console.log("this here", label);
								}
							}}
							className={`${
								isActive === label ? "bg-zinc-800" : "bg-zinc-900/70"
							}  text-white border border-zinc-800 rounded-md px-4 py-2 text-sm`}>
							<span className="flex w-full justify-center items-center">
								{label}
							</span>
						</option>
					))}
				</div>
			</div>
			{/* DATA TYPE */}
			{isActive && !isAirtime && (
				<div className=" mb-4">
					<p className="text-white/90 text-sm mb-2 mt-7">Data Types</p>
					<select className="flex gap-4 justify-between mt-4 w-full outline-none border border-zinc-800 rounded-md px-4 py-3 text-sm bg-zinc-900/70">
						{["MTN", "GLO", "AIRTEL"].map((label) => (
							<option key={label} className="bg-zinc-900 outline-none">
								{label}
							</option>
						))}
					</select>
				</div>
			)}
			{/* PONE NUMBER */}
			<div className="flex flex-col">
				<label className="text-white/90 text-sm mb-2 mt-7">Phone number</label>
				<input
					className="bg-zinc-900/70 text-white/90 border border-zinc-800 rounded-md px-4 py-2 text-sm h-12 flex flex-col gap-1 items-center sm:flex-row sm:gap-3 w-full outline-none"
					placeholder="0801 234 5678"
				/>
			</div>
			<button className="bg-zinc-900/70 text-white border border-zinc-800 rounded-md px-4 py-2 text-sm  mt-7 w-full sm:w-fit">
				Send
			</button>
		</form>
	);
}
