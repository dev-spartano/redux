import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../../store/actions/productsAction'

function ListProducts({ prods }) {
  const dispatch = useDispatch()

  const { products } = useSelector(state => ({
    products: state.productsReducer.products
  }))

  const onAddProducts = () => {
    dispatch(getProducts())
  }

  return (
    <div>
      <button
        onClick={() => onAddProducts()}
        style={{ border: 'none', borderRadius: 5, color: '#fff', padding: 10, fontWeight: 'bold', background: 'purple' }}
      >Add Products
      </button>

      {console.log('Prods: ', prods)}
    </div>
  )
}

export default ListProducts;