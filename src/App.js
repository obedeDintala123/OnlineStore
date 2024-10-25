import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Produtos from "./Produtos";
import "./App.css";

export default function App() {
  const navegate = useNavigate();
  const [searchProduto, setSearchProduto] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    fetch("https://back-end-online-store.vercel.app/api/produtos.php")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
        setSearchProduto(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSearch = (term) => {
    const filteredProdutos = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(term.toLowerCase())
    );
    setSearchProduto(filteredProdutos);
  };

  const AddCart = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };

  const handleCart = () => {
    setIsModalOpen(true); // Abre o modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  window.onclick = (event) => {
    if (event.target === document.querySelector(".modal")) {
      setIsModalOpen(false); // Fecha o modal
    }
  };

  const removeFromCart = (index) => {
    setCarrinho((prevCarrinho) => prevCarrinho.filter((_, i) => i !== index));
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
    <div className="container_page_principal">
      <Header
        onSearch={handleSearch}
        carrinhoCount={carrinho.length}
        handleCart={handleCart}
      />
      <Produtos produtos={searchProduto} addCart={AddCart} />

      {/* Modal para o Carrinho */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h3>Shopping cart</h3>
            {carrinho.length > 0 ? (
              carrinho.map((item, index) => (
                <>
                  <div className="carrinho-content" key={index}>
                    <div className="name-remove">
                      <p>{item.nome}</p>
                      <button onClick={() => removeFromCart(index)}>
                      Remove
                      </button>
                    </div>

                    <p>{item.preco} AOA</p>
                    <div className="quantidade-content">
                      <svg
                        color="#3a89ff"
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
                        color="#3a89ff"
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
                </>
              ))
            ) : (
              <p>O carrinho está vazio.</p>
            )}
            {carrinho.length > 0 ? (
              <button
                className="button-finalizar"
                onClick={() => navegate("/payment")}
              >
                Checkout
              </button>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
