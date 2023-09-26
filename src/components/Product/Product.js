import React from 'react';
import { Link } from 'react-router-dom';
import {formatPrice} from "../../utils/helpers";
import "./Product.scss";

export const Product = ({product}) => {
  return (
    <Link to = {`/product/${product?.id}`} key = {product?.id}>
      <div className='product-item bg-white'>
        <div className='product-item-img'>
          <img className='img-cover' src = {product?.photo} alt = {product.name} />
        </div>
        <div className='product-item-info fs-14'>
          <div className='title py-2'>
            {product?.name}
          </div>
          <div className='price flex align-center justify-center'>
            <span>
              {formatPrice(product?.plain_price)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
