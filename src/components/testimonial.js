import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  review1: '5 stars',
  author2Src:
    'https://images.unsplash.com/photo-1482849297070-f4fae2173efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTEyMzQ5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'David Johnson',
  author4Name: 'Emily Brown',
  author3Src:
    'https://images.unsplash.com/photo-1536164261511-3a17e671d380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTEyMzQ5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Emily Brown',
  review4:
    "As a law student, this tool has been invaluable in my studies. It's like having a virtual legal research assistant at my fingertips. I can't imagine studying without it!",
  author3Alt: 'Image of David Johnson',
  author4Position: 'Law Student',
  author1Src:
    'https://images.unsplash.com/photo-1541911087797-f89237bd95d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTEyMzQ5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'John Doe',
  author3Position: 'Legal Analyst',
  heading1: 'Testimonials',
  review3:
    'This research engine is a game-changer for legal professionals. The personalized recommendations have been spot on, and the interface is so user-friendly.',
  author2Name: 'Jane Smith',
  author1Position: 'Legal Consultant',
  content1:
    "The AI-Driven Research Engine has completely transformed the way I conduct legal research. It's intuitive, fast, and provides incredibly accurate results. Highly recommended!",
  author1Alt: 'Image of John Doe',
  author4Src:
    'https://images.unsplash.com/photo-1694705268819-80fcf37e35ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTEyMzQ5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author2Position: 'Attorney-at-Law',
  review2:
    "I've been using this platform for a few months now, and I am amazed by its capabilities. The AI tools are truly impressive and have saved me countless hours of research time.",
}

Testimonial.propTypes = {
  review1: PropTypes.string,
  author2Src: PropTypes.string,
  author3Name: PropTypes.string,
  author4Name: PropTypes.string,
  author3Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review4: PropTypes.string,
  author3Alt: PropTypes.string,
  author4Position: PropTypes.string,
  author1Src: PropTypes.string,
  author1Name: PropTypes.string,
  author3Position: PropTypes.string,
  heading1: PropTypes.string,
  review3: PropTypes.string,
  author2Name: PropTypes.string,
  author1Position: PropTypes.string,
  content1: PropTypes.string,
  author1Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author2Position: PropTypes.string,
  review2: PropTypes.string,
}

export default Testimonial
