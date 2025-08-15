import './HomeSpeakers.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { imgPath } from '../../utils/utilityFunctions'


const HomeSpeakers = () => {

  const speakerData = [
    {
      name: 'Dr. Tony Stark',
      role: 'Head of Quantum Research, Google',
      image: 'speakers/Tony.jpg',
      bio: 'Pioneering researcher in quantum algorithms and quantum machine learning applications, Dr. Natasha Romanoff is a leading researcher',
      pos: '50% 0%',
      linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
      insta: '',
      phone: '7999999999',
      mail: 'ansik.tomar24b@iiitg.ac.in',
    },
    {
      name: 'Dr. Natasha Romanoff',
      role: 'Quantum Computing Researcher, Google',
      image: 'speakers/Natasha.jpg',
      bio: 'Pioneering researcher in quantum algorithms and quantum machine learning applications.',
      pos: '50% 0%',
      linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
      insta: '',
      phone: '7999999999',
      mail: 'ansik.tomar24b@iiitg.ac.in',
    },
    {
      name: 'Dr. Sarah Chan',
      role: 'Quantum Computing Intern, Meta',
      image: 'speakers/Sarah.png',
      bio: 'Pioneering researcher in quantum algorithms and quantum machine learning applications.',
      pos: '50% 30%',
      linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
      insta: '',
      phone: '7999999999',
      mail: 'ansik.tomar24b@iiitg.ac.in',
    }
  ]


  return (
    <>
      <div className="speaker-content">
        {
          speakerData.map((item) => (
            <div className="speaker-wrap appear">
              <div className="speaker">
                <div>
                  
                  <div className="sp-img-wrap">
                    <img
                      src={imgPath(item.image)}
                      alt={item.name}
                      className="sp-avatar"
                      style={{ objectPosition: item.pos }}
                    />
                    <div className="sp-shadow"></div>
                  </div>
                </div>
                <div className="sp-details-wrap">

                  <div className="sp-details">
                    <div className="sp-name">
                      {item.name}
                    </div>
                    <div className="sp-role">
                      {item.role}
                    </div>
                    <p className="sp-bio">
                      {item.bio}
                    </p>
                  </div>
                  <div className="sp-social">
                    {
                      item.linkedin && (
                        <div className="sp-link">
                          <a href={item.linkedin}>
                            <Icon icon="brandico:linkedin-rect" />
                          </a>
                        </div>
                      )
                    }
                    {
                      item.insta && (
                        <div className="sp-link">
                          <a href={item.insta}>
                            <Icon icon="bi:instagram" />
                          </a>
                        </div>
                      )
                    }
                    {
                      item.phone && (
                        <div className="sp-link">
                          <a href={`tel:+91 ${item.phone}`}>
                            <Icon icon="el:phone" />
                          </a>
                        </div>
                      )
                    }
                    {
                      item.mail && (
                        <div className="sp-link">
                          <a href={`mailto:${item.mail}`}>
                            <Icon icon="streamline:mail-send-envelope-solid" />
                          </a>
                        </div>
                      )
                    }

                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default HomeSpeakers