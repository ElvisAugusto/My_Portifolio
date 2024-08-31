import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ menuItems, onMenuClick }) => {
  const [activeMainIndex, setActiveMainIndex] = useState(null); // Índice do item principal ativo
  const [activeSubIndex, setActiveSubIndex] = useState(null); // Índice do subitem ativo
  const [openSubtopicsIndex, setOpenSubtopicsIndex] = useState(null); // Índice do item com subtópicos aberto

  const handleMainClick = (index, item) => {
    if (item.subtopics.length === 0) {
      // Se o item não tiver subtópicos, ativa o item principal e chama a função de clique
      onMenuClick(item.title);
      setActiveMainIndex(index);
      setActiveSubIndex(null); // Reseta os subtópicos ativos
      setOpenSubtopicsIndex(null); // Fecha qualquer subgrupo de tópicos
    } else {
      // Se o item tiver subtópicos, alterna a abertura/fechamento dos subtópicos
      setOpenSubtopicsIndex(openSubtopicsIndex === index ? null : index);
      setActiveMainIndex(null); // Reseta o item principal ativo
      setActiveSubIndex(null); // Reseta subíndice ativo
    }
  };

  const handleSubtopicClick = (subtopic, subIndex) => {
    // Define o subitem como ativo ao ser clicado
    onMenuClick(subtopic);
    setActiveSubIndex(subIndex);
  };

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              className={`button-primary ${activeMainIndex === index && item.subtopics.length === 0 ? 'active' : ''}`}
              onClick={() => handleMainClick(index, item)}
            >
              {item.title}
              {item.subtopics.length > 0 && (
                <span className="icon">{openSubtopicsIndex === index ? '▼' : '▶'}</span>
              )}
            </button>
            {item.subtopics.length > 0 && openSubtopicsIndex === index && (
              <ul className="subtopics.active">
                {item.subtopics.map((subtopic, subIndex) => (
                  <li key={subIndex}>
                    <button
                      className={`button-subtopic ${activeSubIndex === subIndex ? 'active' : ''}`}
                      onClick={() => handleSubtopicClick(subtopic, subIndex)}
                    >
                      {subtopic}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
