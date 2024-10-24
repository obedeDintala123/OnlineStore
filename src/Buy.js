import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Buy.css";
import Header from "./Header.js";

export default function Buy() {
  const navegate = useNavigate();
  const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));
  const [quantidade, setQuantidade] = useState(1);

  const resetButtonStyles = () => {
    const allButtons = document.querySelectorAll(".size-button");
    allButtons.forEach((button) => {
      button.style.background = ""; // Remove a cor de fundo
      button.style.color = ""; // Remove a cor do texto
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    resetButtonStyles();
    event.target.style.background = "#fff";
    event.target.style.color = "#3a89ff";
    console.log(quantidade * produto.preco);
  };

  const minus = () => {
    setQuantidade((prev) => prev - 1);
    if (quantidade <= 1) {
      setQuantidade(1);
    }
  };

  const plus = () => {
    setQuantidade((prev) => prev + 1);
  };

  return (
    <>
      <Header />

      <div className="buy-container">
        <button className="back-button" onClick={() => navegate('/')}>
          <svg
            color="#fff"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          Back
        </button>
        <div className="productView-content">
          <div className="productView-content1">
            <img src={produto.url} alt="Imagem" />
          </div>
          <div className="productView-content2">
            <span className="content2-produto-nome">{produto.nome}</span>
            <span>Product Details</span>
            <p>Lorem</p>
            <div className="size-container">
              <span>Size</span>
              <div className="size-buttons">
                <button
                  name="S-button"
                  className="size-button"
                  onClick={handleClick}
                >
                  S
                </button>
                <button
                  name="M-button"
                  className="size-button"
                  onClick={handleClick}
                >
                  M
                </button>
                <button
                  name="L-button"
                  className="size-button"
                  onClick={handleClick}
                >
                  L
                </button>
                <button
                  name="XL-button"
                  className="size-button"
                  onClick={handleClick}
                >
                  XL
                </button>
                <button
                  name="XXL-button"
                  className="size-button"
                  onClick={handleClick}
                >
                  XXL
                </button>
              </div>
            </div>
            <div className="preco-quantidade-content">
              <span className="content2-produto-preco">
                {produto.preco} AOA
              </span>
              <div className="quantidade-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-dash-circle-fill"
                  viewBox="0 0 16 16"
                  onClick={minus}
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                </svg>
                <span>{quantidade}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                  onClick={plus}
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
              </div>
            </div>
            <div className="contente2-buttons">
              <button
                className="buyNow-button"
                onClick={() => navegate("/payment")}
              >
                Buy Now
              </button>
              <button className="add-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
