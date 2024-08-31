// src/components/Footer.js
import React from 'react'; // Importa o React, necessário para criar componentes em JSX.
import './Footer.css'; // Importa o arquivo CSS para estilizar o componente Footer.

const Footer = () => {
  return (
    <footer className="footer"> {/* Elemento <footer>, usado semanticamente para representar o rodapé da página. */}
      <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p> {/* Parágrafo exibindo o ano atual e uma mensagem de direitos autorais. */}
    </footer>
  );
}

export default Footer; // Exporta o componente Footer para ser utilizado em outros arquivos.
