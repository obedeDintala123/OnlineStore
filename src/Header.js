import nikeLogo from "./Imagens-LojaOnline/Nike Logo Decal Sticker - NIKE-LOGO - Thriftysigns 3.svg";
import adidasLogo from "./Imagens-LojaOnline/Adidas 1.svg";
import search from "./Imagens-LojaOnline/procurar 2.svg";
import down from "./Imagens-LojaOnline/angulo-para-baixo 1.svg";
import localization from "./Imagens-LojaOnline/marcador (5) 1.svg";
import favorite from "./Imagens-LojaOnline/coracao 2.svg";
import cart from "./Imagens-LojaOnline/carrinho-de-compras 1.svg";
import "./Header.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ onSearch }) {
  const navegate = useNavigate();
  const userLoginEmail = localStorage.getItem("userLoginEmail");
  const userLoginPassword = localStorage.getItem("userLoginPassword");
  const userSignUpEmail = localStorage.getItem("userSignUpEmail");
  const userSignUpPassword = localStorage.getItem("userSignUpPassword");
  const inputEmailSignIn = useRef();
  const inputEmailSignUp = useRef();
  const inputPasswordSignIn = useRef();
  const inputPasswordSignUp = useRef();

  useEffect(() => {
    if (inputEmailSignIn.current) {
      inputEmailSignIn.current.value = userLoginEmail || ""; // Previne valores nulos
    }

    if(inputPasswordSignIn.current) {
      inputPasswordSignIn.current.value = userLoginPassword || ""; // Previne valores nulos
    }

    if (inputEmailSignUp.current) {
      inputEmailSignUp.current.value = userSignUpEmail || ""; // Previne valores nulos
    }

    if(inputPasswordSignUp){
      inputPasswordSignUp.current.value = userSignUpPassword || ""; // Previne valores nulos
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("userLoginPassword");
    localStorage.removeItem("userLoginEmail");
    window.location.reload();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    onSearch(searchTerm);
  };

  const SignIn = () => {
    navegate("/sign-in");
  };

  const SignUp = () => {
    navegate("/sign-up");
  };

  const categorias = [
    "Men's clothing",
    "Women's clothing",
    "Accessories",
    "Consumer electronics",
    "Appliances",
    "Shoes",
  ];

  function dropdownCategories() {
    let dropdownDiv = document.querySelector(".dropdownCategories-content");

    if (dropdownDiv) {
      dropdownDiv.remove(); // Remove o dropdown se ele já existir
    } else {
      let div = document.createElement("div");
      let container = document.querySelector(".header-content3");
      div.className = "dropdownCategories-content";

      // Gera os itens de categoria
      categorias.forEach((categoria) => {
        let item = document.createElement("a");
        item.href = "#Men-section";
        item.innerHTML = categoria;
        div.appendChild(item);
      });

      container.appendChild(div);

      // Atualiza a referência do dropdownDiv após a criação
      dropdownDiv = div;

      // Adiciona o evento para fechar ao clicar fora
      const closeDropdown = (event) => {
        // Verifica se o clique foi fora do dropdown ou do container
        if (
          !dropdownDiv.contains(event.target) &&
          !container.contains(event.target)
        ) {
          dropdownDiv.remove(); // Remove o dropdown
          document.removeEventListener("click", closeDropdown); // Remove o listener após fechar
        }
      };

      // Adiciona o evento ao corpo do documento
      setTimeout(() => {
        document.addEventListener("click", closeDropdown);
      }, 0); // Usa um timeout para garantir que o clique inicial no botão não feche o dropdown imediatamente
    }
  }

  function dropdownDeliver() {
    // Verifica se o dropdown já existe
    let dropdownDiv = document.querySelector(".dropdownDeliver-content");

    if (dropdownDiv) {
      dropdownDiv.remove(); // Remove o dropdown se já estiver presente
    } else {
      // Cria o formulário dropdown
      let form = document.createElement("form");
      let container = document.querySelector(".header-content3");
      form.className = "dropdownDeliver-content";
      form.method = "post";
      form.innerHTML =
        '<label for="country">Deliver to</label>' +
        '<select id="country" name="country">' +
        '<option name="angola">Angola</option>' +
        '<option name="brasil">Brasil</option>' +
        '<option name="canada">Canada</option>' +
        '<option name="china">China</option>' +
        "</select>" +
        '<label for="idioma">Language</label>' +
        '<select id="idioma" name="idioma">' +
        '<option name="pt">Português</option>' +
        '<option name="en">English</option>' +
        '<option name="fr">Français</option>' +
        '<option name="mn">Mandarim</option>' +
        "</select>" +
        '<label for="moeda">Currency</label>' +
        '<select id="moeda" name="moeda">' +
        '<option name="eur">EUR</option>' +
        '<option name="usd">USD</option>' +
        '<option name="aoa">AOA</option>' +
        "</select>" +
        '<button type="submit">Submit</button>';
      container.appendChild(form);

      // Atualiza a referência do dropdownDiv depois de criar o formulário
      dropdownDiv = form;

      // Adiciona o evento para fechar o dropdown ao clicar fora dele
      document.body.addEventListener("click", function closeDropdown(event) {
        if (!dropdownDiv.contains(event.target) && event.target !== container) {
          dropdownDiv.remove(); // Remove o dropdown se clicar fora dele
          document.body.removeEventListener("click", closeDropdown); // Remove o evento após fechar
        }
      });
    }
  }

  function openMenuBar() {
    let container = document.querySelector(".navBar-container");
    container.style.display = "flex";
    container.style.animation = "openNavBar .4s linear forwards";
  }

  function closeMenuBar() {
    let container = document.querySelector(".navBar-container");
    container.style.animation = "closeNavBar .4s linear forwards";
    setTimeout(() => {
      container.style.display = "none";
    }, 400);
  }

  return (
    <header className="header-container">
      <div className="header-content1">
        <div className="marcasLogo-content">
          <img src={nikeLogo} alt="nike-logo" width={40} height={40} />
          <img src={adidasLogo} alt="Adidas-logo" width={40} height={40} />
        </div>
        <div className="help-suport-content">
          <a href="#">Help</a>
          <span className="traco">|</span>
          <a href="#">Support</a>
          <span className="traco">|</span>
          <select>
            <option value="en-us">English</option>
            <option value="pt-br">Português</option>
            <option value="es-es">Español</option>
          </select>
        </div>
      </div>
      <div className="header-content2">
        <div className="logo-search-content">
          <h1
            onClick={() => {
              window.location.reload();
              navegate("/");
            }}
          >
            OnlineStore
          </h1>
          <form
            className="search-content"
            method="post"
            onSubmit={handleSearch}
          >
            <input type="text" placeholder="Search OnlineStore" name="search" />
            <button type="submit">
              <img src={search} alt="search-icon" />
            </button>
          </form>
        </div>
        {userLoginEmail ? (
          <div className="user-column">
            <div className="user-container">
              <span>{userLoginEmail.toUpperCase().charAt(0)}</span>
            </div>
          </div>
        ) : userSignUpEmail ? (
          <div className="user-column">
            <div className="user-container">
              <span>{userSignUpEmail.toUpperCase().charAt(0)}</span>
            </div>
          </div>
        ) : (
          <div className="header-buttons-content">
            <button className="signIn-button" onClick={SignIn}>
              Sign In
            </button>
            <button className="signUp-button" onClick={SignUp}>
              Sign Up
            </button>
          </div>
        )}

        <div className="menu">
          <button onClick={openMenuBar}>
            <svg
              color="white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>

        <div className="navBar-container">
          <div className="header-navBar">
            <h1>OnlineStore</h1>
            <svg
              onClick={closeMenuBar}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>

          {userLoginEmail ? (
            <>
              <div className="userNav-container">
                <span>{userLoginEmail.toUpperCase().charAt(0)}</span>
              </div>
              <div className="userInfo">
                <div>
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="text"
                    id="inputEmail"
                    name="name"
                    ref={inputEmailSignIn}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="inputPasswprd">Password</label>
                  <input
                    type="password"
                    id="inputPasswprd"
                    name="password"
                    ref={inputPasswordSignIn}
                    readOnly
                  />
                </div>
                <button className="edite-button">Edit Profile</button>
                <button className="logOut-button" onClick={handleLogOut}>
                  Log Out
                </button>
              </div>
            </>
          ) : userSignUpEmail ? (
            <>
              <div className="userNav-container">
                <span>{userSignUpEmail.toUpperCase().charAt(0)}</span>
              </div>
              <div className="userInfo">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  id="inputEmail"
                  name="email"
                  ref={inputEmailSignUp}
                  readOnly
                />
                <div>
                  <label htmlFor="inputPasswprd">Password</label>
                  <input
                    type="password"
                    id="inputPasswprd"
                    name="password"
                    ref={inputPasswordSignUp}
                    readOnly
                  />
                </div>
                <button className="edite-button">Edit Profile</button>
                <button className="logOut-button" onClick={handleLogOut}>
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <form method="post" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search OnlineStore"
                  name="search"
                />
                <button type="submit">
                  <img src={search} alt="search-icon" />
                </button>
              </form>

              <div className="navBar-buttons">
                <button onClick={SignUp}>Sign Up</button>
                <button onClick={SignIn}>Sign In</button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="header-content3">
        <div className="menu-content">
          <nav className="navegation-content">
            <button onClick={dropdownCategories}>
              <span>Categories</span>
              <img
                className="down"
                src={down}
                alt="down"
                width={15}
                height={15}
              />
            </button>
            <button onClick={dropdownDeliver} className="deliver-button">
              <img
                className="localization"
                src={localization}
                alt="geolocation-icon"
              />
              <span>Deliver to</span>
              <img
                className="down"
                src={down}
                alt="down"
                width={15}
                height={15}
              />
            </button>
          </nav>
        </div>
        <div className="favorite-cart-content">
          <a href="#" className="link-favorite">
            <img src={favorite} alt="favorite-icon" width={18} height={18} />
            <span>Favorites</span>
          </a>
          <a href="#" className="link-cart">
            <img src={cart} alt="cart-icon" width={20} height={20} />
            <div className="cart-content">
              <span className="cart-items">0</span>
              <span className="cart-string">Cart</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
