import NavBar from "./components/NavBar";
import About from './components/About';
import Projects from "./components/Projects";
import Experiences from "./components/Experiences"
import SideBar from "./components/SideBar"
import ContactForm from './components/ContactForm'
// import RightNavBar from './components/RightNavBar'

export default function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Projects />
      <Experiences />
      <ContactForm />
      <SideBar />
      {/* <RightNavBar /> */}
    </div>
  )
}