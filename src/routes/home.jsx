import { useEffect } from "react";
import data from "../data/data";
import Itemcard from "../components/Itemcard"
import { CartProvider } from "react-use-cart";

export default function Products() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <h2 className="text-center mt-3">Bienvenue sur PopFigShop</h2>
            <p className="text-center mt-3">Le site de référence pour se renseigner et acheter des figurines pop</p>
            <br/>
            <div>
                <h3 className="text-center mt-3">Harry Potter</h3><br/>
                {data.productData.filter(item => item.licence.includes('Harry Potter')).map(filtered => (
                        <CartProvider>
                            <Itemcard 
                                img={filtered.img}
                                title={filtered.title}
                                price={filtered.price}
                                id={filtered.id}
                                slug={filtered.slug}
                                item={filtered} 
                            />
                        </CartProvider>
                        
                ))}
            </div>

                    <br/>

            <div>
                <h3 className="text-center mt-3">Le Seigneur des Anneaux</h3><br/>
                {data.productData.filter(item => item.licence.includes('Le Seigneur des Anneaux')).map(filtered => (
                        <CartProvider>
                            <Itemcard 
                                img={filtered.img}
                                title={filtered.title}
                                price={filtered.price}
                                id={filtered.id}
                                slug={filtered.slug}
                                item={filtered} 
                            />
                        </CartProvider>
                        
                ))}
            </div>

            <div>
                <h3 className="text-center mt-3">Naruto</h3>
                {data.productData.filter(item => item.licence.includes('Naruto')).map(filtered => (
                        <CartProvider>
                            <Itemcard 
                                img={filtered.img}
                                title={filtered.title}
                                price={filtered.price}
                                id={filtered.id}
                                slug={filtered.slug}
                                item={filtered} 
                            />
                        </CartProvider>
                        
                ))}
            </div>

        </div>
    );
  }