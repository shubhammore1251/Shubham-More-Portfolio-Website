import { Container } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'
import HeroSection from './components/HeroSection'

function App() {
  
  return (
    <>
      <Navbar/>
      <Container maxWidth="false">
       <HeroSection/>
       <About/>
       <Skills/>
       <Projects/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
