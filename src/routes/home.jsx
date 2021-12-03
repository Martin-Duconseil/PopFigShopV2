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
            <h2>Page d'accueil</h2>
            <br/>
            <h2 className="text-center mt-3">Pop à la Une</h2>
            <br/>
            
            <div>
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

        </div>
    );
  }