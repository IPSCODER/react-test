import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './pages/home/Home';
// import About from './pages/about/About';
// import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import { Suspense, lazy } from 'react';


const Home = lazy( () => import("./pages/home/Home") )
const About = lazy( () => import("./pages/about/About") )
const Contact = lazy( () => import("./pages/contact/Contact") )



function App() {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Suspense fallback={<h1>Loading...</h1>} ><Home/></Suspense>} />
  <Route path='/about' element={<Suspense fallback={<h1>Loading...</h1>} ><About/></Suspense>} />
  <Route path='/contact' element={<Suspense fallback={<h1>Loading...</h1>} ><Contact/></Suspense>} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
