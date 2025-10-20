import React from 'react';
import Rotas from './RoutesPages';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  );
}


export default App;
