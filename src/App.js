// Le fichier App.js est ce qui va s'afficher sur notre page
// On importe les différents éléments dont on a besoin

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
import Search from './Search';

// On appelle les différents fichiers ici

function App() {
  return (
      <>
      
        <CartProvider>
          
          <Home />
          <Search />
          <Cart />
        </CartProvider>
      </>
  );
}

export default App;
