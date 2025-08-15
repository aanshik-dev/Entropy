import './Merch.css'
import { imgPath } from '../../utils/utilityFunctions'
import { Icon } from '@iconify/react/dist/iconify.js';



const Merch = () => {


  const toggleClass = () => {
    const merchCard = document.querySelector('.merch-card');
    merchCard.classList.toggle('flipped');
  }

  return (
    <>
      <div className="merch-content">

        <div className="merch-wrap appear">
          <div className="merch">
            <div className="merch-img-content">

              <div className="merch-card" onClick={toggleClass}>
                <img className='merch-front' src={imgPath('TshirtFront.webp')} alt="Merch 01" />
                <img className='merch-back' src={imgPath('TshirtBack.webp')} alt="Merch 01" />
              </div>
              <div className="sale-tag-wrap">
                <div className="sale-hole"></div>
                <div className="sale-tag">
                  <div className="sale-text">sale</div>
                  <div className="sale-offer">10% off</div>
                </div>
              </div>
              <div className="merch-flip-btn" onClick={toggleClass}>
                <Icon icon={"gis:flip-h"} />
              </div>

            </div>
            <div className="merch-detail">
              <div className="merch-text">
                <div className="merch-name">Merch 01</div>
                <div className="merch-des">
                  <div className="m-des">• Over Sized</div>
                </div>
              </div>

              <div className="merch-deal">
                <div className="m-price-wrap">
                  <div className="m-price">₹ 540</div>
                  <div className="m-price-old">₹ <span>
                    600 </span></div>
                </div>
                <div className="merch-btn">Shop Now</div>
              </div>
            </div>

          </div>
          <div className="merch-sizes">
            <div className="merch-size">xs</div>
            <div className="merch-size">s</div>
            <div className="merch-size">m</div>
            <div className="merch-size">l</div>
            <div className="merch-size">xl</div>
            <div className="merch-size">xxl</div>
          </div>
        </div>

        <div className="merch-wrap appear">
          <div className="merch">
            <div className="merch-img-content">

              <div className="merch-card" onClick={toggleClass}>
                <img className='merch-front' src={imgPath('TshirtFront.webp')} alt="Merch 01" />
                <img className='merch-back' src={imgPath('TshirtBack.webp')} alt="Merch 01" />
              </div>
              <div className="sale-tag-wrap">
                <div className="sale-hole"></div>
                <div className="sale-tag">
                  <div className="sale-text">sale</div>
                  <div className="sale-offer">10% off</div>
                </div>
              </div>
              <div className="merch-flip-btn" onClick={toggleClass}>
                <Icon icon={"gis:flip-h"} />
              </div>

            </div>
            <div className="merch-detail">
              <div className="merch-text">
                <div className="merch-name">Merch 02</div>
                <div className="merch-des">
                  <div className="m-des">• Pure Cotton</div>
                </div>
              </div>

              <div className="merch-deal">
                <div className="m-price-wrap">
                  <div className="m-price">₹ 540</div>
                  <div className="m-price-old">₹ <span>
                    600 </span></div>
                </div>
                <div className="merch-btn">Shop Now</div>
              </div>
            </div>

          </div>
          <div className="merch-sizes">
            <div className="merch-size">xs</div>
            <div className="merch-size">s</div>
            <div className="merch-size">m</div>
            <div className="merch-size">l</div>
            <div className="merch-size">xl</div>
            <div className="merch-size">xxl</div>
          </div>
        </div>




      </div>
    </>
  )
}

export default Merch