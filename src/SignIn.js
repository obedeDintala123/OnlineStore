import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SignIn() {
  const navegate = useNavigate();
  const [loginMessage, setLoginMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();

    fetch("https://back-end-online-store.vercel.app/api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: email, password: password}),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro na resposta da rede');
      }
      return response.text(); // Retorna o texto bruto para inspeção
    })
    .then((text) => {
      console.log("Texto da resposta:", text); // Verifica o conteúdo do texto recebido
      try {
        const data = JSON.parse(text); // Tenta converter o texto para JSON
        setLoginMessage(data.message);
      } catch (error) {
        console.error("Erro ao fazer parsing do JSON:", error);
        setLoginMessage("Erro no servidor ou resposta inválida");
      }
    })
    .catch((error) => {
      console.error("Erro no fetch:", error);
      setLoginMessage("Erro de conexão ou no servidor");
    });
  }
  return (
    <div className="In-container">
      <h1>OnlineStore</h1>
      <form method="post" onSubmit={handleLogin}>
        <h2>Sign In</h2>
        <div className="email-content">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            required onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="password-content">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">Continue</button>
        <div className="line-button">
          <div className="line-content">
            <hr />
            <span>New to OnlineStore ?</span>
            <hr />
          </div>
          <button type="button" onClick={() => navegate("/sign-up")}>
            Create your OnlineStore account
          </button>
        </div>
      </form>
    </div>
  );
}
