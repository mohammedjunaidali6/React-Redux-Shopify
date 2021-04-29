import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import currencyFormatter from 'currency-formatter'
import {BsDash, BsPlus} from 'react-icons/bs'
import { BsFillTrashFill } from "react-icons/bs";


const Cart = () => {
    const{products} = useSelector(state=> state.CartReducer)
    const dispatch = useDispatch();
    return(
        <div className="cart">
           <div className="container">
            <h3>Your cart</h3>
            {products.length > 0 ? <>
            <div className="row">
                <div className="col-9">
                    <div className="cart-heading">
                        <div className="row">
                            <div className="col-2">Pictures</div>
                            <div className="col-2">Name</div>
                            <div className="col-2">Price</div>
                            <div className="col-2">Inc/Dec</div>
                            <div className="col-2">Total Price</div>
                            <div className="col-2">Remove</div>
                        </div>
                    </div>
                    {products.map(product => (
                        <div className="row verticalAlign" key={product.id}>
                            <div className="col-2">
                                <div className="cart-image">
                                    <img src={`/images/${product.image}`} alt="" />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="cart-name">
                                   {product.name} 
                                </div>
                            </div>
                            <div className="col-2">
                             <div className="cart-price">
                             {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                             </div>
                            </div>
                            <div className="col-2">
                            <div className="details-info">
                      <div className="details-incdec">
                      <span className="dec" onClick={()=> dispatch({type: 'DEC', payload: product.id})}><BsDash /></span>
                    <span className="quantity">{product.quantity}</span>
                    <span className="inc" onClick={()=> dispatch({type: 'INC', payload: product.id})}><BsPlus /></span>
                    </div>
                  </div>
                            </div>
                            <div className="col-2">
                                <div className="cart-total text-center">
                                {currencyFormatter.format(product.discountPrice * product.quantity, { code: 'USD' })}
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="cart-remove" onClick={()=> dispatch({type: 'REMOVE',payload: product.id})}>
                                    <BsFillTrashFill />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-3">
                 summary
                </div>
            </div>
            </> : 'Your cart is empty'}
           </div>
        </div>
    )
}
export default Cart;