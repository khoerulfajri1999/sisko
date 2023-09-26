import React, {useEffect} from 'react';
import "./HomePage.scss";
import { useSelector, useDispatch } from 'react-redux';
import {ProductList} from "../../components/ProductList/ProductList";
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../../store/productSlice';
import {Loader} from "../../components/Loader/Loader";
import { STATUS } from '../../utils/status';


export const HomePage = () => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, []);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);


  return (
    <main>
      <div className='slider-wrapper'>
      </div>
      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>
            <div className='categories-item'>
              <div className='title-md'>
                <h3>lihat produk kami</h3>
              </div>
              { productStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {products}/>}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
