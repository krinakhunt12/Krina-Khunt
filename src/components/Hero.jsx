import React from 'react'
import useReveal from '../hooks/useReveal'
import downloadResume from '../utils/downloadResume'
import girlImg from '../assets/Girl.jpg'
import profileImg from '../assets/profile.svg'

const Hero = () => {
  const [ref, visible] = useReveal(0.15)

  return (
    <section id="home" ref={ref} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[color:var(--color-bg)] via-white to-blue-50/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:gap-16 md:grid-cols-2 items-center ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}>
        <div className="text-center md:text-left z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 fade-up delay-1">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 hero-heading">
            <span className="hero-greeting-animate block mb-2" style={{ animationDelay: '0.1s' }}>
              Hi, I'm
            </span>
            <span className="hero-name-animate block mb-3" style={{ animationDelay: '0.3s' }}>
              Krina Khunt
            </span>
            <span className="hero-text-animate block mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] bg-clip-text text-transparent animate-gradient-shift" style={{ animationDelay: '0.5s' }}>
              Front-end Engineer & Creative Developer
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-[color:var(--color-muted)] mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed fade-up delay-3">
            I design and build accessible, high-performance web applications that increase user engagement and business outcomes. My work combines modern UI, thoughtful interactions, and measurable impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center sm:items-start fade-up delay-3">
            <a 
              href="#projects" 
              className="group px-8 py-4 rounded-xl bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] text-white font-semibold hover:shadow-xl hover:shadow-[color:var(--color-primary)]/30 transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
            >
              View Projects
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-xl bg-white border-2 border-gray-200 text-[color:var(--color-primary)] font-semibold hover:border-[color:var(--color-accent)] hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Contact Me
            </a>
            <button 
              onClick={() => downloadResume()} 
              className="px-8 py-4 rounded-xl cursor-pointer border-2 border-gray-300 text-[color:var(--color-primary)] bg-white/50 backdrop-blur-sm font-semibold hover:bg-white hover:border-[color:var(--color-accent)] hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 fade-up delay-4">
            <span className="text-sm font-medium text-[color:var(--color-muted)]">Connect with me:</span>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/krinakhunt12" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[color:var(--color-heading)] hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)]/5 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.67.42.36.8 1.08.8 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56C20.71 21.41 24 17.09 24 12c0-6.27-5.23-11.5-12-11.5z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/krina-khunt-232732267" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[color:var(--color-heading)] hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)]/5 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.78v1.61h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.11V21H17v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-1.99 1.35-1.99 2.75V21H9z"/>
                </svg>
              </a>
              <a 
                href="mailto:krinakhunt12@gmail.com" 
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[color:var(--color-heading)] hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)]/5 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="flex justify-center md:justify-end relative z-10">
          <div className="relative w-full max-w-[320px] sm:max-w-sm">
            {/* Glow effect */}
            <div className="glow-circle absolute -left-10 -top-12 opacity-60 animate-pulse" aria-hidden="true"></div>
            
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-4 border-[color:var(--color-accent)]/20 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border-2 border-purple-300/30"></div>
            
            {/* Avatar container */}
            <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 rounded-3xl shadow-2xl p-8 flex items-center justify-center avatar-wrap rise-in border-2 border-white/50 backdrop-blur-sm">
              <div className="avatar-ring" aria-hidden="true"></div>
              <div className="relative hero-avatar-container">
                <img 
                  src={girlImg} 
                  alt="Krina Khunt - Front-end Developer" 
                  onError={(e) => { e.currentTarget.src = profileImg }} 
                  className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-full ring-4 ring-white shadow-2xl border-4 border-white relative z-10 hero-avatar-image" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl animate-pulse-slow"></div>
                {/* Floating particles around avatar */}
                <div className="absolute -top-4 -left-4 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-float-particle-1"></div>
                <div className="absolute top-1/4 -right-6 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float-particle-2"></div>
                <div className="absolute -bottom-6 left-1/4 w-2.5 h-2.5 bg-pink-400 rounded-full opacity-60 animate-float-particle-3"></div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border-2 border-gray-100 animate-bounce-slow">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[color:var(--color-heading)]">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
