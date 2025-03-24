import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import App from "./App.tsx";
import About from "./About.tsx";
import Menu from "./Menu.tsx";
import GlutenFree from "./GlutenFree.tsx";
import Contact from "./Contact.tsx";
import "./index.css";
import "./App.css";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";

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
createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="gluten-free" element={<GlutenFree />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
