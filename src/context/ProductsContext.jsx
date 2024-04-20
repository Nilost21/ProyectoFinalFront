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
      const response = await axios.get('http://localhost:3000/api/products');
      const data = response.data;
      setProducts([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (product) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/products/create',
        product
      );
      const data = response.data;
      setProducts([...products, data]);
      await getProducts();
    } catch (error) {
      console.log(error, 'Error adding product');
    }
  };

  const deleteProducts = async (_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/products/${_id}`
      );
      const filteredProducts = products.filter((product) => product.id !== _id);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Product eliminated',
        showConfirmButton: false,
        timer: 1500,
      });
      setProducts([...filteredProducts]);
      await getProducts();
    } catch (error) {
      console.log(error, 'error when deleting product');
    }
  };

  const updateProduct = async (product) => {
    try {
      await axios.put(
        `http://localhost:3000/api/products/${product._id}`,
        product
      );
      const updatedProducts = products.map((p) =>
        p._id === product._id ? product : p
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.log(error, 'Error updating product');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsProvider.Provider
      value={{
        products,
        addProduct,
        deleteProducts,
        updateProduct,
        getProducts,
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
