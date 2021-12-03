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
<<<<<<< HEAD
    <section className="section-content padding-y bg">
        <div className="container">

            <article className ="card">
                <div className ="card-body">
                    <div class="row">
                        <aside class="col-md-6">
                            <article class="gallery-wrap">
                                <article class="card img-big-wrap">
                                                <img src={pageProduct.img} class="rounded mx-auto d-block" />
                                </article>                
                                                <h3>{pageProduct.title} #{pageProduct.number}</h3>
                                                <p>Référence Funko : {pageProduct.reference}</p>
                                                
                                                <p>Licence : {pageProduct.licence}</p>
                                                <p>Version : {pageProduct.version}</p>
                                                <p>Année : {pageProduct.year}</p>
                                                <p>Exclusif : {pageProduct.exclusivity}</p>
                                                <p>Description : {pageProduct.desc}</p>
                                
                            </article>
                        </aside>
                    </div>
                </div>
            </article>
=======
        <div>
            <h3>{pageProduct.title} #{pageProduct.number}</h3>
            <p>Référence Funko : {pageProduct.reference}</p>
            <img src={pageProduct.img} />
            <p>Licence : {pageProduct.licence}</p>
            <p>Version : {pageProduct.version}</p>
            <p>Année : {pageProduct.year}</p>
            <p>{isExclusive()}</p>
            <p>Description : {pageProduct.desc}</p>
>>>>>>> 00759b116fae13789913d8c0d8bc39377aa6cb8b
        </div>
    </section>
    );
}
