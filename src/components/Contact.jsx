import React from 'react';

function Contact() {
  return (
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
  );
}

export default Contact; 