
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
// import { supabase } from "../../lib/supabaseClient"; 

import { LogIn } from "lucide-react";

export default function AuthForm() {

	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="card border border-zinc-800 w-full max-w-sm sm:max-w-sm flex flex-col gap-3">
				<h2 className="text-2xl font-bold text-center my-6 text-white/80">
					Welcome Back
				</h2>
				{/* <Auth
					supabaseClient={supabase}
					// appearance={{ theme: ThemeSupa }}
					theme="light"
					// providers={[]}
					// redirectTo="/dashboard"
				/> */}
				<div className="flex flex-col gap-4">
					<label className="text-white/90">Email</label>
					<input
						className="bg-zinc-900/70 text-white/90 border border-zinc-800 rounded-md px-4 py-2 text-sm  flex flex-col gap-1 items-center sm:flex-row sm:gap-3 w-full  outline-none h-12"
						placeholder="johndoe@mail.com"
					/>
					<label className="text-white/90">Password</label>
					<input
						className="bg-zinc-900/70 text-white/90 border border-zinc-800 rounded-md px-4 py-2 text-sm h-12 flex flex-col gap-1 items-center sm:flex-row sm:gap-3 w-full outline-none"
						placeholder="*********"
					/>
				</div>
				<button className="bg-zinc-900/70 text-white/90 border border-zinc-800 rounded-md px-4 py-2 text-sm flex-1 flex  gap-1 items-center  sm:gap-3 mt-5 w-fit  whitespace-nowrap">
					Login
					<LogIn/>
				</button>
			</div>
		</div>
	);
}
