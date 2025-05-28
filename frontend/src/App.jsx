import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Navbar from "./components/Navbar.jsx";
import { ContactForm } from "./components/ContactForm.jsx";
import { Footer } from "./components/Footer.jsx";
import { useEffect } from "react";
import { useUserStore } from "./stores/useUserStore";
import { useCartStore } from "./stores/useCartStore";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

function App() {
  const { user, checkAuth, checkingAuth } = useUserStore();
  const { getCartItems } = useCartStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!user) return;

    getCartItems();
  }, [getCartItems, user]);

  if (checkingAuth) return <LoadingSpinner />;
  return (
    <>
      <div className="h-screen w-full bg-[linear-gradient(135deg,_#F7EBD2,_#F6D6A8,_#F2BFAF)]">
        <Navbar isAdmin={false} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={!user ? <SignupPage /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/secret-dashboard"
            element={
              user?.role === "admin" ? <AdminPage /> : <Navigate to="/login" />
            }
          />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
