import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Default from './pages/Default';
import SingleRecipes from './pages/SingleRecipes';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
          <Route path='/recipes/:id' element={<SingleRecipes/>}/>
          <Route element={<Default/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
