import './ContactForm.css'
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';


const ContactForm = () => {

  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.first || !formData.email || !formData.message) {
      alert("Please fill all required fields!");
      return;
    }

    const googleFormData = new FormData();
    googleFormData.append("entry.2005620554", formData.first);
    googleFormData.append("entry.1065046570", formData.last);
    googleFormData.append("entry.1045781291", formData.email);
    googleFormData.append("entry.1166974658", formData.subject);
    googleFormData.append("entry.839337160", formData.message);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSenC6v3veFMdAEVAX-hoC4yhJEKq7pZXqTbWHRHeyctnlfxMw/formResponse", {
      method: "POST",
      body: googleFormData,
      mode: "no-cors"
    }).then(() => {
      alert("Thank you! Your message has been received. Our team will get back to you shortly");
      setFormData({ first: '', last: '', email: '', subject: '', message: '' });
    }).catch(() => {
      alert("Something went wrong!");
    });
  };

  return (
    <div className='contact-form'>
      <div className="info-container">
        <div className="info-head">
          Get in Touch
        </div>
        <div className="info-des">
          Have questions about Entropy 2025? Reach
          out to us and our quantum powered team
          will respond faster than entangled particles.
        </div>

        <div className="info-detail">
          <div className="info-wrap">
            <div className="info-icon">
              <Icon icon="dashicons:email" />
            </div>
            <div className="info-content">
              <div className="info-title">
                Email
              </div>
              <div className="form-info-des">
                entropy@iiitg.ac.in
              </div>
            </div>
          </div>

          <div className="info-wrap">
            <div className="info-icon">
              <Icon icon="iconoir:phone-solid" />
            </div>
            <div className="info-content">
              <div className="info-title">
                Phone
              </div>
              <div className="form-info-des">
                +91 94xx551024
              </div>
            </div>
          </div>

          <div className="info-wrap">
            <div className="info-icon">
              <Icon icon="weui:location-filled" />
            </div>
            <div className="info-content">
              <div className="info-title">
                Location
              </div>
              <div className="form-info-des">
                Indian Institute of Information Technology Guwahati, NH17, Bijoynagar - Jalukbari Rd, Bongora, Guwahati, Assam 781015
              </div>
            </div>
          </div>

        </div>

        <div className="info-socail">
          <div className="social-title">
            Connect with Us
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

      <div className="form-container">
        <h3 className='form-head'>SEND MESSAGE</h3>
        <form onSubmit={handleSubmit}>

          <div className="input-row">

            <div className="input-group">
              <label className='form-label' htmlFor="first">First Name</label>
              <input className='form-input' type="text" id="first" placeholder="Abhishek" value={formData.first} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label className='form-label' htmlFor="last">Last Name</label>
              <input className='form-input' type="text" id="last" placeholder="Sharma" value={formData.last} onChange={handleChange} />
            </div>

          </div>

          <div className="input-group">
            <label className='form-label' htmlFor="email">Email</label>
            <input className='form-input' type="email" id="email" placeholder="abhishek@gmail.com" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label className='form-label' htmlFor="subject">Subject</label>
            <input className='form-input' type="text" id="subject" placeholder="General Inquiry" value={formData.subject} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label className='form-label' htmlFor="message">Message</label>
            <textarea className='form-textarea'
              id="message"
              rows="5"
              placeholder="Your message here..."
              value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="form-btn">
            Send Message <span className='send-icon'><Icon icon="fa:send" /></span>
          </button>
        </form>


      </div>
    </div>
  )
}

export default ContactForm