// Le fichier Itemcard.js nous permet de mettre en forme les articles 
// Pour cela on récupère les variables que l'on stock dans data.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Itemcard = ({ title, price, desc, img, item }) => {
    const { addItem } = useCart();

    return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                    <img alt="" src={img} className="card-img-top img-fluid"/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{title}</h5>
                            <h5 className="card-title">{price} €</h5>
                            <p className="card-text">{desc}</p>
                            <button
                                className="btn btn-success"
                                onClick={() => addItem(item)}
                            >
                                Ajouter au panier
                            </button>
                            <Link to={`/product/${item.slug}`}>
                                <button className="btn btn-success" >Lire la description</button>
                            </Link>
                        </div>
                </div>
            </div>
    )
}

export default Itemcard;
