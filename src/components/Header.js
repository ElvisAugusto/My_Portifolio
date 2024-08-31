// src/components/Header.js
import React from 'react'; // Importa o React, necessário para criar componentes em JSX.
import './Header.css'; // Importa o arquivo CSS para estilizar o componente Header.

const Header = () => {
  return (
    <header className="header"> {/* Elemento <header>, usado semanticamente para representar o cabeçalho da página. */}
      <img src="portifolio.png" alt="portifolio" width="200" height="200"/> 
      <img src="dev.png" alt="dev"/>          
    </header>
  );
}

export default Header; // Exporta o componente Header para ser utilizado em outros arquivos.
