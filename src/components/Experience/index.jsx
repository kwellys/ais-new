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

const ListBlock = ({ items }) => {
  console.log(items);
  if (items.length === 1) {
    return (
      <Text noAlign>
        {items[0].title}
      </Text>
    );
  }

  return (
    <div>
      {items.map(point => (
        <ListItem key={point} text={point} />
      ))}
    </div>
  );
};

ListBlock.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const ViewCase = ({ href, more }) => (
  <div className="viewcase__container">
    <a href={href} className="b-view-cases">
      {more ? 'see more' : 'view cases'}
    </a>
    <style jsx>
      {viewCases}
    </style>
  </div>
);

ViewCase.propTypes = {
  href: PropTypes.string,
  more: PropTypes.bool,
};
ViewCase.defaultProps = {
  href: '/',
  more: false,
};

const Experience = ({
                      descr, inverted, more, reversed,
                    }) => {
  const expWrapper = classname('exp__wrapper', {
    exp__wrapper_inverted: inverted,
    exp__wrapper_reversed: reversed,
    exp__wrapper_reflected: inverted && reversed,
  });
  const expDescription = classname('exp__description', {
    exp__description_inverted: inverted,
    exp__description_reversed: reversed,
    exp__description_reflected: inverted && reversed,
  });
  const expContainer = classname('exp__container', {
    exp__container_inverted: inverted,
    exp__container_reversed: reversed,
    exp__container_reflected: inverted && reversed,
  });
  const expList = classname('exp__list', {
    exp__list_indent: descr.pointList.length === 1,
  });

  return (
    <div className={expWrapper}>
      <div className={expContainer}>
        <div className={expDescription}>
          <div className="exp__title">
            <Title big title={descr.title} />
          </div>
          <div className={expList}>
            <ListBlock items={descr.pointList} />
          </div>
          <ViewCase href={descr.href} more={more} />
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
  more: PropTypes.bool,
  reversed: PropTypes.bool,
};
Experience.defaultProps = {
  descr: {
    pointList: [],
    title: 'Need title',
    image: expBG1,
  },
  inverted: false,
  more: false,
  reversed: false,
};
export default Experience;