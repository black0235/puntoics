import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import PuntoicsDelivery from "./PuntoicsDelivery.tsx";
import Menu from "./Menu.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

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
        <Route element={<AuthLayout />}>
          <Route index element={<App />} />
          <Route path="puntoics-delivery" element={<PuntoicsDelivery />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
