import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './styles/index.scss';
import App from './pages/App.jsx';
import  {store} from "./store/index.js";



import {QueryClient,QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <QueryClientProvider client={new  QueryClient()}>
          <Provider store={store}>
          <App />
          </Provider>
          </QueryClientProvider>
      </BrowserRouter>
);


