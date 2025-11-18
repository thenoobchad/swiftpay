
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };
  return (
		<nav className="text-white/90">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="flex h-20 justify-between items-center mb-6">
					<h1 className="text-xl font-semibold">Welcome back!</h1>
					<img
						src="/profile.jpg"
						alt="Profile"
            className="w-10 h-10 rounded-full"
            onClick={handleLogout}
					/>
				</div>
			</div>
		</nav>
	);

}
