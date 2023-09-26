import React from 'react';
import "./CartModal.scss";
import { shopping_cart } from '../../utils/images';
import { formatPrice } from '../../utils/helpers';

export const CartModal = ({carts}) => {
  return (
    <div className='cart-modal'>
      <h5 className='cart-modal-title fw-5 fs-15 font-manrope text-center'>Produk tambahan terbaru</h5>
      {
        (carts?.length > 0) ? (
          <div className='cart-modal-list grid'>
            {
              carts.map(cart => {
                return (
                  <div className='cart-modal-item grid align-center font-manrope py-2' key = {cart.product_id}>
                    <div className='cart-modal-item-img'>
                      <img src = {`https://sistemtoko.com/img/user/demo/product/${cart?.product_img}`} alt = "" className='img-cover' />
                    </div>
                    <div className='cart-modal-item-title fs-13 font-manrope text-capitalize'>{cart?.product_name}</div>
                    <div className='cart-modal-item-price text-orange fs-14 fw-6'>
                      {formatPrice(cart?.product_price)}
                    </div>
                  </div>
                )
              })
            }

            <div className='text-capitalize view-cart-btn bg-orange fs-15 font-manrope text-center'>Lihat keranjang belanja saya</div>
          </div>) : (
          <div className = "flex flex-column align-center justify-center cart-modal-empty">
            <img src = {shopping_cart} alt = "" className='' />
            <h6 className='text-dark fw-4'>Belum ada produk</h6>
          </div>
        )
      }
    </div>
  )
}
