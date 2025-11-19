import { HomeIcon, HistoryIcon, User2Icon, NetworkIcon } from "lucide-react";

import { useState } from "react";
const items = [
	{
		name: "Home",
        href: "/",
        icon: HomeIcon
	},
	{
		name: "Refer",
        href: "/",
        icon: NetworkIcon
	},
	{
		name: "History",
        href: "history",
        icon: HistoryIcon
	},

	{
		name: "Profile",
        href: "profile",
        icon: User2Icon
	},
	
];
export default function BottomNav() {
    const [isMenu, setIsMenu] = useState("menu")
  return (
		<div className="fixed sm:hidden bottom-0 left-0 w-full bg-black border-t border-zinc-800 grid grid-cols-4 justify-center">
			{items.map((menu) => (
                <button
                    onClick={() => {
                        setIsMenu(menu.name)
                    }}
					key={menu.href}
					className={`${
						isMenu === menu.name ? "bg-zinc-900" : ""
					} text-zinc-400 text-sm flex  flex-col hover: justify-center items-center gap-2 p-3 `}>
					<menu.icon />
					{menu.name}
				</button>
			))}
		</div>
	);
}
