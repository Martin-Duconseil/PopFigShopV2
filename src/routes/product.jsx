import { useParams } from "react-router";
import { useEffect } from "react";
import data from "../data/data";



export default function Product() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const { productSlug } = useParams()
    
    const pageProduct = data.productData.find((product) => {
        return productSlug === product.slug
    })
    
    if (!pageProduct) {
        return "Oups ! La produit que vous cherchez actuellement n'existe pas ou n'existe plus."
    }

    function isExclusive() {
        if (pageProduct.exclusivity != "") {
            return <p>Exclusif : {pageProduct.exclusivity}</p>;
        } else {
            return null;
        }
    }

    return (
        <div>
            <h3>{pageProduct.title} #{pageProduct.number}</h3>
            <p>Référence Funko : {pageProduct.reference}</p>
            <img src={pageProduct.img} />
            <p>Licence : {pageProduct.licence}</p>
            <p>Version : {pageProduct.version}</p>
            <p>Année : {pageProduct.year}</p>
            <p>{isExclusive()}</p>
            <p>Description : {pageProduct.desc}</p>
        </div>
    );
}