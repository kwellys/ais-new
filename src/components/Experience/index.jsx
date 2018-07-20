import expBG1 from 'assets/img/exp1.png';
import classname from 'classname';
import Text from 'components/Text';
import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';

import style, { listItem, viewCases } from './style';

const ListItem = ({ text }) => (
  <div className="b-list">
    <Text noAlign>
      {text}
    </Text>
    <style jsx>
      {listItem}
    </style>
  </div>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

const ViewCase = ({ href }) => (
  <div className="viewcase__container">
    <a href={href} className="b-view-cases">
    view cases
    </a>
    <style jsx>
      {viewCases}
    </style>
  </div>
);

ViewCase.propTypes = {
  href: PropTypes.string,
};
ViewCase.defaultProps = {
  href: '/',
};

const Experience = ({ descr, inverted }) => {
  const expWrapper = classname('exp__wrapper', {
    exp__wrapper_inverted: inverted,
  });
  const expContainer = classname('exp__container', {
    exp__container_inverted: inverted,
  });
  const expDescription = classname('exp__description', {
    exp__description_inverted: inverted,
  });
  return (
    <div className={expWrapper}>
      <div className={expContainer}>
        <div className={expDescription}>
          <div className="exp__title">
            <Title big title={descr.title} />
          </div>
          <div className="exp__list">
            {descr.pointList.map(point => (
              <ListItem key={point.title} text={point.title} />
            ))}
          </div>
          <ViewCase href={descr.href} />
        </div>
        <div className="exp__image-container">
          <div className="exp__image-wrapper">
            <img className="exp__image" src={descr.image} alt="expirience" />
          </div>
        </div>
      </div>
      <style jsx>
        {style}
      </style>
    </div>
  );
};

Experience.propTypes = {
  descr: PropTypes.shape({
    title: PropTypes.string,
    pointList: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.string,
  }),
  inverted: PropTypes.bool,
};
Experience.defaultProps = {
  descr: {
    pointList: [{}],
    title: 'Need title',
    image: expBG1,
  },
  inverted: false,
};
export default Experience;
