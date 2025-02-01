import React from 'react';
import './HomePage.css';

// Exemplo de imagens
import Casacosimg from '../Components/Assets/Assets/03-categoria.webp';
import Malhasimg from '../Components/Assets/Assets/02-categoria.webp';
import calcadoimg from '../Components/Assets/Assets/calçado.png';
import vestidoimg from '../Components/Assets/Assets/vestido.png';
import heroImage from '../Components/Assets/Assets/frame70.png';
import modelImage from '../Components/Assets/Assets/model.png';


const HomePage = () => {
  return (
    <div className="homepage">
      {/* Categorias */}
      <div className="categorias">
        <h2>Categorias</h2>
        <div className="categorias-grid">
          <div className="categoria-item">
            <img src={Casacosimg} alt="Casacos" />
            <a href="#" className="nome-cat">Casacos</a>
          </div>
          <div className="categoria-item">
            <img src={Malhasimg} alt="Malhas" />
            <a href="#" className="nome-cat">Malhas</a>
          </div>
          <div className="categoria-item">
            <img src={vestidoimg} alt= "Vestido" />
            <a href="#" className="nome-cat">Vestidos</a>
          </div>
          <div className="categoria-item">
            <img src={calcadoimg} alt="Calçados" />
            <a href="#" className="nome-cat">Calçados</a>
          </div>
        </div>
      </div>
      <div className="home-container">
        <div className="home-image" style={{ flex: 8 }}>
          <img src={heroImage} alt="Main" />
        </div>
        <div className="model-image" style={{ flex: 4 }}>
          <img src={modelImage} alt="Model" />
        </div>
      </div>
    </div>
    )
}
      


export default HomePage;
