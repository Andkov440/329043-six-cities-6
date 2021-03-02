import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../pages/main-screen/main-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';

const App = (props) => {
  const {offerCount, offers, reviews} = props;
  const [firstOffer] = offers;
  const [firstReview] = reviews;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offerCount={offerCount} offers={offers}/>
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen offers={offers}/>
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/offer/:id" render={() => <OfferScreen firstOffer={firstOffer} firstReview={firstReview} {...props}/>} />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default App;
