import { Navigate } from "react-router-dom";
import { useProfile } from "../../hooks/userProfile"
import {Loader} from "./loader"
import type { JSX } from "react";



interface Props {
	children: JSX.Element;
	requiredRole?: "user" | "admin";
}

export const ProtectedRoute = ({ children, requiredRole }: Props) => {
	const { profile, loading } = useProfile();

	if (loading) return <Loader />;
	if (!profile) return <Navigate to="/auth" />;
	if (requiredRole && profile.role !== requiredRole)
		return <Navigate to="/unauthorized" />;

	return children;
}