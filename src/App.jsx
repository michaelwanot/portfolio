import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Tools from './components/Tools'
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App
