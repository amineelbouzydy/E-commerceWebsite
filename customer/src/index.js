import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import  store  from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
export const  persistor = persistStore(store)

// import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <Provider store={store}>
        <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
  </React.StrictMode>
);


