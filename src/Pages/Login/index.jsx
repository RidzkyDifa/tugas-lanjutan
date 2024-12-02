import { useNavigate } from "react-router-dom";
import Logos from "../../Asset/logo-chill.png";
import Google from "../../Asset/google.png";
import { useState, useEffect } from "react";
import { getData } from "../../Service/API";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("handleLogin dipanggil");
    try {
      const users = await getData();
      setList(users);
      console.log("Data dari API:", users);
      console.log("Username Input:", username);
      console.log("Password Input:", password);

      if (!users || !users.length) {
        alert("Tidak ada data user");
        return;
      }

      const user = users.find(
        (item) =>
          item.username.toLowerCase() === username.toLowerCase() &&
          item.password === password
      );

      if (user) {
        alert("Login berhasil");
        navigate("/home");
      } else {
        alert("Username atau Password Salah");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error saat login:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getData();
        console.log("Data yang berhasil diambil:", users);
      } catch (error) {
        console.error("Error saat mengambil data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(list);
  return (
    <form onSubmit={handleLogin} className="login-form">
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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label className="input-title">Kata Sandi</label>
      <input
        className="input-area"
        type="password"
        placeholder="Masukan Kata sandi"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
      <button className="login" style={{ cursor: "pointer" }} type="submit">
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
