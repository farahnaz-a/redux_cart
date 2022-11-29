import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { removeFromCart } from '../../slices/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {

    let items = useSelector((state) => state.cart.cartItems)
    let dispatch = useDispatch()
    let allProductsList = useLoaderData();

    

  return (
    
    <div className="cart">
        <div className="container">
            <h1>Cart</h1>
            <div className="cart__items">
                 {
                    items.map((item)=>(
                        <div className="cart__item" key={item.product}>
                                {
                                    allProductsList.map((product)=>(
                                        product.id === item.product ?  
                                        <div className="cart__item__info" key={product.id}>
                                            <img src={product.thumbnail} alt={product.title} />
                                            <div className="cart__item__info__details">
                                                <h3>{product.title}</h3>
                                                <p>Price: {product.price}</p>
                                                <p>Quantity: {item.qty}</p>
                                                 <>
                                                    <button onClick={() => dispatch(removeFromCart(product.id))} className="btn btn--primary">x</button>
                                                 </>
                                            </div>
                                        </div>
                                        : null
                                    ))
                                }
                            <div/>
                        </div>
                    ))

                 }
            </div>
        </div>
    </div>



  )
}

export default Cart