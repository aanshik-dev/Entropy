import './HomeSpeakers.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import Speaker1 from '../../assets/Speaker1.svg'
import Speaker2 from '../../assets/Speaker2.svg'
import Speaker3 from '../../assets/Speaker3.svg'

const HomeSpeakers = () => {


  return (
    <>
      <section className="vs-speakers-section">

        <div className="vs-grid">
          <div className="vs-card">

            <img
              src={Speaker1}
              alt="Dr. Alex Quantum"
              className="vs-avatar"
            />
            <div className="vs-card-content">
              <h3 className="vs-name">Dr. Alex Quantum</h3>
              <p className="vs-role">Head of Quantum Research, Google</p>
              <p className="vs-bio">
                Pioneering researcher in quantum algorithms and quantum machine
                learning applications.
              </p>
            </div>
            <div className="vs-socials">
              <a href="#" aria-label="Instagram">
                <div className="vs-social-icon">
                  <Icon icon='fa-twitter' />
                </div>
              </a>
              <a href="#" aria-label="LinkedIn">
                <div className="vs-social-icon">
                  <Icon icon='fa-facebook' />
                </div>
              </a>
              <a href="#" aria-label="Email">
                <div className="vs-social-icon">
                  <Icon icon='hugeicons:internet' />
                </div>
              </a>
            </div>
          </div>


          <div className="vs-card">
            <img
              src={Speaker2}
              alt="Dr. Sarah Chen"
              className="vs-avatar"
            />
            <div className="vs-card-content">
              <h3 className="vs-name">Dr. Sarah Chen</h3>
              <p className="vs-role">Quantum Systems Architect, IBM</p>
              <p className="vs-bio">
                Leading expert in quantum hardware design and quantum error correction
                protocols.
              </p>
            </div>
            <div className="vs-socials">
              <a href="#" aria-label="Instagram">
                <div className="vs-social-icon">
                  <Icon icon='fa-twitter' />
                </div>
              </a>
              <a href="#" aria-label="LinkedIn">
                <div className="vs-social-icon">
                  <Icon icon='fa-facebook' />
                </div>
              </a>
              <a href="#" aria-label="Email">
                <div className="vs-social-icon">
                  <Icon icon='hugeicons:internet' />
                </div>
              </a>
            </div>
          </div>
          {/* Speaker Card 3 */}
          <div className="vs-card">
            <img
              src={Speaker3}
              alt="Prof. Raj Patel"
              className="vs-avatar"
            />
            <div className="vs-card-content">
              <h3 className="vs-name">Prof. Raj Patel</h3>
              <p className="vs-role">Director, Quantum Computing Center</p>
              <p className="vs-bio">
                Award‑winning physicist specializing in quantum information theory and
                quantum cryptography.
              </p>
            </div>
            <div className="vs-socials">
              <a href="#" aria-label="Instagram">
                <div className="vs-social-icon">
                  <Icon icon='fa-twitter' />
                </div>
              </a>
              <a href="#" aria-label="LinkedIn">
                <div className="vs-social-icon">
                  <Icon icon='fa-facebook' />
                </div>
              </a>
              <a href="#" aria-label="Email">
                <div className="vs-social-icon">
                  <Icon icon='hugeicons:internet' />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default HomeSpeakers