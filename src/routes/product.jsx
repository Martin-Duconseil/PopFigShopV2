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
        </div>
    </section>
    );
}
