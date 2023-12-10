import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeroDetails from './components/herodetails/HeroDetails';
import suicideSquadCharacters from './components/struct/Struct';

const router = createBrowserRouter([
  {
    path:"/",element: <div>Home</div>
  },
  {
    path:"/hero/:id",
    element: <HeroDetails heroData={suicideSquadCharacters} />,
  }
]);
function App() {
  return (
    <RouterProvider router ={router}></RouterProvider>  
  );
}

export default App;
