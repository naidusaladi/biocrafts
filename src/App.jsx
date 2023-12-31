
import viteLogo from '/vite.svg'
import './App.css'
import Nav from '../src/Componets/Navbar/Nav'
import Home from './Componets/Home/Home'
import BanbooItems from './Componets/BanbooItems/BanbooItems'
import JuteItems from './Componets/JuteItems/JuteItems'
import Footer from "./Componets/Fotter/Footer";
import About from './Componets/About/About'

function App() {
  

  return (
    <>
      <Nav />
      <Home id="Home"/>
      <About />
      <BanbooItems />
      <JuteItems id="Jut"/>
      <Footer id="Foot"/>

    </>
  )
}

export default App
