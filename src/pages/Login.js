import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 导入 useNavigate 替换 useHistory
import { authService } from '../services/authService';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await authService.login(username, password);
      localStorage.setItem("loggedIn", "true"); // 存储登录状态到localStorage
      setIsLoggedIn(true); // 更新状态
      navigate('/dashboard'); // 导航到仪表板
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginForm}>
        <h1>Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={styles.inputField}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={styles.inputField}
        />
        <button onClick={handleLogin} style={styles.loginButton}>Login</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'url(/images/login_background.jpg) no-repeat center center fixed', // 注意路径的修改
    backgroundSize: 'cover',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    maxWidth: '400px',
    padding: '40px',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  },
  inputField: {
    width: '100%',
    height: '50px',
    padding: '0 15px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '25px',
    fontSize: '16px',
  },
  loginButton: {
    width: '100%',
    padding: '10px 0',
    fontSize: '18px',
    borderRadius: '25px',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    outline: 'none',
  }
  
};

export default Login;
