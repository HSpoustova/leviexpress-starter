import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const App = () => {
  return (
    <>
      <Header />
      <div className="page__container">
        
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
