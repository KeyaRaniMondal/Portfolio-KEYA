import './App.css'
import Banner from './components/banner'
import NavBar from './components/navbar'
import AboutMe from './pages/aboutMe'
import Skills from './pages/skills'

function App() {

  return (
    <div className='w-full'>
  <NavBar></NavBar>
  <Banner></Banner>
  <AboutMe></AboutMe>
  <Skills></Skills>
    </div>
  )
}

export default App
