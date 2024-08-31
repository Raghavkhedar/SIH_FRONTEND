import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
            Explore the transformative capabilities of our AI-Driven Research Engine for commercial courts. Our platform revolutionizes legal research with an intuitive interface, a comprehensive and updated legal database, and advanced search functionalities. Leveraging cutting-edge AI tools, it provides predictive insights, personalized recommendations, and seamless integration with existing systems. Discover how our innovative solution enhances legal research efficiency, supports data-driven decisions, and empowers legal professionals with unparalleled resources and insights.
            </p>
            <div className="steps-actions">
              <button className="thq-button-filled thq-button-animated steps-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text15 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text17 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text18 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text21 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text23 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step4Title: 'Collaborate and Share',
  step1Description:
    'Create a new account on the platform by providing your email address and setting up a password.',
  step4Description:
    'Collaborate with others by annotating documents, sharing in real-time, and maintaining version control.',
  step3Title: 'Utilize Advanced Search Engine',
  step3Description:
    'Use the advanced search engine to enter complex queries, filter results based on jurisdiction, date, and legal domain.',
  step2Title: 'Explore Legal Database',
  step1Title: 'Sign Up for an Account',
  step2Description:
    'Browse through the extensive legal database to access a wide range of legal resources and materials.',
}

Steps.propTypes = {
  step4Title: PropTypes.string,
  step1Description: PropTypes.string,
  step4Description: PropTypes.string,
  step3Title: PropTypes.string,
  step3Description: PropTypes.string,
  step2Title: PropTypes.string,
  step1Title: PropTypes.string,
  step2Description: PropTypes.string,
}

export default Steps
