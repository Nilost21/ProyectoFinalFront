/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Swal from 'sweetalert2';

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
      setProducts([...products, data]);
    } catch (error) {
      console.log(error, 'Error adding product');
    }
  };

  const deleteProducts = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/products/${id}`
      );
      const filteredProducts = products.filter((product) => product.id !== id);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Product eliminated',
        showConfirmButton: false,
        timer: 1500,
      });
      setProducts(filteredProducts);
    } catch (error) {
      console.log(error, 'error when deleting product');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsProvider.Provider value={{ products, addProduct, deleteProducts }}>
      {children}
    </ProductsProvider.Provider>
  );
}

ProductsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsContext;
