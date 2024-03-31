/* eslint-disable no-unused-vars */
import './../../css/Home.css';
import { Container } from 'react-bootstrap';
import Products from '../Products/Products';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <header></header>
      </Container>
    </>
  );
}
export default Home;
