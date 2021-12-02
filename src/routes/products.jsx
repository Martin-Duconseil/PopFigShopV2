import { CartProvider } from 'react-use-cart';
import Search from '../components/Search';

export default function Products() {
    return (
        <div>
            <h2>Produits</h2>
            <CartProvider>
                <Search/>
            </CartProvider>
        </div>
    );
  }