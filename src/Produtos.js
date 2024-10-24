import "./Produtos.css";
import { useNavigate } from "react-router-dom";

export default function Produtos({ produtos }) {
  const navegate = useNavigate();
  const userLogin = localStorage.getItem("userLoginEmail");
  const userSignUp = localStorage.getItem("userSignUpEmail");

  let handleSignUp = (produto) => {
    if (userLogin || userSignUp) {
      localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
      navegate('/buy-product');
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
    </>
  );
}
