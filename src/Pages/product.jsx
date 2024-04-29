import React, { useContext } from 'react'
import { shopContext } from '../Context/shopContext'
import { useParams } from 'react-router-dom';
import BreadCum from '../Components/breadCrums/BreadCum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProduct/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(shopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <BreadCum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
