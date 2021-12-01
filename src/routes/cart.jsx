import { CartProvider } from 'react-use-cart';
import Cart from '../Cart';

export default function CartPage() {
    return (
        <div>

            <h2>Panier</h2>
            
            <CartProvider>
                <Cart/>
            </CartProvider>

        </div>

    );
  }