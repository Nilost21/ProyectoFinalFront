/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const ProductsProvider = createContext();

function ProductsContext({ children }) {
  const [products, setProducts] = useState([]);

  //CRUD USERS
  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products');
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (product) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/products',
        product
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsProvider.Provider value={{ products, addProduct }}>
      {children}
    </ProductsProvider.Provider>
  );
}

ProductsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsContext;