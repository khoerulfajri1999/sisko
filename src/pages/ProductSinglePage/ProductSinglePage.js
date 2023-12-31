import React, {useEffect, useState} from 'react';
import "./ProductSinglePage.scss";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { fetchAsyncProductSingle, getProductSingle } from '../../store/productSlice';
import {formatPrice} from "../../utils/helpers";
import { addToCart, getCartMessageStatus, setCartMessageOff, setCartMessageOn } from '../../store/cartSlice';
import {CartMessage} from "../../components/CartMessage/CartMessage";

export const ProductSinglePage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  // getting single product
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));

    if(cartMessageStatus){
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  console.log(product)

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if(tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    })
  }

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if(tempQty < 1) tempQty = 1;
      return tempQty;
    })
  }

  const addToCartHandler = (product) => {
    let price = product?.product_price;
    let totalPrice = quantity * price;

    dispatch(addToCart({...product, quantity: quantity, totalPrice, price}));
    dispatch(setCartMessageOn(true));
  }

  const img = `https://sistemtoko.com/img/user/demo/product/${product.product_img}`
  return (
    
    <main className='py-5 bg-whitesmoke'>

    <div className='product-single'>
      <div className='container'>
        <div className='product-single-content bg-white grid'>
          <div className='product-single-l'>
            <div className='product-img'>
              <div className='product-img-zoom'>
                
                <img src = {img} alt = "" className='img-cover' />
              </div>
            </div>
          </div>

          <div className='product-single-r'>
            <div className='product-details font-manrope'>
              <div className='title fs-20 fw-5'>{product?.product_name}</div>
              <div>
                <p className='para fw-3 fs-15'>{product?.product_description}</p>
              </div>
              <div className='info flex align-center flex-wrap fs-14'>
                <div className='rating'>
                  <span className='text-orange fw-5'>Stok:</span>
                  <span className='mx-1'>
                    {product?.product_qty_stock}
                  </span>
                </div>
              </div>

              <div className = "price">
                <div className='flex align-center my-1'>
                    <div className='new-price fw-5 font-poppins fs-24 text-orange'>
                      {formatPrice(product?.product_price)}
                    </div>
                  </div>
              </div>

              <div className='qty flex align-center my-4'>
                <div className='qty-text'>Jumlah:</div>
                <div className='qty-change flex align-center mx-3'>
                  <button type = "button" className='qty-decrease flex align-center justify-center' onClick={() => decreaseQty()}>
                    <i className='fas fa-minus'></i>
                  </button>
                  <div className = "qty-value flex align-center justify-center">{quantity}</div>
                  <button type = "button" className='qty-increase flex align-center justify-center' onClick={() => increaseQty()}>
                    <i className='fas fa-plus'></i>
                  </button>
                </div>
                {
                  (product?.stock === 0) ? <div className ='qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5'>out of stock</div> : ""
                }
              </div>

              <div className='btns'>
                <button type = "button" className='add-to-cart-btn btn'>
                  <i className='fas fa-shopping-cart'></i>
                  <span className='btn-text mx-2' onClick={() => addToCartHandler(product)}>Tambah ke keranjang</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {cartMessageStatus && <CartMessage />}
  </main>
  )
}
