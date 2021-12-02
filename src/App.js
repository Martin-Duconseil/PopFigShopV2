// Le fichier App.js est ce qui va s'afficher sur notre page
// On importe les différents éléments dont on a besoin

import React from 'react';
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './HeaderBar';

// On appelle les différents fichiers ici

export default function App() {
  return (
      <div>
        {/* <h1>PopFigShop</h1> */}
        <nav>
          <HeaderBar />
          <br/>
          {/* <Link to="/">Accueil</Link>
          <Link to="/products">Produits</Link>
          <Link to="/cart">Panier</Link> */}
        </nav>
        <Outlet/>
      </div>
      
  );
}
