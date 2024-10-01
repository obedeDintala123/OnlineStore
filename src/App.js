import Header from "./Header";
import Produtos from "./Produtos";
import { useState, useEffect } from "react";

export default function App() {
  const [searchProduto, setSearchProduto] = useState([]);
  const [produtos, setProdutos] = useState([]);

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
    const filteredProdutos = produtos.filter(
      (produto) => produto.nome.toLowerCase().includes(term.toLowerCase()) // Filtra os produtos pelo nome
    );
    setSearchProduto(filteredProdutos); // Atualiza a lista filtrada
  };

  return (
    <div className="container_page_principal">
      <Header onSearch={handleSearch} produtos={searchProduto}/>
      <Produtos produtos={searchProduto} />
    </div>
  );
}
