/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const ProductsProvider = createContext();

function ProductsContext({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        'http://localhost:3000/api/products/',
        config
      );
      const data = response.data;
      setProducts([...data]);
    } catch (error) {
      console.log(error, 'Error getting products');
      throw error;
    }
  };

  const getProduct = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `http://localhost:3000/api/product/${id}`,
        config
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error, 'Error getting product');
      throw error;
    }
  };

  const addProduct = async (product) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        'http://localhost:3000/api/products/create',
        config,
        product
      );
      const data = response.data;
      setProducts([...products, data]);
    } catch (error) {
      console.log(error, 'Error adding product');
      throw error;
    }
  };

  const editProduct = async (id, formData) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        `http://localhost:3000/api/product/${id}`,
        formData,
        config
      );
      const updatedProduct = response.data;
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id ? updatedProduct : product
        )
      );
    } catch (error) {
      console.log(error, 'Error editing product');
      throw error;
    }
  };

  const deleteProduct = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`http://localhost:3000/api/product/${id}`, config);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } catch (error) {
      console.log(error, 'Error deleting product');
      throw error;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsProvider.Provider
      value={{
        products,
        getProducts,
        getProduct,
        addProduct,
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsProvider.Provider>
  );
}

ProductsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsContext;
