/* eslint-disable no-unused-vars */
import './../../css/Home.css';
import { Container } from 'react-bootstrap';
import Products from '../Products/Products';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      const data = response.data;
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products');
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Container>
        <header>
          <Products products={products} />
        </header>
      </Container>
    </>
  );
}
export default Home;
