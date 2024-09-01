import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          
          <button  className="thq-button-filled hero-button1">
            <Link to="/form">
             <span  className="thq-body-small">{props.action1}</span>
            </Link>
          </button>
          
          <button className="thq-button-outline hero-button2">
        
            <span className="thq-body-small">{props.action2}</span>
          
          </button>
        </div>
      </div>
      <div className="hero-content2">
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image10Alt: 'Hero Image',
  action1: 'Get Started',
  image4Src:
    'https://media.istockphoto.com/id/1388925357/photo/the-statue-of-justice-lady-justice-or-iustitia-justitia-the-roman-goddess-of-justice.jpg?s=612x612&w=0&k=20&c=Q7lw1G9o-DoXEpUkMiK5POE01cUykjXLBUL9FLAgG98=',
  image10Src:
    'https://media.istockphoto.com/id/1346156711/photo/court-of-law-and-justice-trial-session-imparcial-honorable-judge-pronouncing-sentence.jpg?s=612x612&w=0&k=20&c=ySUY_lNor5N9m3ypHXxGp9IGubWkxaFFQL8tkraRiM4=',
  image8Src:
    'https://media.istockphoto.com/id/1330020430/photo/image-lawyer-businessman-sitting-at-the-office-with-a-woman-customer-explaining-the-agreement.jpg?s=612x612&w=0&k=20&c=sQs018kCsBMAdX82LcG3vKAh559b1J9caMDSLpCpFrA=',
  image7Src:
    'https://media.istockphoto.com/id/1314879006/photo/couple-preparing-to-sign-a-contract-of-sale.jpg?s=612x612&w=0&k=20&c=-NluUn0efrrNHq9YO9Yf73fLevl8eF51HDIhVknaZoQ=',
  content1:
    'Experience a cutting-edge research engine designed to enhance legal research efficiency and accuracy. Unlock the power of AI to streamline your workflow and access a comprehensive legal database at your fingertips.',
  image11Alt: 'Hero Image',
  action2: 'Secondary action',
  image6Alt: 'Hero Image',
  image3Src:
    'https://media.istockphoto.com/id/1062933252/photo/legal-advice-service-concept-with-lawyer-working-for-justice-law-business-legislation-and.jpg?s=612x612&w=0&k=20&c=KUbSd05rSSgbPNfRoogdaiGYkExurmDUJMpXQ7d5OlM=',
  image5Src:
    'https://media.istockphoto.com/id/1424912318/photo/busy-millennial-professional-group-reviewing-startup-marketing-reports.jpg?s=612x612&w=0&k=20&c=k7dgXmY2BhnuW2-GBTDNkqWLt9um4oSize7N4tFw8QA=',
  image2Alt: 'Hero Image',
  image9Src:
    'https://media.istockphoto.com/id/1192060250/photo/supreme-court-of-india-building-in-new-delhi-india.jpg?s=612x612&w=0&k=20&c=e7ywH8wwo_-k85Y24l6oXOq9fYdQvxRq2fe1gyOsKBM=',
  image2Src:
    'https://media.istockphoto.com/id/1125111981/photo/judge-gavel-on-a-pile-of-books-law-and-justice-concept.jpg?s=612x612&w=0&k=20&c=Cyo6j7vlVxrMvCpvA7fuyurg9-wdls3oHQUfH39sxa4=',
  image6Src:
    'https://media.istockphoto.com/id/1315993416/video/law-icon-rotating-wheel-concept.jpg?s=640x640&k=20&c=agycNaUBN9Z-MicbVffOuw8ZPAztf37q787HxSMQ768=',
  image7Alt: 'Hero Image',
  image1Src:
    'https://media.istockphoto.com/id/1363094577/video/the-statue-of-justice-lady-justice-or-iustitia-justitia-the-roman-goddess-of-justice-in.jpg?s=640x640&k=20&c=1pSQ5rpQH1Aidj0GfM6CjN_PaomEtFcIR90-5S1Ju2c=',
  image1Alt: 'AI-Driven Research Engine Hero Image',
  image3Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  image12Src:
    'https://media.istockphoto.com/id/1097811822/photo/bookshelf-of-irish-legal-books.jpg?s=612x612&w=0&k=20&c=8otSyGSVWUIOn6s8Bb_gXBfw_UqmZKrtyOCkpAmmzrc=',
  image12Alt: 'Hero Image',
  image11Src:
    'https://media.istockphoto.com/id/1415847625/vector/legal-and-justice-law-line-icons-and-symbols.jpg?s=612x612&w=0&k=20&c=Tu1opUgffC-Go8f8UrR0pPvik26W4NwoBI8IsTT-KCs=',
  image8Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  heading1: 'Revolutionize Legal Research with AI-Driven Technology',
  image9Alt: 'Hero Image',
}

Hero.propTypes = {
  image10Alt: PropTypes.string,
  action1: PropTypes.string,
  image4Src: PropTypes.string,
  image10Src: PropTypes.string,
  image8Src: PropTypes.string,
  image7Src: PropTypes.string,
  content1: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.string,
  image6Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image5Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image2Src: PropTypes.string,
  image6Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image12Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  heading1: PropTypes.string,
  image9Alt: PropTypes.string,
}

export default Hero
