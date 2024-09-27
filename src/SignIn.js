import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
export default function SignIn() {
  const [users, setUsers] = useState([]);
  const inputEmail = useRef();
  useEffect(() => {
    fetch("http://localhost/LojaOnline-Database/clientes.php")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function verifyUsers(e) {
    e.preventDefault();
    let email = inputEmail.current.value;
    let userFound = users.find((user) => user.email === email);
    const userInitial = localStorage.setItem("userInitial", email);
    let container = document.body;
    let div = document.createElement("div");
    div.className = "message-container";
    const message = document.querySelector(".message-container");

    if (message) {
      message.remove();
    } 
    
    if (userFound) {
      div.innerHTML =
        'Login feito com sucesso <svg style="color:green;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>';
      container.appendChild(div);
      setInterval(() => {
        navegate("/");
      }, 4000)
    } else {
      div.innerHTML =
        'Usuário não encontrado <svg style="color:#CD0814;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>';
      container.appendChild(div);
    }
  }

  const navegate = useNavigate();
  return (
    <div className="In-container">
      <h1>OnlineStore</h1>
      <form method="post" onSubmit={verifyUsers}>
        <h2>Sign In</h2>
        <div className="email-content">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            required
            ref={inputEmail}
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
