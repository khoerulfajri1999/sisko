import './App.scss';
// react router v6
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import { SearchPage, CartPage, ProductSinglePage, HomePage} from "./pages/index";
// components
import Header from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import store from "./store/store";
import {Provider} from "react-redux";
import { Checkout } from './pages/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Header />

          <Routes>
            {/* home page route */}
            <Route path = "/" element = {<HomePage />} />
            {/* single product route */}
            <Route path = "/product/:id" element = {<ProductSinglePage />} />
            {/* cart */}
            <Route path = "/cart" element = {<CartPage />} />
            {/* checkout */}
            <Route path = "/cart/checkout" element = {<Checkout />} />
            {/* searched products */}
            <Route path = "/search/:searchTerm" element = {<SearchPage />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;