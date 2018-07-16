import React from 'react';
// import PropTypes from 'prop-types'
import Slider from 'react-slick';

import style from './style';

import DefaultLayout from '../../../layouts/Default';
// import AdvantachesCard from '../../../components/AdvantachesCard';

class References extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  }

  render() {
    const { settings } = this.state;
    return (
      <div>
        {/* <DefaultLayout title="REFERENCES"> */}
        <div className="references">
          <div className="references__container">
            <Slider {...settings}>
              <div>
                <h3>
1
                </h3>
              </div>
              <div>
                <h3>
2
                </h3>
              </div>
              <div>
                <h3>
3
                </h3>
              </div>
              <div>
                <h3>
4
                </h3>
              </div>
              <div>
                <h3>
5
                </h3>
              </div>
              <div>
                <h3>
6
                </h3>
              </div>
            </Slider>
          </div>
        </div>
        {/* </DefaultLayout> */}
        <style jsx>
          {style}
        </style>
      </div>
    );
  }
}

References.propTypes = {
  // ourAdvantachesData: PropTypes.shape({
  //   title: PropTypes.string,
  //   ourAdvantacheArray: PropTypes.arrayOf(PropTypes.object),
  // }),
};
References.defaultProps = {
  // ourAdvantachesData: [{}],
};

export default References;
