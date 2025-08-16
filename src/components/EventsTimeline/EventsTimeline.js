import { Icon } from '@iconify/react/dist/iconify.js'
import './EventsTimeline.css'
import { imgPath } from '../../utils/utilityFunctions'


const EventTimeline = () => {


  const day1EventData = [
    {
      img: 'Event1.png',
      time: '09:00 AM',
      clockColor: '#FF1493',
      tag: 'Opening Ceremony',
      tagColor: '#AF25FF',
      title: 'Entropy 2025 Inauguration',
      venue: 'Town Hall',
      des: 'Join us for the grand opening of Entropy 2025 with keynote speeches from industry leaders and college dignitaries.',
      button: 'RESERVE SEAT',
    },
    {
      img: 'Event2.png',
      time: '10:00 AM',
      clockColor: '#EC9200',
      tag: 'Opening Ceremony',
      tagColor: '#FF1493',
      title: 'Entropy 2025 Inauguration',
      venue: 'Town Hall',
      des: 'Join us for the grand opening of Entropy 2025 with keynote speeches from industry leaders and college dignitaries.',
      button: 'RESERVE SEAT',
    },
    {
      img: 'Event3.png',
      time: '09:00 AM',
      clockColor: '#AF25FF',
      tag: 'Opening Ceremony',
      tagColor: '#c87b00ff',
      title: 'Entropy 2025 Inauguration',
      venue: 'Town Hall',
      des: 'Join us for the grand opening of Entropy 2025 with keynote speeches from industry leaders and college dignitaries.',
      button: 'RESERVE SEAT',
    },
  ]

  const day2EventData = [
    {
      img: 'Event1.png',
      time: '09:00 AM',
      clockColor: '#FF1493',
      tag: 'Opening Ceremony',
      tagColor: '#AF25FF',
      title: 'Entropy 2025 Inauguration',
      venue: 'Town Hall',
      des: 'Join us for the grand opening of Entropy 2025 with keynote speeches from industry leaders and college dignitaries.',
      button: 'RESERVE SEAT',
    },
    {
      img: 'Event2.png',
      time: '10:00 AM',
      clockColor: '#EC9200',
      tag: 'Opening Ceremony',
      tagColor: '#FF1493',
      title: 'Entropy 2025 Inauguration',
      venue: 'Town Hall',
      des: 'Join us for the grand opening of Entropy 2025 with keynote speeches from industry leaders and college dignitaries.',
      button: 'RESERVE SEAT',
    },
    {
      img: 'Event3.png',
      time: '09:00 AM',
      clockColor: '#AF25FF',
      tag: 'Opening Ceremony',
      tagColor: '#c87b00ff',
      title: 'Entropy 2025 Inauguration',
      venue: 'Town Hall',
      des: 'Join us for the grand opening of Entropy 2025 with keynote speeches from industry leaders and college dignitaries.',
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
            <div className='tl-day-title'>Day1 - October 11</div>
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
                          <div className="tl-event-image" style={{ backgroundImage: `url(${imgPath(event.img)})` }}>
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
            <div className='tl-day-title'>Day2 - October 12</div>
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
                          <div className="tl-event-image" style={{ backgroundImage: `url(${imgPath(event.img)})` }}>
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