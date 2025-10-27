import './Merch.css'
import { imgPath } from '../../utils/utilityFunctions'
import { Icon } from '@iconify/react/dist/iconify.js';



const Merch = () => {


  const flipMerch1 = () => {
    const merchCard = document.querySelector('#merch1');
    merchCard.classList.toggle('flipped');
  }
  // const flipMerch2 = () => {
  //   const merchCard = document.querySelector('#merch2');
  //   merchCard.classList.toggle('flipped');
  // }

  return (
    <>
      <div className="merch-content">

        <div className="merch-wrap appear">
          <div className="merch">
            <div className="merch-img-content">

              <div className="merch-card" id="merch1" onClick={flipMerch1}>
                <img className='merch-front' src={imgPath('Tfront.webp')} alt="Merch 01" />
                <img className='merch-back' src={imgPath('Tback.webp')} alt="Merch 01" />
              </div>
              <div className="sale-tag-wrap">
                <div className="sale-hole"></div>
                <div className="sale-tag">
                  <div className="sale-text">sale</div>
                  <div className="sale-offer">10% off</div>
                </div>
              </div>
              <div className="merch-flip-btn" onClick={flipMerch1}>
                <Icon icon={"gis:flip-h"} />
              </div>

            </div>
            <div className="merch-detail">
              <div className="merch-text">
                <div className="merch-name">Merch 01</div>
                <div className="merch-des">
                  <div className="m-des">• Round Neck</div>
                </div>
              </div>

              <div className="merch-deal">
                <div className="m-price-wrap">
                  <div className="m-price">₹ 450</div>
                  <div className="m-price-old">₹ <span>
                    500 </span></div>
                </div>
                <div className="merch-btn"
                  onClick={() => window.open("https://forms.gle/uVjyhf2j4iB3QMhL8", "_blank")}>Shop Now</div>
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

        <div className="merch-det appear">
          <div className="merch-text-wrap">
            <h3 className='merch-title'>The <br /> <span className='merch-inhead'>Schrödinger’s </span>Cat </h3>
            <p className='merch-tagline' >Until you open the box… it’s both iconic and legendary</p>
            <p className='merch-desc'>
              Celebrate uncertainty and wear the paradox. Our Schrödinger’s Cat merch blurs the line between existence and imagination.</p>
          </div>
          <div>
            <div className="merch-btn merch-det-btn" onClick={() => window.open("https://forms.gle/uVjyhf2j4iB3QMhL8", "_blank")}>Grab Your Merch Now</div>
          </div>
          <div className="detail-tags">
            <div className="detail-tag"> • Round Neck</div>
            <div className="detail-tag"> • Short Sleeve</div>
            <div className="detail-tag"> • Premium Quality</div>
          </div>
        </div>

      </div >
    </>
  )
}

export default Merch