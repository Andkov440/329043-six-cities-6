import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = ({offerCount}) => {
  return <Main offerCount={offerCount}/>;
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
};

export default App;
