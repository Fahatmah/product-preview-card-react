import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Popup from './Popup'

export default function Card() {
  const [popup, setPopup] = useState(false)

  function handleAddedItem() {
    setPopup(true)
    setTimeout(() => setPopup(false), 2000)
  }

  return (
    <>
      {popup && <Popup />}
      <div className='product container product-card-bg-clr'>
        <div className='product__image-wrapper'></div>
        <div className='product__detail'>
          <p className='perfume-txt product-description-clr fw-reg fs-100'>
            PERFUME
          </p>
          <h1 className='product__detail_name product-name-clr fw-bold fs-600 ff-fraunces'>
            Gabrielle Essence Eau De Parfums
          </h1>
          <p className='product__detail_description product-description-clr fw-reg fs-200'>         
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className='product__detail_price'>
            <h2 className='sale-price product-price-clr fw-bold fs-600 ff-fraunces'>
              $149.99
            </h2>
            <p className='regular-price product-description-clr fw-reg fs-100'>
              $169.99
            </p>
          </div>
          <button className='add-to-cart_btn btn-clr' onClick={handleAddedItem}>
            <a href='#' aria-label='click to add to cart' className='neutral-clr-100 fw-bold fs-200'>
              <FaShoppingCart /> Add to Cart
            </a>
          </button>
        </div>
      </div>
    </>
  )
}
