import { Container } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'
import HeroSection from './components/HeroSection'
import WorkExperienceTimeline from './components/WorkExperienceTimeline'
import TopProgressBar from './components/TopProgressBar'
import { AboutSection } from './components/AboutNew'

function App() {
  
  return (
    <>
      <TopProgressBar/>
      <Navbar/>
      <Container maxWidth="false">
       <HeroSection/>
       {/* <About/> */}
        <AboutSection/>
       <Skills/>
       <WorkExperienceTimeline/>
       <Projects/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
