import nikeLogo from "./Imagens-LojaOnline/Nike Logo Decal Sticker - NIKE-LOGO - Thriftysigns 3.svg";
import adidasLogo from "./Imagens-LojaOnline/Adidas 1.svg";
import search from "./Imagens-LojaOnline/procurar 2.svg";
import down from "./Imagens-LojaOnline/angulo-para-baixo 1.svg";
import localization from "./Imagens-LojaOnline/marcador (5) 1.svg";
import favorite from "./Imagens-LojaOnline/coracao 2.svg";
import cart from "./Imagens-LojaOnline/carrinho-de-compras 1.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header({ onSearch }) {
  const navegate = useNavigate();
  const signIn = localStorage.getItem("userInitial");
  const signUp = localStorage.getItem("userInitial");
  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    onSearch(searchTerm);
  };

  const SignIn = () => {
    navegate("/sign-in");
  };

  const SignUp = () =>{
    navegate("/sign-up");
  }

  const categorias = [
    "Men's clothing",
    "Women's clothing",
    "Accessories",
    "Consumer electronics",
    "Appliances",
    "Shoes",
  ];

  function dropdownCategories() {
    const dropdownDiv = document.querySelector(".dropdownCategories-content");
    if (dropdownDiv) {
      dropdownDiv.remove();
    } else {
      let div = document.createElement("div");
      let container = document.querySelector(".header-content3");
      div.className = "dropdownCategories-content";

      categorias.forEach((categoria) => {
        let item = document.createElement("a");
        item.href = "#Men-section";
        item.innerHTML = categoria;
        div.appendChild(item);
      });

      container.appendChild(div);
    }
  }

  function dropdownDeliver() {
    const dropdownDiv = document.querySelector(".dropdownDeliver-content");

    if (dropdownDiv) {
      dropdownDiv.remove();
    } else {
      let form = document.createElement("form");
      let container = document.querySelector(".header-content3");
      form.className = "dropdownDeliver-content";
      form.method = "post";
      form.innerHTML =
        '<label htmlFor="country">Deliver to</label><select id="country" name="country"><option name="angola">Angola</option><option name="brasil">Brasil</option><option name="canada">Canada</option><option name="china">China</option></select><label htmlFor="idioma">Language</label><select id="idioma" name="idioma"> <option name="pt">Português</option><option name="en">English</option><option name="fr">Français</option><option name="mn">Mandarim</option></select><label htmlFor="moeda">Currency</label><select id="moeda" name="moeda"> <option name="eur">EUR</option><option name="usd">USD</option> <option name="aoa">AOA</option></select> <button type="submit">Submit</button>';
      container.appendChild(form);
    }
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
        {signIn ? (
    <div className="user-container">
      <span>{signIn.toUpperCase().charAt(0)}</span>
    </div>
  ) : signUp ? (
    <div className="user-container">
      <span>{signUp.toUpperCase().charAt(0)}</span>
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
      </div>

      <div className="header-content3">
        <div className="menu-content">
          <nav className="navegation-content">
            <button onClick={dropdownCategories}>
              <span>Categories</span>
              <img className="down" src={down} alt="down" width={15} height={15} />
            </button>
            <button onClick={dropdownDeliver}>
              <img className="localization" src={localization} alt="geolocation-icon" />
              <span>Deliver to</span>
              <img className="down" src={down} alt="down" width={15} height={15} />
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
