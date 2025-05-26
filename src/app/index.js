// "use client";
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App'
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { store } from './cart'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
// );

// reportWebVitals(); 

"use client";

import { Provider } from "react-redux";
import { store } from "./cart";

export default function ClientProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
