
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-xl font-bold">Michael Wanot</div>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#about" className="hover:text-blue-700">About</a></li>
          <li><a href="#portfolio" className="hover:text-blue-700">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center text-center py-20 px-4 bg-white">
        <h1 className="text-4xl font-bold mb-2">Michael Wanot</h1>
        <p className="text-blue-700 text-lg font-medium">Frontend Developer Consultant</p>
        <div className="w-24 h-24 mt-6 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-4xl">👨‍💻</span>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 bg-white">
        <div className="w-full md:w-1/2 h-48 bg-blue-700"></div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Chi sono</h2>
          <p>
            I am a frontend developer consultant. I have experience in building web
            applications and projects related to Legislative Decree 231/01.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 py-16 bg-gray-100">
        <h2 className="text-2xl font-bold mb-8">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white h-32 shadow-sm rounded-md flex items-center justify-center">Project</div>
          <div className="bg-white h-32 shadow-sm rounded-md flex items-center justify-center">Project</div>
          <div className="bg-white h-32 shadow-sm rounded-md flex items-center justify-center">Project</div>
          <div className="bg-white h-32 shadow-sm rounded-md flex items-center justify-center">Project</div>
          <div className="bg-white h-32 shadow-sm rounded-md flex items-center justify-center">Project</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-white">
        <h2 className="text-2xl font-bold mb-8">Contatti</h2>
        <form className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm mb-1">Nome</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Messaggio</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2" rows="4"></textarea>
          </div>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Invia</button>
        </form>
      </section>
    </div>
  );
}

export default App
