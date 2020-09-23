import  React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './assets/main.css';
import App from './App';
import StoreProvider from './provider/store';


ReactDOM.render(
  <React.StrictMode>
      <StoreProvider>
          <App />
      </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

