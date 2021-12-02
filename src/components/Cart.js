// Le fichier Cart.js est notre panier d'achat

import React from 'react';
import { useCart } from 'react-use-cart';

// On importe et on utilise 'react-use-cart' pour avoir un panier fonctionnel

// On définit le panier avec plusieurs paramètres
// Ils nous permettent d'ajouter des articles, de les retirer etc...

const Cart = () => {
   const { 
       isEmpty,
       items,
       totalItems,
       cartTotal,
       updateItemQuantity,
       removeItem,
       emptyCart, 
    } = useCart();
    if (isEmpty) return <h1 className="text-center">Votre panier est vide.</h1> // Message affiché si le panier est vide
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12"> 
                    <h1>Panier</h1>
                    <h5>Nombre d'article : {totalItems}</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index) =>{
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img alt="" src={item.img} style={{height: '6rem'}} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price} €</td>
                                        <td>Quantité x {item.quantity}</td>
                                        <td>
                                            <button 
                                                className="btn btn-info ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1 )}
                                            >-</button>

                                            <button 
                                                className="btn btn-info ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1 )}
                                            >+</button>

                                            <button 
                                                className="btn btn-danger ms-2"
                                                onClick={() => removeItem(item.id)}
                                            >Supprimer</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>  
                <div className="col-auto ms-auto">
                    <h2>Prix total : {cartTotal} €</h2>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-danger m-2"
                        onClick={() => emptyCart()}
                    >Vider le panier</button>
                    <button className="btn btn-primary m-2">Acheter</button>
                </div>
            </div>
         </section>
    )
}

export default Cart;