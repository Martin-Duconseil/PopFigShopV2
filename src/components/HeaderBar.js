import React from 'react';

export default class HeaderBar extends React.Component {

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">PopFigShop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Accueil</a>
                    <a className="nav-item nav-link" href="/products">Produits</a>
                    <a className="nav-item nav-link" href="/cart">Panier</a>
                </div>
            </div>
        </nav>

        
    }
}


