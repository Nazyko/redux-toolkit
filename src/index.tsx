
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { MantineProvider } from '@mantine/core';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
      <MantineProvider >
        <App />
      </MantineProvider>
      
    </Provider>
      

  
);