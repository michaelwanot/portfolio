import React from 'react';

function About() {
  return (
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
  );
}

export default About; 