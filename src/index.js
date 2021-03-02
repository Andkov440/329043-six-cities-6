import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const Setting = {
  OFFER_COUNT: 30
};

ReactDOM.render(
    <App
      offerCount={Setting.OFFER_COUNT}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
