import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSucess, setLoginSucess] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para controlar o loader

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true); // Mostra o loader ao iniciar o envio

    fetch("https://back-end-online-store.vercel.app/api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta da rede");
        }
        return response.json();
      })

      .then((data) => {
        setLoading(false); // Esconde o loader após o envio ser concluído
        if (data.message === "Login successful") {
          localStorage.setItem("userLoginEmail", email);
          localStorage.setItem("userLoginPassword", password);
          setLoginMessage("Login successful");
          setLoginSucess(true);
        } else {
          setLoginMessage("Erro no login: " + data.message);
          setLoginSucess(false);
          window.alert(loginMessage);
        }
      })

      .catch((error) => {
        setLoading(false); // Esconde o loader caso ocorra erro
        console.error("Erro no fetch:", error);
        setLoginMessage("Erro de conexão ou no servidor");
        setLoginSucess(false);
      });
  };

  return (
    <>
      {loginSucess ? (
        <div className="message-content">
          <svg
            color="#3a89ff"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          {loginMessage}

          <button onClick={() => navigate("/")}>Go to OnlineStore</button>
        </div>
      ) : (
        <div className="In-container">
          <h1>OnlineStore</h1>

          {loading && <div className="loader"></div>} {/* Loader aparece durante o processamento */}

          <form method="post" onSubmit={handleLogin} className="form">
            <h2>Sign In</h2>
            <div className="email-content">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="password-content">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Continue"}
            </button>

            <div className="line-button">
              <div className="line-content">
                <hr />
                <span>New to OnlineStore ?</span>
                <hr />
              </div>
              <button type="button" onClick={() => navigate("/sign-up")}>
                Create your OnlineStore account
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
