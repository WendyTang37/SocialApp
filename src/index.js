import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';


JavascriptTimeAgo.addLocale(en)
library.add(faCheckCircle, faComment, faRetweet, faHeart, faShareSquare);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
