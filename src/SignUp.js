import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const navegate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    let container = document.body;
    let div = document.createElement("div");
    div.className = "message-container";
    const message = document.querySelector(".message-container");
    const formData = new FormData(event.target);
    
    fetch("https://back-end-online-store.vercel.app/api/criarClientes.php", {
      method: "POST",
      body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response data:", data);
      if (message) {
        message.remove();
      }

        if (data.message === "Usuário já existente") {
          div.innerHTML = "Usuário Já existente";
          container.appendChild(div);
        } else if (data.message === "Usuário adicionado com sucesso") {
          const userInitial = localStorage.setItem(
            "userInitial",
            event.target.email.value
          );

          const userName = localStorage.setItem("userName", event.target.nome.value);
      
          div.innerHTML =
            'Usuário adicionado com sucesso <svg style="color:green;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>';
          container.appendChild(div);
          event.target.reset();
          setInterval(() => {
            navegate("/");
          }, 3000);
        } else {
          console.error("Error: Erro ao adicionar Usuário");
        }
      })
      .catch((error) => console.error("Error:" + error));
  };
  return (
    <div className="Up-container">
      <h1>OnlineStore</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <h2>Create account</h2>
        <div className="nome-content">
          <label htmlFor="nome">Your name</label>
          <input type="text" name="nome" required />
        </div>

        <div className="email-content">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" required />
        </div>

        <div className="senha-content">
          <label htmlFor="senha">Password</label>
          <input type="password" name="senha" minLength="8" required />
        </div>

        <button type="submit">Continue</button>
      </form>

      <span>
        Already have an account?
        <a href="#" onClick={() => navegate("/sign-in")}>
          Sign in
        </a>
      </span>
    </div>
  );
}
