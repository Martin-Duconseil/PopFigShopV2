import { useEffect } from "react";
import { CartProvider } from 'react-use-cart';
import Cart from '../components/Cart';

export default function CartPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <CartProvider>
                <Cart/>
            </CartProvider>
        </div>

    );
  }