import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaJenkins,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiAngular,
  SiPuppeteer,
} from "react-icons/si";

function Tools() {
  return (
      <section className="py-12 px-6 bg-white" id="tecnologie">
        <h2 className="text-3xl font-bold text-center mb-8">Tecnologie che utilizzo</h2>

        {/* Frontend */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Frontend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center mb-8">
            <Tech icon={<FaReact size={40} className="text-cyan-500" />} name="React" />
            <Tech icon={<SiTypescript size={40} className="text-blue-600" />} name="TypeScript" />
            <Tech icon={<SiAngular size={40} className="text-red-600" />} name="Angular" />
            <Tech icon={<SiVite size={40} className="text-purple-600" />} name="Vite" />
            <Tech icon={<SiTailwindcss size={40} className="text-sky-400" />} name="Tailwind" />
            <Tech icon={<FaHtml5 size={40} className="text-orange-500" />} name="HTML" />
            <Tech icon={<FaCss3Alt size={40} className="text-blue-500" />} name="CSS" />
            <Tech icon={<FaJs size={40} className="text-yellow-400" />} name="JavaScript" />
          </div>
        </div>

        {/* DevOps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">DevOps</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center mb-8">
            <Tech icon={<FaDocker size={40} className="text-blue-400" />} name="Docker" />
            <Tech icon={<FaJenkins size={40} className="text-red-500" />} name="Jenkins" />
          </div>
        </div>

        {/* Tools */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center mb-8">
            <Tech icon={<SiPuppeteer size={40} className="text-green-700" />} name="Puppeteer" />
          </div>
        </div>

      </section>

  );
}

function Tech({ icon, name }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon}
      <span className="text-sm">{name}</span>
    </div>
  );
}

export default Tools; 