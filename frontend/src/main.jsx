import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './_layout.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthScreen from './pages/AuthScreen.jsx';
import Documents from './pages/Documents.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'documents',
        element: <Documents />,
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
