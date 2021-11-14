import { useState, useEffect } from 'react';
import { getStoredCart } from '../Componentes/utilitis/fakedb';


const useCart = Packages =>
{
    const [cart, setCart] = useState([]);

    useEffect(() =>
    {

        if (Packages.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedPackage = Packages.find(Package => Package.key === key);
                if (addedPackage) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedPackage.quantity = quantity;
                    storedCart.push(addedPackage);
                }
            }
            setCart(storedCart);
        }

    }, [Packages]);

    return [cart, setCart];
}
export default useCart;