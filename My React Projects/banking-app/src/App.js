import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./header1";
import Header2 from "./header2";
import Footer from "./Footer";
import HomePage from "./HomePage";
import CreateAccountPage from "./CreateAccountPage";
import LoginPage from "./LoginPage";
import BankDetailPage from "./BankDetailPage";
import TransferPage from "./TransferPage";
import TransactionPage from "./TransactionPage";
import LogoutPage from "./LogoutPage";
import { useState } from "react";

function Layout({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const showHeader2 = isLoggedIn;

  return (
    <div>
      {showHeader2 ? <Header2 /> : <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/login-account" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/bank-detail" element={<BankDetailPage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/logout" element={<LogoutPage setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </BrowserRouter>
  );
}

export default App;