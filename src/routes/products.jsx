import { useEffect } from "react";
import { CartProvider } from 'react-use-cart';
import Search from '../components/Search';

export default function Products() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <h2>Produits</h2>
            <CartProvider>
                <Search/>
            </CartProvider>
        </div>
    );
  }