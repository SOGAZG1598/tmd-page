import React, { useState } from 'react';
import logow from '../../assets/images/logo/wiki1.png'
import './Personajes.scss';

const Personajes = ({ personajesData, seriesLogos }) => {
  const [selectedSerie, setSelectedSerie] = useState(null);
  const [query, setQuery] = useState("");
  const [flippedCard, setFlippedCard] = useState(null);


  // Filtrado por serie
  let personajesFiltrados = selectedSerie
    ? personajesData.filter((p) => p.serie === selectedSerie)
    : personajesData.sort((a, b) => a.nombre.localeCompare(b.nombre));

  // Filtrado por buscador
  personajesFiltrados = personajesFiltrados.filter((p) =>
    p.nombre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="personajes-page-wrapper">

      {/* ------------------- SECCIÓN ORIGINAL ------------------- */}
      <div className="full-screen-element">
      <div className="image-container">
      <img
              src={logow}
              alt=""
            />
      </div>
        <div className="text-part">
          <h1>¡¡Todo sobre los personajes de TheMarioDimension!!</h1>
          <h2>Haz click en la tarjeta del personaje para ver más información.</h2>
          <h2>¡Objetos, Lugares y aún más Personajes se agregarán proximamente!</h2>
        </div>
      </div>

      {/* ------------------- BUSCADOR ------------------- */}
      <div className="search-wrapper">
        <input
          className="search-bar"
          type="text"
          placeholder="Buscar personaje..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* ------------------- FILTROS ------------------- */}
      <div className="series-filter">
        {seriesLogos.map((serie) => (
          <div
            key={serie.id}
            className={`serie-logo ${selectedSerie === serie.id ? 'active' : ''}`}
            onClick={() => setSelectedSerie(serie.id)}
          >
            <img src={serie.logo} alt={serie.id} />
          </div>
        ))}

        {selectedSerie && (
          <button className="clear-filter" onClick={() => setSelectedSerie(null)}>
            Ver todos
          </button>
        )}
      </div>

      {/* ------------------- PERSONAJES ------------------- */}
      <div className="personajes-grid">
  {personajesFiltrados.map((p, index) => (
    <div
      key={p.nombre}
      className="personaje-card flip-container slide-in"
      style={{ animationDelay: `${index * 0.06}s` }}
      onClick={() => setFlippedCard(flippedCard === p.nombre ? null : p.nombre)}
    >
      <div className={`flip-card-inner ${flippedCard === p.nombre ? 'flipped' : ''}`}>
        
        {/* LADO FRONTAL */}
        <div className="flip-card-front">
          <img src={p.imagen} alt={p.nombre} />
        </div>

        {/* LADO TRASERO */}
        <div className="flip-card-back">
          <p>{p.descripcion}</p>
        </div>

      </div>
    </div>
  ))}
</div>
<p>
  Fuentes:&nbsp;
  <a href="https://www.youtube.com/@TheZeldaDimension" target="_blank" rel="noopener noreferrer">
    TheMarioDimension
  </a>
  &nbsp;--&nbsp;
  <a href="https://x.com/DMB_RR" target="_blank" rel="noopener noreferrer">
    Server DMBRR: Museo
  </a>
  &nbsp;--&nbsp;
  <a href="https://youtube.fandom.com/es/wiki/TheMarioDimension" target="_blank" rel="noopener noreferrer">
    TMD Wiki
  </a>
</p>

    </div>
  );
};

export default Personajes;
