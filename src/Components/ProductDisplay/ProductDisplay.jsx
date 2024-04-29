import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { shopContext } from '../../Context/shopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(shopContext);

    return (
        <div className='productDisplay'>
          <div className="product-class-left">
            <div className="product-img-list">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>
            <div className="product-img">
              <img className='main-img' src={product.image} alt="" />
            </div>
          </div>
          <div className="product-class-right">
            <h1>{product.name}</h1>
              <div className="right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
              </div>
              <div className="right-prices">
                <div className="right-prices-old">
                    ${product.old_price}
                </div>
                <div className="right-prices-new">
                    ${product.new_price}
                </div>
              </div>
              <div className="right-discription">
                  A lightweight, usually knitted, pullover shirt, close-fitting and short sleeves, worn as an undershirt garment.
              </div>
              <div className="right-size">
                <h1>Select Size</h1>
                <div className="right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
              </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='right-category'><span>Category: </span>Women, T-shirt, Crop-Top</p>
                <p className='right-category'><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
