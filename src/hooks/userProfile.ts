import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { type Profile } from "../types"; 

export const useProfile = () => {
	const [profile, setProfile] = useState<Profile | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProfile = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			if (user) {
				const { data } = await supabase
					.from("profiles")
					.select("*")
					.eq("id", user.id)
					.single();
				setProfile(data);
			}
			setLoading(false);
		};
		fetchProfile();
	}, []);

	return { profile, loading };
};
