import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './services/store';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './index.css';

const App = React.lazy(() => import('./App.jsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <App />
          <ToastContainer />
        </Layout>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </Provider>
  </React.StrictMode>
);
