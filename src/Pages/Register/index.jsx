import { useNavigate } from "react-router-dom";
import Logos from "../../Asset/logo-chill.png";
import Google from "../../Asset/google.png";
import { useState } from "react";
import { registerUser } from "../../Service/API";

const Register = () => {
  const navigate = useNavigate();

  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (regPassword !== regConfirmPassword) {
      alert("password tidak sama");
      return;
    }
    try {
      const newUser = {
        username: regUsername,
        password: regPassword,
      };
      await registerUser(newUser);
      alert("Pendaftaran Berhasil");
      navigate("/login");
      setRegUsername("");
      setRegPassword("");
      setRegConfirmPassword("");
    } catch (error) {
      console.error("Error :", error);
    }
  };

  return (
    <form className="login-form" onSubmit={handleRegister}>
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
        value={regUsername}
        onChange={(e) => setRegUsername(e.target.value)}
      />
      <label className="input-title">Kata Sandi</label>
      <input
        className="input-area"
        type="password"
        placeholder="Masukan Kata sandi"
        value={regPassword}
        onChange={(e) => setRegPassword(e.target.value)}
      />
      <label className="input-title">Konfirmasi Kata Sandi</label>
      <input
        className="input-area"
        type="password"
        placeholder="Masukan Kata sandi"
        value={regConfirmPassword}
        onChange={(e) => setRegConfirmPassword(e.target.value)}
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
      <button className="login" type="submit" style={{ cursor: "pointer" }}>
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
