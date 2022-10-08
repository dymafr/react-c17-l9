import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProfileOverview from './pages/Profile/pages/ProfileOverview/ProfileOverview';
import ProfileData from './pages/Profile/pages/ProfileData/ProfileData';
import { homepageLoader } from './loaders/homepageLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: homepageLoader,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
        caseSensitive: true,
        children: [
          {
            index: true,
            element: <ProfileOverview />,
          },
          {
            path: 'data',
            element: <ProfileData />,
          },
        ],
      },
      {
        path: '/profile/*',
        element: <Profile />,
      },
    ],
  },
]);
