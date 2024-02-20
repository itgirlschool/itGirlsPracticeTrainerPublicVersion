import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './styles/index.scss';
import App from './pages/App.jsx';
import  {store} from "./store/index.js";
import firebase from "../firebase.js";
import {initializeApp} from 'firebase/app'

const  app = initializeApp(firebase)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Provider store={store}>
          <App />
          </Provider>
      </BrowserRouter>
);
