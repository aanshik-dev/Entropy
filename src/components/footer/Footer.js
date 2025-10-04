import './Footer.css'
import { Icon } from "@iconify/react";

import { useState } from 'react';
import { imgPath } from '../../utils/utilityFunctions'


const Footer = () => {
  const mobile = "+91 94xx551024";
  const mail = "entropy@iiitg.ac.in";

  const click = (e, page, sectionId = null) => {
    e.preventDefault();
    window.location.hash = page;
    if (sectionId) {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50)
    }
  };


  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill all required fields!");
      return;
    }

    const googleFormData = new FormData();
    googleFormData.append("entry.1759579994", formData.name);
    googleFormData.append("entry.444416730", formData.email);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSc-o2NSAHADjZwZ3xIlgBKkHk8J1aqM17PU0GQCGNhhz0qYkw/formResponse", {
      method: "POST",
      body: googleFormData,
      mode: "no-cors"
    }).then(() => {
      alert("Thanks for Subscribing! We will keep you updated!!");
      setFormData({ name: '', email: '' });
    }).catch(() => {
      alert("Something went wrong!");
    });
  };



  return (
    <>
      <footer className='footer'>
        <div className="footerBody">
          <div className="footerWrapper">

            <div className="media">
              <div className="logos">
                <img src={imgPath("Logo.webp")} alt="Entropy" />
                <img src={imgPath("IIITG.webp")} alt="IIITG" />
              </div>
              <div className="outro">
                <div className="footEntropy">
                  Entropy<span>2025</span>
                </div>
                <div className="footDes">
                  IIITG’s biggest tech fest of the year, packed with workshops, thrilling competitions, and exciting prizes.
                </div>


                <div className="social">
                  <a href="https://www.linkedin.com/company/entropy-iiitg" target='_blank' className='linkedin' rel='noopener noreferrer'>
                    <Icon icon="simple-icons:linkedin" />
                  </a>
                  <a href="https://www.instagram.com/entropy.iiitg/" target='_blank' rel='noopener noreferrer' className='insta' >
                    <Icon icon="simple-icons:instagram" />
                  </a>
                  <a href="https://www.facebook.com/entropyiiitg" target='_blank' rel='noopener noreferrer' className='facebook'>
                    <Icon icon="simple-icons:facebook" />
                  </a>
                </div>

              </div>

            </div>
            <div className="quickLink">
              <div className="footHeading">
                <span>
                  <Icon icon="fa-solid:link" />
                </span>
                Quick Links
              </div>
              <div className="links">
                <div onClick={(e) => { click(e, 'home') }} className="link">Home</div>
                <div onClick={(e) => { click(e, 'sponsors') }} className="link">Sponsors</div>
                <div onClick={(e) => { click(e, 'events') }} className="link">Events</div>
                <div onClick={(e) => { click(e, 'contacts') }} className="link">Contacts</div>
                <div onClick={(e) => { click(e, 'team') }} className="link">Team</div>
                <div onClick={(e) => { click(e, 'events') }} className="link">Hackathon</div>
                <div onClick={(e) => { click(e, 'contacts') }} className="link">FAQs</div>
                <div onClick={(e) => { click(e, 'home') }} className="link">Notification</div>
                <div onClick={(e) => { click(e, 'events') }} className="link">Results</div>
                <div onClick={(e) => { click(e, 'events') }} className="link">Registration</div>
                <div onClick={(e) => { click(e, 'events') }} className="link">MicroMouse</div>
                <div onClick={(e) => { click(e, 'events') }} className="link">Workshop</div>
              </div>

            </div>

            <div className="reachUs">
              <div className="footHeading">
                <span>
                  <Icon icon="mdi:university" />
                </span>
                Reach Us
              </div>
              <div className="footDetails">
                <div className="footmail"
                  onClick={() => {
                    window.location.href = "mailto:" + mail
                  }}>
                  <span>
                    <Icon icon="dashicons:email" />
                  </span>
                  {mail}</div>
                <div className="footPhone"
                  onClick={() => {
                    window.location.href = "tel:" + mobile
                  }}>
                  <span>
                    <Icon icon="iconoir:phone-solid" />
                  </span>
                  {mobile}</div>
                <div className="footAddress"
                  onClick={() => {
                    window.open("https://www.google.com/maps/dir/26.2019494,78.190641/NH17,+Bijoynagar+-+Jalukbari+Rd,+Bongora,+Guwahati,+Assam+781015/@26.4887315,79.6609677,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x375a5987e09da847:0xfc90e6da1b4547c1!2m2!1d91.5619908!2d26.0812373!5m2!1e4!1e2?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D", "_blank")
                  }}>
                  <span>
                    <Icon icon="weui:location-filled" />
                  </span>
                  Indian Institute of Information Technology Guwahati, Assam, India - 781015</div>
                <div className="footTime">
                  <span>
                    <Icon icon="mage:hour-glass-fill" />
                  </span>
                  09:00 AM - 5:00 PM</div>
              </div>
            </div>

            <div className="subscribe">
              <div className="footHeading">
                <span>
                  <Icon icon="ic:baseline-tips-and-updates" />
                </span>
                Stay Tuned
              </div>
              <div className="subDes">
                Subscribe to our newsletter for the latest updates.
              </div>
              <form onSubmit={handleSubmit} className="dataInput">
                <input id='name' type="text" placeholder='Enter your Name' value={formData.name} onChange={handleChange} required />
                <input id='email' value={formData.email} onChange={handleChange} required type="text" placeholder='Enter your email' />
                <button className="subscribeBtn">Subscribe</button>
              </form>
            </div>

            {/* https://docs.google.com/forms/d/e/1FAIpQLSc-o2NSAHADjZwZ3xIlgBKkHk8J1aqM17PU0GQCGNhhz0qYkw/viewform?usp=pp_url&entry.1759579994=sadjl&entry.444416730=adf */}

          </div>
        </div>
        <div className="copyRight">© Entropy 2025 | All Rights Reserved | Made in love with Entropy</div>
      </footer>
    </>
  )
}

export default Footer