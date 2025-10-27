import './Hsponsors.css';
import { imgPath } from '../../utils/utilityFunctions'


const Hsponsors = () => {

  const sponsorData = [
    {
      name: "Spnsorship Partner",
      img: 'sponsors/partner.webp',
      description: "Funding Entropy 2025",
      level: 1
    },
    {
      name: "Spnsorship Partner",
      img: 'sponsors/partner.webp',
      description: "Funding Entropy 2025",
      level: 2
    },
    {
      name: "Spnsorship Partner",
      img: 'sponsors/partner.webp',
      description: "Funding Entropy 2025",
      level: 1
    },
    {
      name: "Spnsorship Partner",
      img: 'sponsors/partner.webp',
      description: "Funding Entropy 2025",
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
                  <img src={imgPath(sponsor.img)} alt={sponsor.name} />
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