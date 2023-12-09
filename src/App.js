import TopNavbar from "./components/TopNavbar";
import { Route, Routes } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import Home from "./pages/Home";
import PhoneNumberDetails from "./pages/PhoneNumberDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Enquiry from "./pages/Enquiry";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AdminPage from "./pages/AdminPage";

import AdvanceSerchFancyNumber from "./pages/AdvanceSerchFancyNumber";
import { useState } from "react";
import Services from "./pages/Services";

function App() {
  const [selectedSearchData, setSelectedSearchData] = useState("");
  const [selectedSearchOptions, setSearchOptions] = useState("");

  const getNavbarSearchData = (searchData, selectedOptions) => {
    setSelectedSearchData(searchData);
    setSearchOptions(selectedOptions);
  };
  return (
    <div>
      <TopNavbar />
      <Navbar2 getNavbarSearchData={getNavbarSearchData} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedSearchData={selectedSearchData}
              selectedSearchOptions={selectedSearchOptions}
            />
          }
          exact
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/details/:id" element={<PhoneNumberDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/advanceSearch" element={<AdvanceSerchFancyNumber />} />
        <Route path="/about" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
