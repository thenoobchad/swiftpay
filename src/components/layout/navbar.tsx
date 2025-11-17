
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };
  return (
    
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-xl font-bold text-primary">Swiffpay</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600"
          >
            {/* <LogOut size={20} /> */}
            Logout
          </button>
        </div>
      </div>
    </nav>
  );

}
