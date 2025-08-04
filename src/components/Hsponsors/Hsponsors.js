import './Hsponsors.css';
import logo from '../../assets/Rectangle.svg';

const Hsponsors = () => {

  return (
    <>
      <section className="sponsors-section">
        <div className="sponsor-header">
          <h2>
            <span className="highlight">OUR</span> SPONSORS
          </h2>
          <div className="line" />
        </div>
        <div className="sponsor-grid">
          <div className="sponsor-card">
            <img src={logo} alt="SBI Logo" />
            <h3>STATE BANK OF INDIA</h3>
            <p className="subtext">India's largest public sector bank</p>
          </div>
          <div className="sponsor-card">
            <img src={logo} alt="SBI Logo" />
            <h3>STATE BANK OF INDIA</h3>
            <p className="yellow-text">STATE BANK OF INDIA</p>
          </div>
          <div className="sponsor-card">
            <img src={logo} alt="SBI Logo" />
            <h3>STATE BANK OF INDIA</h3>
            <p className="yellow-text">STATE BANK OF INDIA</p>
          </div>
          <div className="sponsor-card">
            <img src={logo} alt="SBI Logo" />
            <h3>STATE BANK OF INDIA</h3>
            <p className="subtext">India's largest public sector bank</p>
          </div>
          <div className="sponsor-card">
            <img src={logo} alt="SBI Logo" />
            <h3>STATE BANK OF INDIA</h3>
            <p className="yellow-text">STATE BANK OF INDIA</p>
          </div>
          <div className="sponsor-card">
            <img src={logo} alt="SBI Logo" />
            <h3>STATE BANK OF INDIA</h3>
            <p className="yellow-text">STATE BANK OF INDIA</p>
          </div>
        </div>
      </section>
    </>
  )

}

export default Hsponsors;