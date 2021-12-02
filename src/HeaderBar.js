import React from 'react';
import reactDom from 'react-dom';
import { NavLink } from 'react-router-dom'


export default class HeaderBar extends React.Component {

    render() {
        return <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">PopFigShop</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/home">Accueil</a>
                    <a class="nav-item nav-link" href="/products">Produits</a>
                    <a class="nav-item nav-link" href="/cart">Panier</a>
                </div>
            </div>
        </nav>
    }
}