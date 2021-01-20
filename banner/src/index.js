import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import img1 from "./assets/img/1.jpg"
import img2 from "./assets/img/2.webp"
import img3 from "./assets/img/3.jpg"
import img4 from "./assets/img/4.jpg"
import img5 from "./assets/img/5.webp"


ReactDOM.render(
  <React.StrictMode>
    <App imgSrcs={[img1,img2,img3,img4,img5]} />
  </React.StrictMode>,
  document.getElementById('root')
);

