import React from 'react';
import Footer from '../../wrappers/footer/footer';
import Header from '../../wrappers/header/header';
import PropTypes from 'prop-types';

const FavoritesScreen = ({offers}) => {
  const favoriteOffersArray = offers.filter((offer) => offer.isFavorite === true);

  const cities = [...new Set(favoriteOffersArray.map((item) => item.city.name))];
  return (
    <React.Fragment>
      {<Header />}
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city, i) => (<li key={`${i}`} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{`${city}`}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoriteOffersArray.filter((favorite) => favorite.city.name === city).map((offer, index) => (<article key={`${index}`} className="favorites__card place-card">
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img className="place-card__image" src={`${offer.previewImage}`} width="150" height="110" alt="Place image" />
                      </a>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{offer.price}</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: `${offer.rating * 20}%`}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">{offer.title}</a>
                      </h2>
                      <p className="place-card__type">{offer.type}</p>
                    </div>
                  </article>))}
                </div></li>))}
            </ul>
          </section>
        </div>
      </main>
      {<Footer />}
    </React.Fragment>
  );
};

export default FavoritesScreen;

FavoritesScreen.propTypes = {
  offers: PropTypes.array.isRequired,
};
