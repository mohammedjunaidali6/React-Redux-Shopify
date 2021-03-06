import React from 'react'
import Header from './Header';
import {useSelector} from 'react-redux'
import currencyFormatter from 'currency-formatter'
import {Link} from 'react-router-dom'

const Home = () => {
    const {products} = useSelector(state => state.ProductsReducer);
    return(
        <div>
            <Header />
          <div className="container" >
            <div className="row">
                {products.map(product=> (
                    <div className="col-3" key={product.id}>
                        <div className="product">
                            <div className="product-img">
                                <Link to={`/details/${product.id}`}><img src={`/images/${product.image}`} alt="image name" /></Link>
                            </div>
                            <div className="product-name">
                                {product.name}
                            </div>
                            <div className="row">
                                <div className="col-6">
                                   <div className="product-price">
                                        {currencyFormatter.format(product.price, { code: 'USD' })}<span>
                                            {product.discount}%</span>
                                   </div>
                                </div>
                                <div className="col-6">
                                   <div className="product-discount-price">
                                   {currencyFormatter.format(product.discountprice, { code: 'USD' })}
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
    )
}
export default Home;