import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg shadow-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                KK
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="font-bold text-lg text-[color:var(--color-heading)] block">Krina Khunt</span>
              <span className="text-xs text-[color:var(--color-muted)] hidden sm:block">Frontend Developer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <a 
              href="#projects" 
              className="nav-link-animated px-5 py-2.5 rounded-xl text-sm font-semibold text-[color:var(--color-heading)] relative group overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Projects</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="nav-link-bg absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
              <span className="nav-link-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
            </a>
            <a 
              href="#about" 
              className="nav-link-animated px-5 py-2.5 rounded-xl text-sm font-semibold text-[color:var(--color-heading)] relative group overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>About</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="nav-link-bg absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
              <span className="nav-link-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
            </a>
            <a 
              href="#contact" 
              className="nav-link-animated px-5 py-2.5 rounded-xl text-sm font-semibold text-[color:var(--color-heading)] relative group overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Contact</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="nav-link-bg absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
              <span className="nav-link-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            aria-label="Toggle menu" 
            onClick={() => setOpen(!open)} 
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-[color:var(--color-heading)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2 pt-4 fade-in-scale">
            <div className="flex flex-col gap-2">
              <a 
                href="#projects" 
                onClick={() => setOpen(false)} 
                className="px-4 py-3 rounded-lg text-sm font-medium text-[color:var(--color-heading)] hover:bg-[color:var(--color-accent)]/5 hover:text-[color:var(--color-accent)] transition-all duration-200"
              >
                Projects
              </a>
              <a 
                href="#about" 
                onClick={() => setOpen(false)} 
                className="px-4 py-3 rounded-lg text-sm font-medium text-[color:var(--color-heading)] hover:bg-[color:var(--color-accent)]/5 hover:text-[color:var(--color-accent)] transition-all duration-200"
              >
                About
              </a>
              <a 
                href="#contact" 
                onClick={() => setOpen(false)} 
                className="px-4 py-3 rounded-lg text-sm font-medium text-[color:var(--color-heading)] hover:bg-[color:var(--color-accent)]/5 hover:text-[color:var(--color-accent)] transition-all duration-200"
              >
                Contact
              </a>
              <div className="h-px bg-gray-200 my-2"></div>
              <a 
                href="https://github.com/krinakhunt12" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-3 rounded-lg text-sm font-medium text-[color:var(--color-heading)] hover:bg-[color:var(--color-accent)]/5 hover:text-[color:var(--color-accent)] transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.67.42.36.8 1.08.8 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56C20.71 21.41 24 17.09 24 12c0-6.27-5.23-11.5-12-11.5z"/>
                </svg>
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/krina-khunt-232732267" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-3 rounded-lg text-sm font-medium text-[color:var(--color-heading)] hover:bg-[color:var(--color-accent)]/5 hover:text-[color:var(--color-accent)] transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.78v1.61h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.11V21H17v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-1.99 1.35-1.99 2.75V21H9z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
