import './App.css'
import Banner from './components/banner'
import NavBar from './components/navbar'
import AboutMe from './pages/aboutMe'
import Contact from './pages/connect'
import Education from './pages/education'
import Project from './pages/project'
import Skills from './pages/skills'

function App() {

  return (
    <div className='w-full'>
  <NavBar></NavBar>
  <Banner></Banner>
  <AboutMe ></AboutMe>
  <Skills></Skills>
  <Education></Education>
  <Project></Project>
 <Contact></Contact>
    </div>
  )
}

export default App
