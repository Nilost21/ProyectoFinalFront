import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Swal from 'sweetalert2';

export const ProductsProvider = createContext();

function ProductsContext({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await axios.get(
        'http://localhost:3000/api/products/',
        config
      );
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (product) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
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
    }
  };

  const deleteProducts = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      await axios.delete(
        `http://localhost:3000/api/products/${id}`,
        config
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
      console.log(error, 'Error when deleting product');
    }
  };

  const updateProduct = async (id, product) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      await axios.put(
        `http://localhost:3000/api/products/${id}`,
        config,
        product
      );
      await getProducts();
    } catch (error) {
      console.log(error, 'Error update Product');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsProvider.Provider
      value={{ products, addProduct, deleteProducts, updateProduct }}
    >
      {children}
    </ProductsProvider.Provider>
  );
}

ProductsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsContext;
