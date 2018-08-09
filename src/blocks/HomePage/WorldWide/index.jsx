import Cursor from '../../../components/Cursor';
import DefaultLayout from '../../../layouts/Default';
import PropTypes from 'prop-types';
import React from 'react';
import dragscroll from './dragscroll'; // need to have dragscrollToCenter on env

import style from './style';


const scrollToCenter = () => {
  const a = document.querySelector('.world-wide__wrapper');
  if (a) {
    const width = a.offsetWidth;
    //condition on Edge browser
    if(a.scrollTo){
      a.scrollTo(width / 2, 0);
    }
  }
};

class WorldWide extends React.Component {
  componentDidMount() {
    scrollToCenter();
  }

  render() {
    const { worldWide } = this.props;
    return (
      <div>
        <DefaultLayout title={worldWide.title}>
          <div className="world-wide">
            <div className="world-wide__wrapper dragscroll">
              <div className="world-wide__container ">
                {worldWide.worldWideData.map(singleMarker => (
                  <Cursor key={singleMarker.name} singleMarker={singleMarker} />
                ))}
              </div>
            </div>
          </div>
        </DefaultLayout>
        <style jsx>
          {style}
        </style>
      </div>
    );
  }
}

WorldWide.propTypes = {
  worldWide: PropTypes.shape({
    title: PropTypes.string,
    worldWideData: PropTypes.arrayOf(PropTypes.object),
  }),
};

WorldWide.defaultProps = {
  worldWide: {
    title: 'Worldwide company',
    worldWideData: [{}],
  },
};

export default WorldWide;
