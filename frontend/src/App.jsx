import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/projects'element={<Projects/>}/>
      <Route path='/signup'element={<Signup/>}/>
      <Route path='/signin'element={<Signin/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
