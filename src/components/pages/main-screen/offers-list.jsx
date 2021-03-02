import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../../offer-card';

const OfferList = (props) => {
  const {offers} = props;

  const [activeOfferCard, setActiveOfferCard] = useState(null);

  const handleMouseIn = (selectedCard) => {
    setActiveOfferCard(selectedCard);
  };

  const handleMouseOut = () => {
    setActiveOfferCard(null);
  };

  return (offers.map((card) => <OfferCard
    key={card.id}
    offer={card}
    onMouseIn={handleMouseIn}
    onMouseOut={handleMouseOut}/>));
};

export default OfferList;

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};
