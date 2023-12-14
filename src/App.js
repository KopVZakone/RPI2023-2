import './App.css';
import { createBrowserRouter, Navigate, redirect, RouterProvider } from 'react-router-dom';
import HeroDetails from './components/herodetails/HeroDetails';
import suicideSquadCharacters from './components/struct/Struct';
import HeroSearch from './components/hero_list/hero_search';
import Home from './components/home/Home';

const router = createBrowserRouter([
  {
    path: "", element: <Navigate to="/en"/>
  },
  {
    path: "/:lang", element: <Home heroData={suicideSquadCharacters}/>
  },
  {
    path: "/search", element: <Navigate to="/en/search"/>
  },
  {
    path: "/:lang/search",
    element: <HeroSearch heroData={suicideSquadCharacters} />,
  },
  {
    path: "/:lang/hero/:id",
    element: <HeroDetails heroData={suicideSquadCharacters} />,
  }
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
