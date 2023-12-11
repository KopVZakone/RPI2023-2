import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeroDetails from './components/herodetails/HeroDetails';
import suicideSquadCharacters from './components/struct/Struct';
import HeroSearch from './components/hero_list/hero_search';

const router = createBrowserRouter([
  {
    path: "/", element: <div>Home</div>
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
