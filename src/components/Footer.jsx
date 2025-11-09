import React from 'react'
import useReveal from '../hooks/useReveal'

const Footer = () => {
  const year = new Date().getFullYear()
  const [ref, visible] = useReveal(0.12)

  return (
    <footer ref={ref} className={`relative py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 border-t-2 border-gray-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                KK
              </div>
              <div>
                <div className="footer-name-stylized text-2xl font-bold bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] bg-clip-text text-transparent" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em' }}>
                  Krina Khunt
                </div>
                <div className="text-xs text-[color:var(--color-muted)] mt-1">Frontend Developer</div>
              </div>
            </div>
            <p className="text-sm text-[color:var(--color-muted)] leading-relaxed max-w-xs mx-auto md:mx-0">
              Building accessible, high-performance web applications with modern UI and thoughtful interactions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[color:var(--color-heading)] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] transition-colors duration-200 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] transition-colors duration-200 hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] transition-colors duration-200 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] transition-colors duration-200 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[color:var(--color-heading)] mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <a 
                href="mailto:krinakhunt12@gmail.com" 
                className="flex items-center justify-center md:justify-start gap-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                krinakhunt12@gmail.com
              </a>
              
              <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                <a 
                  href="https://github.com/krinakhunt12" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[color:var(--color-heading)] hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)]/5 hover:scale-110 hover:shadow-md transition-all duration-300"
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
                  className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[color:var(--color-heading)] hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)]/5 hover:scale-110 hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.78v1.61h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.11V21H17v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-1.99 1.35-1.99 2.75V21H9z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[color:var(--color-muted)] text-center sm:text-left">
            © {year} <span className="footer-name-stylized font-semibold bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] bg-clip-text text-transparent">Krina Khunt</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-[color:var(--color-muted)]">
            <span>Made with</span>
            <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>using React</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
