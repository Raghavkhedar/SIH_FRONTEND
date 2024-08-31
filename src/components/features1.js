import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3Title: 'Smart Case Management',
  feature1Description:
    'Offers interactive legal education resources like case studies and quizzes for ongoing professional development.',
  feature3Description:
    'Streamlines case handling with integrated tracking, deadline management, and automated reminders.',
  feature3ImgAlt: 'Illustration of AI-powered tools',
  feature1Title: 'Interactive Legal Learning Modules',
  feature1ImgSrc:
    'https://media.istockphoto.com/id/1466575906/video/digital-law-technology.jpg?s=640x640&k=20&c=g0dOCYH61OADDxz3MG97Slr8MdVxzYaX1tl03ONrOm4=',
  feature2Description:
    'Automates repetitive tasks such as document generation and case filing, tailored to specific legal practices.',
  feature1ImgAlt: 'Illustration of a comprehensive legal database',
  feature2ImgAlt: 'Illustration of an advanced search engine',
  feature2ImgSrc:
    'https://media.istockphoto.com/id/1951882538/vector/ai-assisted-legal-process-optimization-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=aBRsH4NQu7Ie2k4ObWFb-RKGA0M0suB-AXUexEbYXFo=',
  feature2Title: ' Customizable Workflow Automation',
  feature3ImgSrc:
    'https://media.istockphoto.com/id/1770288305/vector/settling-ai-lawsuit.jpg?s=612x612&w=0&k=20&c=yqEtoqbFPr-HqT53NQ7Tc4puJfSXCk6mmA9qAZ2Es-0=',
}

Features1.propTypes = {
  feature3Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
}

export default Features1
