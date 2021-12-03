import { useParams } from "react-router";
import { useEffect } from "react";
import data from "../data/data";
import { Badge } from "react-bootstrap";




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
            return <li>Exclusif : {pageProduct.exclusivity}</li>;
        } else {
            return null;
        }
    }

    

    return (
        <section className="section-content padding-y bg">
            <div className="container">

                <article className="card">
                    <div className="card-body">
                        <div class="row">
                            <aside class="col-md-6">
                                <article class="gallery-wrap">
                                    <div class="card img-big-wrap">
                                        <img src={pageProduct.img} class="rounded mx-auto d-block" />
                                    </div>
                                </article>
                            </aside>
                            <main class="col-md-6">
                                <article>
                                    <br />
                                    <h3>{pageProduct.title} #{pageProduct.number}
                                    </h3>
                                    <Badge pill bg="primary">Funko N° {pageProduct.reference}</Badge>
                                    {' '}
                                    <Badge pill bg="secondary">{pageProduct.licence}</Badge>
                                    <hr />

                                    <div class="mb-3">
                                        <h6>Caractéristiques</h6>
                                        <ul class="list-dots mb-0">
                                            <li>Licence : {pageProduct.licence}</li>
                                            <li>Version : {pageProduct.version}</li>
                                            <li>Année : {pageProduct.year}</li>
                                            <p>{isExclusive()}</p>

                                        </ul>
                                    </div>

                                    <div class="mb-3">
                                        <var class="price h4">{pageProduct.price} €</var> <br />
                                    </div>
                            
                                    <div class="mb-4">
                                        <a href="#" class="btn btn-primary mr-1">Ajouter au panier</a>
                                        
                                    </div>

                                </article>
                            </main>
                        </div>
                    </div>
                </article>
                <article class="card mt-5">
                    <div class="card-body">
                        <div class="row">
                            <h2>Description</h2>
                        </div>
                        <hr />
                        <p>
                            {pageProduct.desc}
                        </p>
                    </div>
                </article>
            </div>
        </section>




    );
}
