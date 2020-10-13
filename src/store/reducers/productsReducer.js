import { GET_PRODUCTS } from '../actions/types';

const initialState = {
  products: [],
  loading: true,
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products, loading: false }
    default:
      return state;
  }
}

export default productsReducer