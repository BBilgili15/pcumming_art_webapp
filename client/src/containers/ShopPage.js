import React from 'react'
import { Link, useNavigate } from "react-router-dom";




const ShopPage = () => {
  return (
    <div className='page-container'>
      <div className='shop_options-container'>
        <Link to="/shop/ceramics">
          <div id='shop_option'>
            <h2>Shop Ceramics</h2>
          </div>
        </Link>
        
        <Link to="/shop/canvas">
          <div id='shop_option'>
            <h2>Shop Canvas</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShopPage