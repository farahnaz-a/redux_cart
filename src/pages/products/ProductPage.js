import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from '../../components/cards/product-card/ProductCard'
import './productPage.css'

const ProductPage = () => {
  let allProductsList = useLoaderData()

  return (
    <section className="product section-gap">
        <div className="container">
          <div className="grid">
            {
              allProductsList.map((item)=>(
                <ProductCard key={item.id} productsInfo={item} />
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default ProductPage