/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState, useContext } from 'react';
import { ProductsProvider } from './ProductsContext';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useAuth } from '../context/Utils/authUtils';

export const CartProvider = createContext();

function CartContext({ children }) {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  const { isLoggedIn } = useAuth();

  const addToCart = (item) => {
    if (!isLoggedIn) {
      Swal.fire({
        title: 'Oops!',
        text: 'Please log in first.',
        icon: 'error',
        timer: 2000,
        timerProgressBar: true,
        allowOutsideClick: false,
      });
      return;
    }

    const itemIndex = cart.findIndex((product) => product._id === item._id);

    if (itemIndex !== -1) {
      if (cart[itemIndex].quantity >= MAX_ITEMS) return;

      const updatedCart = cart.map((product, index) => {
        if (index === itemIndex) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
      setCart(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
    }

    Swal.fire({
      title: 'Success!',
      text: 'Product added to cart.',
      icon: 'success',
      timer: 1500,
      timerProgressBar: true,
      allowOutsideClick: false,
    });
  };

  const increaseQuantity = (id) => {
    const updateCart = cart.map((item) => {
      if (item._id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  };

  const decrementQuantity = (id) => {
    const updateCart = cart.map((item) => {
      if (item._id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  };

  const removeToCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product._id !== id));
  };

  const buyComplete = () => {
    clearCart();
    Swal.fire({
      title: 'Congratulations on your purchase!',
      text: 'Thank you for your purchase.',
      icon: 'success',
      confirmButtonText: 'Accept',
    });
  };

  const clearCart = () => {
    Swal.fire({
      title: 'info!',
      text: 'The cart has been cleared.',
      icon: 'info',
      confirmButtonText: 'OK',
    });
    setCart([]);
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartProvider.Provider
      value={{
        cart,
        addToCart,
        removeToCart,
        increaseQuantity,
        decrementQuantity,
        clearCart,
        buyComplete,
      }}
    >
      {children}
    </CartProvider.Provider>
  );
}

CartContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CartContext;
