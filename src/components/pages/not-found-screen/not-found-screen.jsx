import React from 'react';
import Header from '../../wrappers/header/header';

const NotFoundScreen = () => {
  return (
    <React.Fragment>
      {<Header />}

      <main className="page__main page__main--property">
        <h1>Страница не найдена</h1>
      </main>
    </React.Fragment>
  );
};

export default NotFoundScreen;
