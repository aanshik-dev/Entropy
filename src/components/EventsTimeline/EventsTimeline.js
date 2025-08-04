import './EventsTimeline.css'

const EventTimeline = () => {

  return (
    <>
      <div className="section-header">
        <div className="line" />
        <h2>
          <span>EVENT</span> TIMELINE
        </h2>
        <div className="line" />
      </div>
      <p
        style={{
          textAlign: "center",
          color: "#bbb",
          maxWidth: 600,
          margin: "0 auto 2rem"
        }}
      >
        Explore our action-packed schedule for Entropy 2025. Click on events to see
        more details and don’t miss out on the exciting events, workshops, and
        competitions!
      </p>
      <div className="timeline">
        <div className="day-header purple-line">
          <div className="line" />
          <div className="day-label center">DAY 1 - OCTOBER 15</div>
          <div className="line" />
        </div>
        <div className="event">
          <div className="time-block">
            <div className="icon-circle pink">
              <i className="fas fa-clock" />
            </div>
            <div className="time-label pink">09:00 AM</div>
            <div className="vertical-line pink" />
          </div>
          <div className="content">
            <img
              src="https://uploads.onecompiler.io/43rz9meds/43rz9uwcs/image1.pn"
              alt="Inauguration"
            />
            <div className="content-text">
              <div className="tag">Opening Ceremony</div>
              <div className="title">Entropy 2025 Inauguration</div>
              <div className="location">Town Hall</div>
              <div className="description">
                Join us for the grand opening of Entropy 2025 with keynote speeches
                from industry leaders and college dignitaries.
              </div>
              <div className="button-wrapper">
                <a className="button" href="#">
                  RESERVE SEAT
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="time-block">
            <div className="icon-circle orange">
              <i className="fas fa-clock" />
            </div>
            <div className="time-label orange">10:00 AM</div>
            <div className="vertical-line orange" />
          </div>
          <div className="content">
            <img
              src="https://uploads.onecompiler.io/43rz9meds/43rz9uwcs/image2.pg"
              alt="Workshop"
            />
            <div className="content-text">
              <div
                className="tag"
                style={{ background: "#ffc107", color: "#13002d" }}
              >
                Workshop
              </div>
              <div className="title">AI &amp; Machine Learning Workshop</div>
              <div className="location">L01 - Lecture Gallery</div>
              <div className="description">
                Hands-on workshop exploring the latest advancements in AI and
                machine learning technologies.
              </div>
              <div className="button-wrapper">
                <a className="button" href="#">
                  RESERVE SEAT
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="time-block">
            <div className="icon-circle purple">
              <i className="fas fa-clock" />
            </div>
            <div className="time-label purple">12:00 AM</div>
            <div className="vertical-line purple" />
          </div>
          <div className="content">
            <img
              src="https://uploads.onecompiler.io/43rz9meds/43rz9uwcs/image3.pg"
              alt="Hackathon"
            />
            <div className="content-text">
              <div
                className="tag"
                style={{ background: "#ff00c8", color: "#ffffff" }}
              >
                Workshop
              </div>
              <div className="title">Code Wars - Hackathon</div>
              <div className="location">L02 - Lecture Gallery</div>
              <div className="description">
                A 24-hour coding marathon where teams compete to build innovative
                solutions to real-world problems.
              </div>
              <div className="button-wrapper">
                <a className="button" href="#">
                  REGISTER NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="day-header purple-line">
          <div className="line" />
          <div className="day-label center">DAY 2 - OCTOBER 16</div>
          <div className="line" />
        </div>
        <div className="event">
          <div className="time-block">
            <div className="icon-circle pink">
              <i className="fas fa-clock" />
            </div>
            <div className="time-label pink">09:00 AM</div>
            <div className="vertical-line pink" />
          </div>
          <div className="content">
            <img
              src="https://uploads.onecompiler.io/43rz9meds/43rzjufjd/image6.pg"
              alt="Gaming"
            />
            <div className="content-text">
              <div className="tag">Gaming</div>
              <div className="title">Gaming Tournament</div>
              <div className="location">Town Hall</div>
              <div className="description">
                Compete in the latest virtual reality games and showcase your gaming
                skills.
              </div>
              <div className="button-wrapper">
                <a className="button" href="#">
                  RESERVE SEAT
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="time-block">
            <div className="icon-circle orange">
              <i className="fas fa-clock" />
            </div>
            <div className="time-label orange">12:00 AM</div>
            <div className="vertical-line orange" />
          </div>
          <div className="content">
            <img
              src="https://uploads.onecompiler.io/43rz9meds/43rzjufjd/image5.pg"
              alt="Panel"
            />
            <div className="content-text">
              <div
                className="tag"
                style={{ background: "#ffc107", color: "#13002d" }}
              >
                Panel Discussion
              </div>
              <div className="title">Speaker Session</div>
              <div className="location">LG2 - Lecture Gallery</div>
              <div className="description">
                Industry leaders discuss emerging technologies and career
                opportunities in the tech sector.
              </div>
              <div className="button-wrapper">
                <a className="button" href="#">
                  RESERVE SEAT
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="time-block">
            <div className="icon-circle purple">
              <i className="fas fa-clock" />
            </div>
            <div className="time-label purple">6:30 PM</div>
            <div className="vertical-line purple" />
          </div>
          <div className="content">
            <img
              src="https://uploads.onecompiler.io/43rz9meds/43rzjufjd/image6.pg"
              alt="Closing Party"
            />
            <div className="content-text">
              <div
                className="tag"
                style={{ background: "#ff00c8", color: "#ffffff" }}
              >
                Closing Ceremony
              </div>
              <div className="title">Awards Night &amp; Closing Party</div>
              <div className="location">Town Hall</div>
              <div className="description">
                Celebration of Entropy 2025 achievements with awards, performances,
                and networking.
              </div>
              <div className="button-wrapper">
                <a className="button" href="#">
                  RESERVE SEAT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default EventTimeline