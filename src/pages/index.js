import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SEO from '../components/seo';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Matthew Davenport Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Matthew Davenport Portfolio'} />
        <SEO image="headshot.jpeg" />
      </Helmet>
      <App />
    </>
  );
};
