import './Hsponsors.css';
import logo from '../../assets/Rectangle.svg';
import { imgPath } from '../../utils/utilityFunctions'
import { mouseLeaveEvent } from '@tsparticles/engine';


const Hsponsors = () => {

  const sponsorData = [
    {
      name: "State Bank Of India",
      img: logo,
      description: "India's largest public sector bank",
      level: 1
    },
    {
      name: "State Bank Of India",
      img: logo,
      description: "India's largest public sector bank",
      level: 1
    },
    {
      name: "State Bank Of India",
      img: logo,
      description: "India's largest public sector bank",
      level: 1
    },
    {
      name: "State Bank Of India",
      img: logo,
      description: "India's largest public sector bank",
      level: 1
    },
  ]

  return (
    <>
      <div className="sponsors-content">

        {
          sponsorData.map((sponsor) => (
            <div className="h-sponsor-wrap">
              <div className="h-sponsor">
                <div className="h-sponsor-img">
                  <img src={sponsor.img} alt="SBI Logo" />
                </div>
                <div className="h-sponsor-info">
                  <h3>{sponsor.name}</h3>
                  <p>{sponsor.description}</p>
                </div>
              </div>
              <div className="h-sponsor-bar"></div>
            </div>
          ))
        }
      </div>
    </>
  )

}

export default Hsponsors;