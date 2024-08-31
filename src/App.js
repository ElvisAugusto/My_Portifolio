import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes'; // Certifique-se de que este caminho está correto

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes /> {/* Renderiza as rotas */}
      </div>
    </Router>
  );
}

export default App;
