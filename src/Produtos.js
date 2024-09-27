import "./Produtos.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Buy() {
  const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));
  const navegate = useNavigate();
  return (
    <div className="buy-container">
      <button className="back-button" onClick={() => {window.location.reload()}}>
        <svg color="#fff"
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
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
          </div>
          <span className="content2-produto-preco">{produto.preco} AOA</span>
          <div className="contente2-buttons">
            <button className="buyNow-button">Buy Now</button>
            <button className="add-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Produtos({ produtos }) {
  const [buy, setBuy] = useState(false);
  const user = localStorage.getItem("userInitial");
  let handleSignUp = (produto) => {
    if (user) {
      setBuy(true);
      localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
    } else {
      window.alert("You must be logged in to buy!");
    }
  };

  return (
    <>
      {buy ? (
        <Buy />
      ) : (
        <article className="produtos-container">
          <section id="Men-section">
            <div className="header-text-container">
              <h1>Men's Clothing</h1>
              <span>View All</span>
            </div>
            <div className="lista-de-produtos">
              {produtos.map((produto, index) => {
                if (produto.categoria === "Men's clothing") {
                  return (
                    <div key={index} className="produto-card">
                      <img
                        src={produto.url}
                        alt="imagem do produto"
                        width={300}
                        height={300}
                      />
                      <div className="detalhes-content">
                        <span className="produto-name">{produto.nome}</span>
                        <span>{produto.quantidade} Sold</span>
                        <p className="produto-preco">{produto.preco} AOA</p>
                        <button
                          type="button"
                          className="button-buy-now"
                          onClick={() => handleSignUp(produto)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </section>

          <section id="Shoe-section">
            <div className="header-text-container">
              <h1>Shoes</h1>
              <span>View All</span>
            </div>
            <div className="lista-de-produtos">
              {produtos.map((produto, index) => {
                if (produto.categoria === "Shoes") {
                  return (
                    <div key={index} className="produto-card">
                      <img
                        src={produto.url}
                        alt="imagem do produto"
                        width={300}
                        height={300}
                      />
                      <div className="detalhes-content">
                        <span className="produto-name">{produto.nome}</span>
                        <span>{produto.quantidade} Sold</span>
                        <p className="produto-preco">{produto.preco} AOA</p>
                        <button
                          type="button"
                          className="button-buy-now"
                          onClick={() => handleSignUp(produto)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </section>

          <section id="Women-section">
            <div className="header-text-container">
              <h1>Women's clothing</h1>
              <span>View All</span>
            </div>
            <div className="lista-de-produtos">
              {produtos.map((produto, index) => {
                if (produto.categoria === "Women's clothing") {
                  return (
                    <div key={index} className="produto-card">
                      <img
                        src={produto.url}
                        alt="imagem do produto"
                        width={300}
                        height={300}
                      />
                      <div className="detalhes-content">
                        <span className="produto-name">{produto.nome}</span>
                        <span>{produto.quantidade} Sold</span>
                        <p className="produto-preco">{produto.preco} AOA</p>
                        <button
                          type="button"
                          className="button-buy-now"
                          onClick={() => handleSignUp(produto)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </section>

          <section id="Accessories-section">
            <div className="header-text-container">
              <h1>Accessories</h1>
              <span>View All</span>
            </div>
            <div className="lista-de-produtos">
              {produtos.map((produto, index) => {
                if (produto.categoria === "Accessories") {
                  return (
                    <div key={index} className="produto-card">
                      <img
                        src={produto.url}
                        alt="imagem do produto"
                        width={300}
                        height={300}
                      />
                      <div className="detalhes-content">
                        <span className="produto-name">{produto.nome}</span>
                        <span>{produto.quantidade} Sold</span>
                        <p className="produto-preco">{produto.preco} AOA</p>
                        <button
                          type="button"
                          className="button-buy-now"
                          onClick={() => handleSignUp(produto)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </section>

          <section id="Consumer-electronics-section">
            <div className="header-text-container">
              <h1>Consumer electronics</h1>
              <span>View All</span>
            </div>
            <div className="lista-de-produtos">
              {produtos.map((produto, index) => {
                if (produto.categoria === "Consumer electronics") {
                  return (
                    <div key={index} className="produto-card">
                      <img
                        src={produto.url}
                        alt="imagem do produto"
                        width={300}
                        height={300}
                      />
                      <div className="detalhes-content">
                        <span className="produto-name">{produto.nome}</span>
                        <span>{produto.quantidade} Sold</span>
                        <p className="produto-preco">{produto.preco} AOA</p>
                        <button
                          type="button"
                          className="button-buy-now"
                          onClick={() => handleSignUp(produto)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </section>

          <section id="Appliances-section">
            <div className="header-text-container">
              <h1>Appliances</h1>
              <span>View All</span>
            </div>
            <div className="lista-de-produtos">
              {produtos.map((produto, index) => {
                if (produto.categoria === "Appliances") {
                  return (
                    <div key={index} className="produto-card">
                      <img
                        src={produto.url}
                        alt="imagem do produto"
                        width={300}
                        height={300}
                      />
                      <div className="detalhes-content">
                        <span className="produto-name">{produto.nome}</span>
                        <span>{produto.quantidade} Sold</span>
                        <p className="produto-preco">{produto.preco} AOA</p>
                        <button
                          type="button"
                          className="button-buy-now"
                          onClick={() => handleSignUp(produto)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </section>
        </article>
      )}
    </>
  );
}
