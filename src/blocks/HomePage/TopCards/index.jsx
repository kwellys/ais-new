import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import Card from '../../../components/Card';


const TopCards = ({ cards }) => {
  const renderCards = () => cards.map(card => (
    <Card key={card.title} image={card.image} title={card.title} text={card.text} />
  ));
  return (
    <div className="home-cards__wrapper">
      <div className="home-cards">

        <div className="home-cards__content">
          {renderCards()}
        </div>
      </div>
      <style jsx>
        {style}
      </style>
    </div>
  );
};

TopCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};
TopCards.defaultProps = {
  cards: [],
};

export default TopCards;
