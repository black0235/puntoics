import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import Menu from "./Menu.tsx";
import Nicolosi from "./Nicolosi.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Catania from "./Catania.tsx";

// import Payment from "./Payment.tsx";

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* LandingPage senza Navbar/Footer */}
        <Route index element={<App />} />

        {/* Tutte le altre pagine con layout */}
        <Route element={<AuthLayout />}>
          <Route path="catania" element={<Catania />} />
          <Route path="menu" element={<Menu />} />
          <Route path="nicolosi" element={<Nicolosi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
