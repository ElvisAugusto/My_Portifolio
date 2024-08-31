// src/App.js
import React from 'react'; // Importa o React.
import Header from '../components/Header'; // Caminho relativo para o Header
import Footer from '../components/Footer'; // Caminho relativo para o Footer
import '../components/Home.css'; // Importa o arquivo CSS para estilizar o componente Footer.
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home"> {/* Div principal que envolve o conteúdo da aplicação. */}
      <Header /> {/* Inclui o componente Header na parte superior da página. */}
        <body>
          <div class="container">
            <h1>Linguagens de programação</h1>
          </div>
          <div class="grid-container">
            <div class="grid-item">
              <Link to="/python">
                <img src="python.png" alt="Python"/>
              </Link>
            </div>
            <div class="grid-item">
              <Link to="/js">
                <img src="js.png" alt="JavaScript"/>
              </Link>
            </div>            
            <div class="grid-item">
              <img src="java.png" alt="Java"/>
            </div>
            <div class="grid-item">
              <img src="golang.png" alt="golang"/>
            </div>              
            <div class="grid-item">
              <img src="csharp.png" alt="csharp"/>
            </div>
            <div class="grid-item">
              <img src="kotlin.png" alt="kotlin"/>
            </div>
          </div>
          <div class="container">
            <h1>Banco de Dados</h1>
          </div>
          <div class="grid-container">
            <div class="grid-item">
              <img src="sqlite.png" alt="sqlite"/>
            </div>
            <div class="grid-item">
              <img src="mysql.png" alt="mysql"/>
            </div>
            <div class="grid-item">
              <img src="sqlserver.png" alt="sqlserver"/>
            </div>
            <div class="grid-item">
              <img src="oracle.png" alt="oracle"/>
            </div>
            <div class="grid-item">
              <img src="mongodb.png" alt="mongodb"/>
            </div>
          </div>
          <div class="container">
              <h1>Sistemas Operacionais</h1>
          </div>
          <div class="grid-container">
            <div class="grid-item">
              <img src="windows.png" alt="windows"/>
            </div>
            <div class="grid-item">
              <img src="linux.png" alt="linux"/>
            </div>
          </div>                       
        </body>
      <Footer /> {/* Inclui o componente Footer na parte inferior da página. */}
    </div>
  );
}

export default Home; // Exporta o componente App para ser usado como ponto de entrada do aplicativo React.
