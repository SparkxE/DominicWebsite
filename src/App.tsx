import { Routes, Route, Link, HashRouter } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Projects from './pages/Projects';
import './App.css'

function App() {


  return (
    <HashRouter>
      <div className='App'>
        <div id='NavbarItem'>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Projects">Past Projects</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/education' element={<Education/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/notFound' element={<NotFound/>}></Route>
          </Routes>
        </div>
        <div>
          <footer>
            This site was created by <a href='https://sparkxe.github.io/ResumeSite/'>Aaron Anderson</a> using React.JS and Vite
          </footer>
        </div>
      </div>
    </HashRouter>
  )
}

export default App;