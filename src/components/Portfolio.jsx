import React from 'react';

function Portfolio() {
  return (
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
  );
}

export default Portfolio; 