import { useNavigate } from "react-router-dom";
import Logos from "../../Asset/logo-chill.png";
import Google from "../../Asset/google.png";
import { useState, useEffect } from "react";
import useUserStore from "../../Service/Zustand/UserStore";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, fetchUsers, users, loginUser } = useUserStore();
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    const { username, password } = loginData;
    if (username && password) {
      loginUser(username, password);
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        alert("Login Berhasil");
        navigate("/home");
      } else {
        alert("Username atau Password Salah");
        setLoginData({ username: "", password: "" });
      }
    } else {
      alert("Harap isi Username dan Passowrd");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log(currentUser);
  return (
    <form className="login-form">
      <div className="head-login">
        <img src={Logos} alt="logo" />
        <h2>Masuk</h2>
        <p className="greet">Selamat datang kembali!</p>
      </div>
      <label className="input-title"> Username</label>
      <input
        className="input-area"
        type="text"
        placeholder="Masukan username"
        value={loginData.username}
        onChange={(e) =>
          setLoginData({ ...loginData, username: e.target.value })
        }
        required
      />
      <label className="input-title">Kata Sandi</label>
      <input
        className="input-area"
        type="password"
        placeholder="Masukan Kata sandi"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
        required
      />
      <div className="other-option">
        <p>
          Belum punya akun?
          <span onClick={() => navigate("./register")} className="regis-btn">
            Daftar
          </span>
        </p>
        <p style={{ fontWeight: "bold", cursor: "pointer" }}>
          Lupa kata sandi?
        </p>
      </div>
      <button
        className="login"
        style={{ cursor: "pointer" }}
        type="submit"
        onClick={handleLogin}
      >
        Masuk
      </button>
      <p className="or">Atau</p>
      <button className="log-google">
        <img src={Google} alt="google" />
        Masuk dengan Google
      </button>
    </form>
  );
};

export default Login;
