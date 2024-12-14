import { useNavigate } from "react-router-dom";
import Logos from "../../Asset/logo-chill.png";
import Google from "../../Asset/google.png";
import { useState } from "react";
import useUserStore from "../../Service/Zustand/UserStore";

const Register = () => {
  const navigate = useNavigate();
  const { addUser } = useUserStore();
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!newUser.username || !newUser.password || !newUser.confirmPassword) {
      alert("Harap Isi bidang Kosong");
      return;
    }

    if (newUser.password !== newUser.confirmPassword) {
      alert("Password Tidak sama");
      return;
    }

    try {
      await addUser({ username: newUser.username, password: newUser.password });
      alert("Registrasi Berhasil");
      navigate("/login");
    } catch (err) {
      alert("Terjadi Kesalahan", err);
    }
  };

  return (
    <form className="login-form">
      <div className="head-login">
        <img src={Logos} alt="chill" />
        <h2>Daftar</h2>
        <p className="greet">Selamat datang!</p>
      </div>
      <label className="input-title"> Username</label>
      <input
        className="input-area"
        type="text"
        placeholder="Masukan username"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <label className="input-title">Kata Sandi</label>
      <input
        className="input-area"
        type="password"
        placeholder="Masukan Kata sandi"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <label className="input-title">Konfirmasi Kata Sandi</label>
      <input
        className="input-area"
        type="password"
        placeholder="Masukan Kata sandi"
        value={newUser.confirmPassword}
        onChange={(e) =>
          setNewUser({ ...newUser, confirmPassword: e.target.value })
        }
      />
      <div className="other-option">
        <p>
          Sudah punya akun?
          <span
            onClick={() => navigate("/login")}
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            {" "}
            Masuk
          </span>
        </p>
      </div>
      <button
        className="login"
        type="submit"
        style={{ cursor: "pointer" }}
        onClick={handleRegister}
      >
        Daftar
      </button>
      <p className="or">Atau</p>
      <button className="log-google btn-regis">
        <img src={Google} alt="google" />
        Daftar dengan Google
      </button>
    </form>
  );
};

export default Register;
