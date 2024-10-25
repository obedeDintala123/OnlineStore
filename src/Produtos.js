import "./Produtos.css";
import { useNavigate } from "react-router-dom";

export default function Produtos({ produtos, addCart }) {
  const navegate = useNavigate();
  const userLogin = localStorage.getItem("userLoginEmail");
  const userSignUp = localStorage.getItem("userSignUpEmail");

  let handleSignUp = (produto) => {
    if (userLogin || userSignUp) {
      localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
      navegate("/buy-product");
    } else {
      window.alert("You must be logged in to buy!");
    }
  };

  const handleCart = (produto) => {
    if (userLogin || userSignUp) {
      addCart(produto);
    } else {
      window.alert("You must be logged in to buy!");
    }
  };

  return (
    <>
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
                      className="img-product"
                      src={produto.url}
                      alt="imagem do produto"
                      width={300}
                      height={300}
                    />
                    <button className="button-cart" onClick={() => handleCart(produto)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-cart-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </button>
                    <div className="detalhes-content">
                      <span className="produto-name">{produto.nome}</span>
                      <span>{produto.quantidade} Sold</span>
                      <p className="produto-preco">{produto.preco} AOA</p>

                      <div className="button-buy-cart">
                        <button
                          type="button"
                          className="button-buy-now"
                          onClick={() => handleSignUp(produto)}
                        >
                          Buy Now
                        </button>
                      </div>
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
                    <button
                      className="button-cart"
                      onClick={() => handleCart(produto)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-cart-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </button>
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
                    <button
                      className="button-cart"
                      onClick={() => handleCart(produto)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-cart-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </button>
                    <div className="detalhes-content">
                      <span className="produto-name">{produto.nome}</span>
                      <span>{produto.quantidade} Sold</span>
                      <p className="produto-preco">{produto.preco} AOA</p>
                      <button
                        type="button"
                        className="button-buy-now"
                        onClick={() => handleCart(produto)}
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
                    <button
                      className="button-cart"
                      onClick={() => handleCart(produto)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-cart-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </button>
                    <div className="detalhes-content">
                      <span className="produto-name">{produto.nome}</span>
                      <span>{produto.quantidade} Sold</span>
                      <p className="produto-preco">{produto.preco} AOA</p>
                      <button
                        type="button"
                        className="button-buy-now"
                        onClick={() => handleCart(produto)}
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
                    <button
                      className="button-cart"
                      onClick={() => handleCart(produto)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-cart-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </button>
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
                    <button
                      className="button-cart"
                      onClick={() => handleCart(produto)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-cart-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </button>
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
    </>
  );
}
