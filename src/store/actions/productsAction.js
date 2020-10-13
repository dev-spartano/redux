import api from '../../services/api';

import { GET_PRODUCTS, ERROR } from './types';

export const getProducts = () => {
  return async dispatch => {
    try {
      const res = await api.get('/products');

      dispatch({ type: GET_PRODUCTS, products: res.data })
    } catch (error) {
      dispatch({ type: ERROR, error })
    }
  };
}