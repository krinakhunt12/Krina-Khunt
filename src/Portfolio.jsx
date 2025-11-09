import React, { useState, useEffect } from 'react';

const BeautifulPortfolio = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "Immersive E-Commerce",
      description: "Full-stack platform with 3D product visualization and seamless checkout experience",
      tech: ["React", "Three.js", "Node.js", "MongoDB", "Stripe"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "AI Content Studio",
      description: "Creative suite that leverages machine learning to generate and refine marketing assets",
      tech: ["React", "Python", "TensorFlow", "AWS", "OpenAI API"],
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Fitness Metaverse",
      description: "VR-compatible platform that gamifies workout routines in interactive 3D environments",
      tech: ["React Native", "Three.js", "Firebase", "Unity", "WebXR"],
      color: "from-emerald-500 to-teal-600"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (isRotating) {
        setActiveProject((prev) => (prev + 1) % projects.length);
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isRotating, projects.length]);
  
  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };
  
  const setProject = (index) => {
    setActiveProject(index);
    setIsRotating(false);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.15),transparent_50%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-600 mix-blend-screen opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-600 mix-blend-screen opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-teal-600 mix-blend-screen opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
  <div className="relative max-w-5xl mx-auto px-6 py-12 z-10">
        {/* Header */}
        <header className="mb-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Portfolio</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </h1>
          <p className="text-2xl text-gray-300 tracking-wide mb-2">Krina Khunt • Creative Developer</p>
          <p className="text-gray-400 max-w-lg mx-auto">Crafting immersive digital experiences through code and design</p>
        </header>
      
  <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Showcase */}
          <div className="relative">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 mx-auto perspective-1000 transform rotate-y-12 rotate-x-12">
              {/* Glowing base */}
              <div className="absolute -bottom-10 w-64 h-6 mx-auto inset-x-0 bg-blue-500 rounded-full blur-xl opacity-30"></div>
              
              <div 
                className="relative w-full h-full transform-style-3d transition-transform duration-1000"
                style={{
                  transform: `rotateY(${activeProject * 120}deg)`
                }}
              >
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 w-full h-full rounded-2xl p-6 shadow-2xl backdrop-blur-sm backface-hidden transform-style-3d overflow-hidden border border-white/10 transition-all duration-500`}
                    style={{
                      transform: `rotateY(${index * 120}deg) translateZ(200px)`,
                      background: `linear-gradient(135deg, ${index === activeProject ? 'rgba(37, 99, 235, 0.2)' : 'rgba(15, 23, 42, 0.3)'} 0%, ${index === activeProject ? 'rgba(124, 58, 237, 0.2)' : 'rgba(15, 23, 42, 0.3)'} 100%)`,
                      boxShadow: index === activeProject ? '0 0 30px rgba(37, 99, 235, 0.3)' : 'none'
                    }}
                  >
                    <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${project.color}`}></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                        <span className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center text-xs">0{index + 1}</span>
                      </div>
                      <p className="text-gray-300 mb-6 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 items-center">
              <button 
                onClick={toggleRotation}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isRotating ? 'bg-indigo-600 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                {isRotating ? "Pause" : "Auto-Rotate"}
              </button>
              <div className="flex gap-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeProject === index ? 'bg-indigo-500 scale-125' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        
          {/* About Section */}
          <section className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-lg"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">About Me</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a creative developer passionate about building immersive digital experiences that blend 
                technology with thoughtful design. With expertise in interactive 3D websites, I transform 
                ideas into engaging web applications.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Tech Expertise</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">React & Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Three.js & WebGL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Node.js & GraphQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">WebXR & AR/VR</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">GSAP & Framer Motion</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Contact Me
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-all duration-300"
                >
                  All Projects
                </a>
              </div>
            </div>
          </section>
        </div>
        
        {/* Contact Section */}
        <section id="contact" className="mt-24 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Let's Connect</h2>
          <p className="text-gray-400 mb-8">Interested in working together? Reach out through any of these platforms.</p>
          
          <div className="flex justify-center gap-6">
              {[
                { name: 'GitHub', url: 'https://github.com/krinakhunt12' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krina-khunt-232732267' },
                { name: 'Twitter', url: '#' },
                { name: 'Email', url: 'mailto:krinakhunt12@gmail.com' }
              ].map((p, index) => (
                <a 
                  key={index}
                  href={p.url} 
                  target={p.url.startsWith('http') ? '_blank' : undefined} 
                  rel={p.url.startsWith('http') ? 'noopener noreferrer' : undefined} 
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30 blur group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gray-900 px-6 py-3 rounded-lg flex items-center gap-2 border border-white/10 group-hover:border-white/30 transition duration-300">
                    <span className="text-gray-200 group-hover:text-white transition duration-300">{p.name}</span>
                  </div>
                </a>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BeautifulPortfolio;