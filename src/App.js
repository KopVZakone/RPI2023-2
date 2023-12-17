import { createBrowserRouter, Navigate, redirect, RouterProvider } from 'react-router-dom';
import HeroDetails from './components/herodetails/HeroDetails';
import suicideSquadCharacters from './components/struct/Struct';
import HeroSearch from './components/hero_list/hero_search';
import Home from './components/home/Home';
import ErrorPage from './components/errorpage/ErrorPage';
import { I18nextProvider } from 'react-i18next';

const router = createBrowserRouter([
  {
    path: "/", element: <Home heroData={suicideSquadCharacters} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <HeroSearch heroData={suicideSquadCharacters} />,
  },
  {
    path: "/hero/:id",
    element: <HeroDetails heroData={suicideSquadCharacters} />,
  },
  {
    path: "/error",
    element: <ErrorPage />
  }
]);

function App() {
  return (
    <I18nextProvider>
      <RouterProvider router={router}></RouterProvider>
    </I18nextProvider>
  );
}

export default App;
