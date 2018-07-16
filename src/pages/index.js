import React, { Component } from 'react';

import TopHomePage from '../blocks/HomePage/Top';
import TopCards from '../blocks/HomePage/TopCards';
import Header from '../components/Header';
import ServicesBlock from '../blocks/HomePage/ServicesBlock';
import OurClients from '../blocks/HomePage/OurClients';
import OurExperience from '../blocks/HomePage/OurExperience';
import Latest from '../blocks/HomePage/Latest';
import OurAdvantages from '../blocks/HomePage/OurAdvantages';
import GetInTouch from '../blocks/HomePage/GetInTouch';
import TechnologiesWeUse from '../blocks/HomePage/TechnologiesWeUse';
import References from '../blocks/HomePage/References';
import MemberCard from '../blocks/HomePage/MemberCard';

import {
  Image1,
  Image2,
  Image3,
  clientImage1Black,
  clientImage1Color,
  clientImage2Black,
  clientImage2Color,
  clientImage3Black,
  clientImage3Color,
  clientImage4Black,
  clientImage4Color,
  clientImage5Black,
  clientImage5Color,
  expBG1,
  expBG2,
  expBG3,
  expBG4,
  expBG5,
  Image4,
  Image5,
  Image6,
  Image7,
  ourAdvantachesImg1,
  ourAdvantachesImg2,
  ourAdvantachesImg3,
  ourAdvantachesImg4,
  ourAdvantachesImg5,
  ourAdvantachesImg6,
  getInTouchImage,
  tecnologyImage1,
  tecnologyImage2,
  tecnologyImage3,
  tecnologyImage4,
  tecnologyImage5,
  tecnologyImage6,
  tecnologyImage7,
  tecnologyImage8,
  tecnologyImage9,
  tecnologyImage10,
  tecnologyImage11,
  Image8,
  Image9,
  Image10,
  Image11,
  PersonalCardImg0,
  PersonalCardImg1,
  PersonalCardImg2,
  PersonalCardImg3,
} from '../utils/images';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { title: 'services', href: '/' },
        { title: 'expertise', href: '/' },
        { title: 'technologies', href: '/' },
        { title: 'work', href: '/' },
        { title: 'company', href: '/' },
      ],
      cards: [
        {
          image: Image1,
          title: 'Dedicated team',
          text:
            'Save up to 50% in labour costs, meet dealines and deliver better solutions with us',
        },
        {
          image: Image2,
          title: 'Development',
          text:
            'We develop competitive Mobile and Web applications that work and make money for our clients',
        },
        {
          image: Image3,
          title: 'Maintenance and Support',
          text:
            'We will ensure availability and reliability of all your online resorces. We will keep your business online 24/7',
        },
      ],
      clientsData: {
        title: 'Our clients',
        client: [
          { imageColor: clientImage1Black, imageBlack: clientImage1Color },
          { imageColor: clientImage2Black, imageBlack: clientImage2Color },
          { imageColor: clientImage3Black, imageBlack: clientImage3Color },
          { imageColor: clientImage4Black, imageBlack: clientImage4Color },
          { imageColor: clientImage5Black, imageBlack: clientImage5Color },
        ],
      },
      expirienceData: {
        title: 'OUR EXPERIENCE',
        expirienceArray: [
          {
            title: 'Business solutions',
            image: expBG1,
            href: '/',
            pointList: [
              { title: 'ERP and CRM systems' },
              { title: 'Corporate portals Data ' },
              { title: 'analytics and visualization' },
              { title: 'Integration' },
            ],
          },
          {
            title: 'E-commerce',
            image: expBG2,
            href: '/',
            inverted: true,
            pointList: [
              { title: 'Beautiful web stores' },
              { title: 'Backoffice integration' },
              { title: 'Warehouse automation ' },
              { title: 'Integration with payment and shipping systems' },
            ],
          },
          {
            title: 'Blockchain',
            image: expBG3,
            href: '/',
            pointList: [
              { title: 'Decentralized web applications' },
              { title: 'Corporate polls and voting ICO' },
              { title: 'ICO and Token emmission' },
              { title: 'Decentralized platform' },
            ],
          },
          {
            title: 'Booking and event platforms',
            image: expBG4,
            href: '/',
            inverted: true,
            pointList: [
              { title: 'Booking platform' },
              { title: 'Website from hotel website' },
              { title: 'PMS integration' },
              { title: 'Custom PMS solutions' },
            ],
          },
          {
            title: 'Fin tech',
            image: expBG5,
            pointList: [
              { title: 'Banking applications' },
              { title: 'Online payment processing' },
              { title: 'Digital assets managment' },
              { title: 'Trading portals' },
            ],
          },
        ],
      },
      servicesData: {
        title: 'Services we provide',
        servicesArr: [
          {
            title: 'Back-end Development',
            description: 'Rocket fast backend with lastest technologies',
            technologies: ['NodeJS', 'MongoDB', 'Docker'],
            image: Image4,
          },
          {
            title: 'Front-end Development',
            description:
              'Engaging interaction with state of the art frameworks',
            technologies: ['VueJS', 'React', 'HTML5'],
            image: Image5,
          },
          {
            title: 'Design',
            description:
              'Beautiful web design with illustrations and animation',
            technologies: ['Web design', 'Illustrations', 'UI/UX'],
            image: Image6,
          },
          {
            title: 'Quality assurance',
            description: 'Rigorous manual and automated testing',
            technologies: [
              'Functional testing',
              'Perfomance testing',
              'Maintenance',
            ],
            image: Image7,
          },
        ],
      },
      latest: {
        title: 'Latest Projects',
        title2: 'Media Project',
        link2: '/',
        link2Title: 'show',
        image1: Image8,
        image2: Image9,
        image3: Image10,
        image4: Image11,
      },
      ourAdvantachesData: {
        title: 'OUR ADVANTAGES',
        ourAdvantacheArray: [
          {
            title: 'Experts',
            image: ourAdvantachesImg1,
            text: 'In latest technologies. Over 80 full-time employees',
          },
          {
            title: 'Know-how',
            image: ourAdvantachesImg2,
            text: 'We sucessfully deliver pojects since 2008',
          },
          {
            title: 'Full cycle',
            image: ourAdvantachesImg3,
            text: 'We garantee your projects are ready for launch',
          },
          {
            title: 'Communication',
            image: ourAdvantachesImg4,
            text:
              'We always stay in touch via any preferable communication channel',
          },
          {
            title: 'Flexible payments',
            image: ourAdvantachesImg5,
            text: 'Choose payment plans and means that is convinient for you',
          },
          {
            title: 'Warranty',
            image: ourAdvantachesImg6,
            text: 'We make sure your projects are ready for launch',
          },
        ],
      },
      getInTouchData: {
        title: 'Lets get in touch',
        description:
          'Leave you email address to schedule an individual free consultation',
        image: getInTouchImage,
      },
      technologiesWeUseData: {
        title: 'TECHNOLOGIES WE USE',
        logoAspNet: tecnologyImage1,
        logoNodeJS: tecnologyImage6,
        logoMongo: tecnologyImage4,
        logoMySql: tecnologyImage5,
        logoPHP: tecnologyImage7,
        logoReact: tecnologyImage8,
        logoAngular: tecnologyImage11,
        logoGit: tecnologyImage2,
        logoSass: tecnologyImage10,
        logoHTML: tecnologyImage3,
        logoVue: tecnologyImage9,
      },
      personalCards: {
        title: 'Company and Team',
        personalDetails: [
          {
            title: 'Sergey Galuza',
            role: 'Founder',
            image: PersonalCardImg0,
          },
          {
            title: 'Vitaly Stupak',
            role: 'Director',
            image: PersonalCardImg1,
          },
          {
            title: 'Alexander Schebet',
            role: 'CTO',
            image: PersonalCardImg2,
          },
          {
            title: 'Vitali Yurkevich',
            role: 'Customer relations manager',
            image: PersonalCardImg3,
          },
        ],
      },
    };
  }

  render() {
    const {
      links,
      cards,
      clientsData,
      servicesData,
      expirienceData,
      ourAdvantachesData,
      getInTouchData,
      technologiesWeUseData,
      latest,
      personalCards,
    } = this.state;
    return (
      <div>
        <Header links={links} />
        <TopHomePage />
        <TopCards cards={cards} />
        <ServicesBlock servicesData={servicesData} />
        <OurClients clientsData={clientsData} />
        <OurExperience expirience={expirienceData} />
        <Latest latest={latest} />
        <GetInTouch getInTouchData={getInTouchData} />
        <TechnologiesWeUse technologiesWeUseData={technologiesWeUseData} />
        <References />
        <OurAdvantages ourAdvantachesData={ourAdvantachesData} />
        <MemberCard personalCards={personalCards} />
      </div>
    );
  }
}

export default IndexPage;
