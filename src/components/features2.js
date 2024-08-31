import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal3"
          >
            <div className="features2-divider-container3">
              {activeTab === 2 && <div className="features2-container5"></div>}
            </div>
            <div className="features2-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature2Title: 'Advanced Search Engine',
  feature1Title: 'Comprehensive Legal Database',
  feature3Title: 'AI-Powered Tools',
  feature3ImgSrc:
    'https://media.istockphoto.com/id/1029035870/photo/internet-law-concept.jpg?s=612x612&w=0&k=20&c=ytDyo4pvPJiSNvVrTRweyQJ8fvKsLeoFhXXYXIg_Fo8=',
  feature3ImgAlt: 'Image illustrating AI-powered tools in action',
  feature1ImgSrc:
    'https://media.istockphoto.com/id/1474442258/vector/ai-legal-robots.jpg?s=612x612&w=0&k=20&c=RjKCqTJFF-7be9HXILws-z5kXjCZhFdFA6yGR1miYxU=',
  feature2ImgSrc:
    'https://media.istockphoto.com/id/1497812818/photo/online-term-of-service-conditions-showing-astute-rules-and-regulations-in-using.jpg?s=612x612&w=0&k=20&c=fG44JTMqOBt6DiJDwi6NvQvkgKXxmxIBtkIbFsW7h3k=',
  feature1ImgAlt: 'Image depicting a comprehensive legal database',
  feature2ImgAlt: 'Image showing an advanced search engine interface',
  feature2Description:
    'Utilize a powerful search engine capable of handling complex queries and filtering results based on various criteria.',
  feature1Description:
    'Access a vast and regularly updated legal database for thorough research.',
  feature3Description:
    'Leverage AI tools such as Natural Language Processing and predictive analytics for extracting key legal principles and providing personalized recommendations.',
}

Features2.propTypes = {
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
}

export default Features2
