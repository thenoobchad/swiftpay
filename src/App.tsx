import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

import ServicePage from "./pages/ServicePage";
// import { ProtectedRoute } from "./components/common/protected-route";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/auth" element={<AuthPage />} />
				<Route
					path="/dashboard"
					element={
						// <ProtectedRoute requiredRole="user">
						<UserDashboardPage />
						// </ProtectedRoute>
					}
				/>
				<Route
					path="/admin"
					element={
						// <ProtectedRoute requiredRole="admin">
						<AdminDashboardPage />
						/* </ProtectedRoute> */
					}
				/>
				<Route path="/:service" element={<ServicePage/>} />
				<Route path="/" element={<Navigate to="/auth" />} />
			</Routes>
		
		</Router>
	);
}
