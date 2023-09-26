import React from 'react';
import "./Checkout.scss";
import { useSelector } from 'react-redux';
import { shopping_cart } from '../../utils/images';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';
import { getAllCarts } from '../../store/cartSlice';

export const Checkout = () => {
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);
  console.log(carts)
  
  if (carts.length === 0) {
    return (
      <div className='container my-5'>
        <div className='empty-cart flex justify-center align-center flex-column font-manrope'>
          <img src={shopping_cart} alt="" />
          <span className='fw-6 fs-15 text-gray'>Keranjang belanja anda kosong.</span>
          <Link to="/" className='shopping-btn bg-orange text-white fw-5'>Belanja sekarang</Link>
        </div>
      </div>
    )
  }

  return (
    <div className='cart bg-whitesmoke'>
      <div className='container'>
        <div className='cart-ctable'>
          <div className='cart-chead bg-white'>
            <div>
              <div className='cart-cth'>
                <div className='fw-5'>Pesanan yang dipesan</div>
              </div>
            </div>
          </div>

          <div className='cart-cbody bg-white'>
            {
              carts.map((cart, idx) => {
                return (
                  <div className='cart-ctr py-1' key={cart?.product_id}>
                    <div className='cart-ctd'>
                      <span className='cart-ctxt'>{idx + 1}</span>
                    </div>
                    <div className='gambar'>
                      <img src={`https://sistemtoko.com/img/user/demo/product/${cart?.product_img}`} />
                    </div>
                    <div className='cart-ctd'>
                      <span className='cart-ctxt'>{cart?.product_name}</span>
                    </div>
                    <div className='cart-ctd'>
                      <span className='cart-ctxt'>{formatPrice(cart?.product_price)}</span>
                    </div>
                    <div className='cart-ctd'>
                      <span className='cart-ctxt text-orange fw-5'>{formatPrice(cart?.totalPrice)}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className='cart-cfoot flex align-start justify-between py-3 bg-white'>
            <div className='cart-cfoot-r flex flex-column justify-end'>
              <div className='total-txt flex align-center justify-end'>
                <div className='font-manrope fw-5'>Total ({itemsCount}) items: </div>
                <span className='text-orange fs-22 mx-2 fw-6'>{formatPrice(totalAmount)}</span>
              </div>
            </div>
          </div>

          <div className='cart-cfoot text-center py-3 bg-white'>
            <div className='text-center font-manrope fw-5'>Data Pelanggan: </div>
          </div>
          <div className='cart-cfoot py-3 bg-white'>
            <form className='form'>
              <div className="form-satu row mb-3">
                <lable className="col-sm-3 col-form-lable">Nama :</lable>
                <div className="col-md-8">
                  <input type="text" className="form-control" name="username" placeholder="Masukkan nama lengkap anda" />
                </div>
              </div>

              <div className="form-satu row mb-3">
                <lable className="form-satu col-sm-3 col-form-lable">Email</lable>
                <div className="col-md-8">
                  <input type="text" className="form-control" name="email" placeholder="Masukkan email aktif anda" />
                </div>
              </div>

              <div className="form-satu row mb-3">
                <lable className="col-sm-3 col-form-lable">No. HP</lable>
                <div className="col-md-8">
                  <input type="text" className="form-control" name="phone" placeholder="Masukkan nomor HP aktif anda" />
                </div>
              </div>

              <div className="form-satu row mb-3">
                <lable className="col-sm-3 col-form-lable">Alamat</lable>
                <div className="col-md-8">
                  <input type="text" className="form-control" name="address" placeholder="Enter Address" />
                </div>
              </div>

              <div className="button-yes text-center form-satu row mb-3">
                <lable className="col-sm-3 col-form-lable"></lable>
                <div className="button col-md-1">
                  <button type="submit" className="submit">Kirim</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

