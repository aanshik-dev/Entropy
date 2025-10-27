import { Icon } from '@iconify/react/dist/iconify.js'
import './EventsTimeline.css'
import { imgPath } from '../../utils/utilityFunctions'


const EventTimeline = () => {


  const day1EventData = [
    {
      img: 'Opening.webp',
      time: '09:00 AM',
      clockColor: '#FF1493',
      tag: 'Opening Ceremony',
      tagColor: '#AF25FF',
      pos: '50% 70%',
      title: 'Entropy 2025 Inauguration',
      venue: 'Town Hall',
      des: 'Witness the grand opening of Entropy 2025! A celebration of innovation featuring inspiring speeches, creative showcases, and the unveiling of this year’s theme.',
      button: 'RESERVE SEAT',
    },
    {
      img: 'Protocol1.webp',
      time: '10:00 AM',
      clockColor: '#EC9200',
      tag: 'Competition',
      tagColor: '#FF1493',
      pos: '50% 60%',
      title: 'Protocol Breach - Round 1',
      venue: 'Lecture Gallery',
      des: 'The hunt begins! Solve riddles, decode clues, and race across the campus to uncover hidden codes in this thrilling cyber quest.',
      button: 'RESERVE SEAT',
    },
    {
      img: 'TechQuiz.webp',
      time: '12:00 PM',
      clockColor: '#AF25FF',
      tag: 'Quiz',
      pos: '50% 10%',
      tagColor: '#c87b00ff',
      title: 'Tech Quiz - Round 1',
      venue: 'Lecture Gallery',
      des: 'Think you know tech? Battle it out in this brain-teasing quiz covering everything from AI to algorithms.',
      button: 'RESERVE SEAT',
    },
    {
      img: 'Event3.png',
      time: '02:00 PM',
      clockColor: '#FF1493',
      tag: 'Quiz',
      tagColor: '#AF25FF',
      pos: '50% 50%',
      title: 'Cybersecurity Quiz',
      venue: 'Lecture Gallery',
      des: 'Enter the digital battlefield! Decode hacks, trace intrusions, and prove your cyber-defense skills in this thrilling cybersecurity challenge.',
      button: 'RESERVE SEAT',
    },
    {
      img: 'CodeBaazar.webp',
      time: '03:00 PM',
      clockColor: '#EC9200',
      tag: 'Competition',
      tagColor: '#FF1493',
      pos: '50% 50%',
      title: 'Code Baazar',
      venue: 'Lecture Gallery',
      des: 'Build, pitch, and trade your code creations! A market-style coding event where innovation meets creativity and quick thinking.',
      button: 'RESERVE SEAT',
    },
    {
      img: 'esports.png',
      pos: '50% 50%',
      time: '05:00 PM',
      clockColor: '#EC9200',
      tag: 'Gaming',
      tagColor: '#FF1493',
      title: 'E Sports Tournament',
      venue: 'Town Hall',
      des: 'Level up your reflexes and strategy! Compete in an adrenaline fueled gaming showdown to prove you’re the ultimate digital warrior.',
      button: 'RESERVE SEAT',
    },
  ]

  const day2EventData = [
    {
      img: 'Robo.webp',
      time: '09:00 AM',
      clockColor: '#FF1493',
      tag: 'Robo War',
      tagColor: '#AF25FF',
      pos: '50% 5%',
      title: 'Robo Sangraam',
      venue: 'Town Hall',
      des: 'Watch bots clash in a test of design, power, and control! Witness sparks fly, gears grind, and pure engineering brilliance unfold in the ultimate arena where only the toughest robots survive',
      button: 'RESERVE SEAT',
    },
    {
      img: 'esports.png',
      time: '12:00 PM',
      clockColor: '#EC9200',
      tag: 'Gaming',
      tagColor: '#FF1493',
      title: 'E Sports Tournament',
      venue: 'Town Hall',
      des: 'Level up your reflexes and strategy! Compete in an adrenaline fueled gaming showdown to prove you’re the ultimate digital warrior.',
      button: 'RESERVE SEAT',
    },
    {
      img: 'Protocol2.webp',
      time: '02:00 PM',
      clockColor: '#AF25FF',
      tag: 'Competition',
      tagColor: '#c87b00ff',
      title: 'Protocol Breach - Round 2',
      venue: 'Lecture Gallery',
      des: 'The final chase continues! Only the smartest and fastest code hunters will unlock the ultimate riddle, conquer hidden challenges, and reach the finish line first in this electrifying finale.',
      button: 'RESERVE SEAT',
    },
    {
      img: 'TechQuiz2.webp',
      pos: '50% 00%',
      time: '04:00 PM',
      clockColor: '#FF1493',
      tag: 'Quiz',
      tagColor: '#AF25FF',
      title: 'Tech Quiz - Round 2',
      venue: 'Lecture Gallery',
      des: 'The final face-off of the brightest minds! Tackle tougher questions and claim your spot as the Tech Quiz champion of Entropy 2025.',
      button: 'RESERVE SEAT',
    },
  ]


  return (
    <>

      <div className="ev-timeline">
        <div className="tl-header">
          <div className="tl-title">
            <span className='tl-ruler'></span>
            <div className='tl-title-dark'>EVENT</div>
            <div className='tl-title-light'> TIMELINE</div>
            <span className='tl-ruler ruler-rev'></span>
          </div>
          <div className="tl-head-info">
            Explore our action-packed schedule for Entropy 2025. Click on events to see more
            details and don't miss out on the exciting events workshops, and competitions!
          </div>
        </div>

        <div className="tl-day">
          <div className="day-title">
            <span className='tl-day-ruler'></span>
            <div className='tl-day-title'>Day1 - October 25</div>
            <span className='tl-day-ruler day-ruler-rev'></span>
          </div>

          <div className="tl-events-container">
            {
              day1EventData.map((event, index) => {
                return (
                  <div className="tl-event-layout" key={index}>


                    <div className="tl-time-wrap">
                      <div className="tl-time-box">
                        <div className="tl-clock-icon" style={{ backgroundColor: event.clockColor }}>
                          <Icon icon='majesticons:clock' />
                        </div>
                        <div className="tl-time" style={{ color: event.clockColor }}>{event.time}</div>
                      </div>
                      <div className="tl-bar"></div>
                    </div>


                    <div className="tl-event-card-wrap">
                      <div className="tl-event-card-bg">

                        <div className="tl-event-card">
                          <div className="tl-event-image" style={{ backgroundImage: `url(${imgPath(event.img)})`, backgroundPosition: event.pos || 'center' }}>
                          </div>

                          <div className="tl-event-data">
                            <div className="tl-event-tag" style={{ backgroundColor: event.tagColor }}>{event.tag}</div>
                            <div className="tl-event-title">{event.title}</div>
                            <div className="tl-venue">
                              <span><Icon icon={"weui:location-filled"} /></span>
                              {event.venue}</div>
                            <div className="tl-event-des">{event.des}</div>
                            <div className="tl-btn-wrap">
                              <button className="tl-event-btn">
                                {event.button}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                )
              })
            }

            {/* <div className="tl-event-layout">

              <div className="tl-bar-layout">
                <div className="tl-time-box">
                  <div className="tl-clock-icon">
                    <Icon icon='majesticons:clock' />
                  </div>
                  <div className="tl-time">09:00 AM</div>
                </div>
                <div className="tl-bar"></div>
              </div>

              <div className="tl-event-card-wrap">
                <div className="tl-event-card-bg">

                  <div className="tl-event-card">
                    <div className="tl-event-image" style={{ backgroundImage: `url(${imgPath("event1.png")})` }}>
                    </div>

                    <div className="tl-event-data">
                      <div className="tl-event-tag">Opening Ceremony</div>
                      <div className="tl-event-title">Entropy 2025 Inauguration</div>
                      <div className="tl-venue">
                        <span><Icon icon={"weui:location-filled"} /></span>
                        Town Hall</div>
                      <div className="tl-event-des">
                        Join us for the grand opening of Entropy 2025 with keynote speeches
                        from industry leaders and college dignitaries.
                      </div>
                      <div className="tl-btn-wrap">
                        <button className="tl-event-btn">
                          Reserve Seat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
        <div className="tl-day">
          <div className="day-title">
            <span className='tl-day-ruler'></span>
            <div className='tl-day-title'>Day2 - October 26</div>
            <span className='tl-day-ruler day-ruler-rev'></span>
          </div>

          <div className="tl-events-container">
            {
              day2EventData.map((event, index) => {
                return (
                  <div className="tl-event-layout" key={index}>

                    <div className="tl-time-wrap">
                      <div className="tl-time-box">
                        <div className="tl-clock-icon" style={{ backgroundColor: event.clockColor }}>
                          <Icon icon='majesticons:clock' />
                        </div>
                        <div className="tl-time" style={{ color: event.clockColor }}>{event.time}</div>
                      </div>
                      <div className="tl-bar"></div>
                    </div>

                    <div className="tl-event-card-wrap">
                      <div className="tl-event-card-bg">

                        <div className="tl-event-card">
                          <div className="tl-event-image" style={{ backgroundImage: `url(${imgPath(event.img)})`, backgroundPosition: event.pos || 'center', }}>
                          </div>

                          <div className="tl-event-data">
                            <div className="tl-event-tag" style={{ backgroundColor: event.tagColor }}>{event.tag}</div>
                            <div className="tl-event-title">{event.title}</div>
                            <div className="tl-venue">
                              <span><Icon icon={"weui:location-filled"} /></span>
                              {event.venue}</div>
                            <div className="tl-event-des">{event.des}</div>
                            <div className="tl-btn-wrap">
                              <button className="tl-event-btn">
                                {event.button}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                )
              })
            }

          </div>

        </div>

      </div >
    </>

  )
}

export default EventTimeline