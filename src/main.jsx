import { store } from './components/store.js';
import { createRoot } from 'react-dom/client';
import './main.css';
import { App } from './components/App.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
