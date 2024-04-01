/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext';
import { Table, Button } from 'react-bootstrap';
import { ProductsProvider } from '../../context/ProductsContext';

function TableProducts() {
  const { products } = useContext(ProductsProvider);

  const isEmpty = () => products.length === 0;

  return (
    <Table className="mb-0">
      <thead>
        <tr className="subtitle">
          <th>Index</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {isEmpty() ? (
          <tr>
            <td colSpan="4">
              <h3 className="paragraph">No se encontraron usuarios</h3>
            </td>
          </tr>
        ) : (
          products.map((product, index) => {
            const { name, price, id, description } = product;

            return (
              <tr key={id} className="paragraph fw-bold ">
                <td className="bg-dark text-light border-0">{index}</td>
                <td className="bg-dark text-light border-0">{name}</td>
                <td className="bg-dark text-light border-0">{description}</td>
                <td className="bg-dark text-light border-0">{price}</td>
                <td className=" bg-dark text-light border-0">
                  <div className="d-flex flex-row justify-content-around">
                    <Button className="bg-secondary border-0 text-dark me-3 ">
                      Edit
                    </Button>
                    <Button className="bg-danger border-0 text-dark ">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
}
export default TableProducts;
