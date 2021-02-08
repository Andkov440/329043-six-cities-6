import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/main-screen/main-screen';

const Setting = {
  OFFER_COUNT: 30
};

ReactDOM.render(
    <App
      offerCount={Setting.OFFER_COUNT}
    />,
    document.querySelector(`#root`)
);
