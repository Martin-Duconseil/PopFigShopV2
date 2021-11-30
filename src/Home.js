// Le fichier Home.js est ce qui va s'afficher sur notre page d'accueil
// On importe les différents éléments dont on a besoin

import React from 'react';
import Itemcard from './Itemcard'
import data from './data';

const Home = () => {
    return ( // Ici on affiche le titre du site et de la première partie puis les cartes d'article
        <>
            <h1 className="text-center mt-3">PopFigShop</h1>
            <br></br>
            <h2 className="text-center mt-3">Pop à la Une</h2>
            <br></br>
                {/* <section className="py-4 container">
                    <div className="row justify-content-center">
                    {data.productData.map((item, index)=>{
                        return (
                            <Itemcard 
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price} 
                                item={item}
                                key={index}
                            />
                        )
                    })}

                    </div>
                </section> */}
        </>
    )
}

export default Home;