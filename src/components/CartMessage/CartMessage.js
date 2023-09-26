import React from 'react';
import "./CartMessage.scss";
import { correct } from "../../utils/images";

export const CartMessage = () => {
  return (
    <div className='cart-message text-center'>
      <div className='cart-message-icon'>
        <img src = {correct} alt = "" />
      </div>
      <h6 className='text-white fs-14 fw-5'>Produk telah ditambahkan ke keranjang belanja</h6>
    </div>
  )
}
