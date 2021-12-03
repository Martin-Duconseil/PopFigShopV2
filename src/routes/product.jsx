import { useParams } from "react-router";

import data from "../data/data";


export default function Product() {
    const { productSlug } = useParams()
    
    const pageProduct = data.productData.find((product) => {
        return productSlug === product.slug
    })
    
    if (!pageProduct) {
        return "Oups ! La produit que vous cherchez actuellement n'existe pas ou n'existe plus."
    }

        return (
        <div>
            <h3>{pageProduct.title} #{pageProduct.number}</h3>
            <p>Référence Funko : {pageProduct.reference}</p>
            <img src={pageProduct.img} />
            <p>Licence : {pageProduct.licence}</p>
            <p>Version : {pageProduct.version}</p>
            <p>Année : {pageProduct.year}</p>
            <p>Exclusif : {pageProduct.exclusivity}</p>
            <p>Description : {pageProduct.desc}</p>
        </div>
    );
}