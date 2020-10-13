import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../store/actions/productsAction';
// import { Container } from './styles';

function Products() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector(state => state.productsReducer)

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  return (
    <div>
      <h1>Lista de produtos</h1>
      <table>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {!loading && (
            products.map(prod => (
              <tr key={prod.id}>
                <td>{prod.description}</td>
                <td>{prod.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Products;