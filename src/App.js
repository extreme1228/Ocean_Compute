import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 假设有一个检查用户登录状态的函数，这里直接使用localStorage来模拟
    const loggedIn = localStorage.getItem("loggedIn"); // 检查本地存储中的登录状态
    setIsLoggedIn(loggedIn === "true"); // 更新状态
  }, []);

  return (
    <Router>
      {isLoggedIn && <Header />}
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate replace to="/login" />} />
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate replace to="/login" />} />
      </Routes>
      {isLoggedIn && <Footer />}
    </Router>
  );
}

export default App;
