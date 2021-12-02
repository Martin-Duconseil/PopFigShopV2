import { useParams } from "react-router";

import data from "../data/data"
import { useCart } from 'react-use-cart';


export default function Product() {
    const { productId } = useParams()

    const pageProduct = data.productData.find((product) => {
        return parseInt(productId) === product.id
    })

    if (!pageProduct) {
        return 'ciao :)'
    }
    
    
    return (
        <div>
            Page produit !

            
        
            <br />
            <br />
            <br />

            {pageProduct.title}
        </div>
    );
}