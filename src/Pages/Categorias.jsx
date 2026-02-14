import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data_product from '../Components/Assets/Assets/data';
import './Categorias.css';

const Categorias = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();

  // Mapear nomes de categorias para filtros
  const categoryMap = {
    'scarpin': 'Scarpin',
    'bota': 'Bota',
    'sandalia': 'Sandália',
    'sapato': 'Sapato'
  };

  const categoryFilter = categoryMap[categoria] || categoria;
  
  // Filtrar produtos pela categoria
  const produtosFiltrados = data_product.filter(
    (product) => product.category && product.category === categoryFilter
  );

  return (
    <div className="categorias-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Voltar
      </button>
      <h1>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>
      
      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado nesta categoria.</p>
      ) : (
        <div className="produtos-grid">
          {produtosFiltrados.map((product) => (
            <div key={product.id} className="produto-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">R$ {product.new_price.toFixed(2)}</p>
              <button onClick={() => navigate(`/item/${product.id}`)}>Ver Detalhes</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categorias;