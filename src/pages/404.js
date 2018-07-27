import React, {Component} from 'react'
import Header from '../components/Header';
import Title from '../components/Title';
import Button from '../components/Button';
import style from './style';
import Astro from '../assets/img/astronaut.svg';
import NotFoundCode from '../assets/img/404.svg';

class NotFoundPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { title: 'services', href: '/services' },
        { title: 'expertise', href: '/' },
        { title: 'technologies', href: '/' },
        { title: 'work', href: '/' },
        { title: 'company', href: '/' },
      ],
    }
  }
  
  render(){
    const { links } = this.state;
    return (
      <div className="not-found">
        <div className="not-found__header">
          <Header links={links} />
        </div>
        <div className="not-found__code">
          <img className="not-found__code-error" src={NotFoundCode} alt="404" />
        </div>
        <div className="not-found__text">
          <div className="not-found__text-title">
            {/* <Title inverted big uppercase title="Ooops! Looks like your got lost" /> */}
            <span className="inscription">Ooops! Looks like your got lost</span>
          </div>
          <div className="not-found__text-button">
            <Button inverted err404 title="Back to home page" />
          </div>
        </div>
        <div className="not-found__astro">
          <img className="not-found__astro-img" src={Astro} alt="Astronaut" />
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }    
}
   

export default NotFoundPage
