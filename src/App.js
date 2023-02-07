import {Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from './pages/Gallery';

import Header from "./components/Header";



function App() {

  return (
    <>
      <Header/>
      <Home />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Gallery' element={<Gallery />}/>
      </Routes>
    </>
  );
}

export default App;