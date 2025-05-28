import { Link } from "react-router-dom";
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import Logo from "./Logo.jsx";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg px-4 pr-4 md:pr-12 shadow-md border-b border-white/10">
      <div className="flex items-center justify-between md:px-4">
        <Link to="/">
          <Logo />
        </Link>
        <div className="text-[6px] w-1/2 md:pl-10 text-[#8B7E74] font-semibold md:text-sm text-center py-2 z-50 relative animate-jump">
          Free deliveries on orders over{" "}
          <span className="text-[#D7A86E]">35€</span>!
        </div>

        {/* Nav links on the right */}
        <nav className="space-x-3 flex md:flex items-center md:space-x-6 text-[#8B7E74] font-semibold">
          <Link
            to="/"
            className="hidden md:inline text-sm hover:text-[#D7A86E] transition md:text-xl"
          >
            Home
          </Link>

          {user && (
            <Link to={"/cart"}>
              <ShoppingCart className="w-5 h-5 md:w-7 md:h-7 hover:text-[#D7A86E] cursor-pointer" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 
									text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out"
                >
                  {cart.length}
                </span>
              )}
            </Link>
          )}
          {isAdmin && (
            <Link
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium
								 transition duration-300 ease-in-out flex items-center"
              to={"/secret-dashboard"}
            >
              <Lock className="inline-block mr-1" size={18} />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          )}
          {user ? (
            <button
              className="bg-[#734b91] inline-flex items-center justify-center hover:bg-gray-500 text-white 
             px-2 py-1 md:px-3 md:py-1.5 text-xs sm:text-sm rounded-md transition duration-300 ease-in-out whitespace-nowrap"
              onClick={logout}
            >
              <span className="w-4 h-4 md:w-6 md:h-6">
                <LogOut className=" w-full h-full" />
              </span>
              <span className="hidden sm:inline ml-2">Log Out</span>
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center bg-[#F67280] hover:bg-gray-500 text-white 
             px-2 py-1 md:px-3 md:py-1.5 text-xs sm:text-sm rounded-md transition duration-300 ease-in-out whitespace-nowrap"
              >
                <span className="w-4 h-4 md:w-6 md:h-6 mr-1">
                  <UserPlus className="w-full h-full" />
                </span>
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="bg-[#734b91] inline-flex items-center justify-center hover:bg-gray-500 text-white 
             px-2 py-1 md:px-3 md:py-1.5 text-xs sm:text-sm rounded-md transition duration-300 ease-in-out whitespace-nowrap"
              >
                <span className="w-4 h-4 md:w-6 md:h-6 mr-1">
                  <LogIn className=" w-full h-full" />
                </span>
                Login
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
