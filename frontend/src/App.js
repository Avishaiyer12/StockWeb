import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import Services from "./pages/Services.jsx";
import News from "./pages/News.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

import Profile from "./pages/User/Profile.jsx";
import EditProfile from "./pages/User/EditProfile.jsx";
import Watchlist from "./pages/User/Watchlist.jsx";
import Cart from "./pages/User/Cart.jsx";

import AdminPanel from "./pages/Admin/AdminPanel.jsx";
import AddStock from "./pages/Admin/AddStock.jsx";
import EditStock from "./pages/Admin/EditStock.jsx";
import AdminUsers from "./pages/Admin/AdminUsers.jsx";
import AdminContacts from "./pages/Admin/AdminContacts.jsx";
import ManageStocks from "./pages/Admin/ManageStocks.jsx";

import Stocks from "./pages/Stock/Stocks.jsx";
import StockVisualization from "./pages/Stock/StockVisualization.jsx";
import StockPrediction from "./pages/Stock/StockPrediction";

import Aapl from "./pages/Stock/Aapl.jsx";
import Amzn from "./pages/Stock/Amzn.jsx";
import Dis from "./pages/Stock/Dis.jsx";
import Googl from "./pages/Stock/Googl.jsx";
import Jnj from "./pages/Stock/Jnj.jsx";
import Jpm from "./pages/Stock/Jpm.jsx";
import Ma from "./pages/Stock/Ma.jsx";
import Msft from "./pages/Stock/Msft.jsx";
import Nflx from "./pages/Stock/Nflx.jsx";
import Nvda from "./pages/Stock/Nvda.jsx";
import Pg from "./pages/Stock/Pg.jsx";
import Pypl from "./pages/Stock/Pypl.jsx";
import Tsla from "./pages/Stock/Tsla.jsx";
import V from "./pages/Stock/V.jsx";
import Wmt from "./pages/Stock/Wmt.jsx";

import StockCard from "./components/StockCard";
import LearnMore from "./pages/LearnMore.jsx";
// import { StockChart } from "../../components/StockChart";
// import  StockTable  from "../../components/StockTable";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/admin/manage-stocks" element={<ManageStocks />} />
        <Route path="/admin/add-stock" element={<AddStock />} />
        <Route path="/admin/edit-stock/:symbol" element={<EditStock />} />

        <Route path="/stocks" element={<Stocks />} />
        <Route path="/stock_visualization" element={<StockVisualization />} />
        <Route path="/predict/:symbol" element={<StockPrediction />} />

        {/* <Route path="/stock-table" element={<StockTable />} /> */}
        {/* <Route path="/stock-chart" element={<StockChart />} /> */}

        <Route path="/card" element={<StockCard />} />
        <Route path="/learnMore/:id" element={<LearnMore/>} />

         <Route path="/stock/Aapl" element={<Aapl />} />
         <Route path="/stock/Amzn" element={<Amzn />} />
         <Route path="/stock/Dis" element={<Dis />} />
         <Route path="/stock/Googl" element={<Googl />} />
         <Route path="/stock/Jnj" element={<Jnj />} />
         <Route path="/stock/Jpm" element={<Jpm />} />
         <Route path="/stock/Ma" element={<Ma />} />
         <Route path="/stock/Msft" element={<Msft />} />
         <Route path="/stock/Nflx" element={<Nflx />} />
         <Route path="/stock/Nvda" element={<Nvda />} />
         <Route path="/stock/Pg" element={<Pg />} />
          <Route path="/stock/Pypl" element={<Pypl />} />
          <Route path="/stock/Tsla" element={<Tsla />} />
         <Route path="/stock/V" element={<V />} />
         <Route path="/stock/Wmt" element={<Wmt />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
