import React from 'react';
import Header from '../../wrappers/header/header';

const NotFoundScreen = () => {
  return (
    <>
      {<Header />}

      <main className="page__main page__main--property">
        <h1>Страница не найдена</h1>
      </main>
    </>
  );
};

export default NotFoundScreen;
