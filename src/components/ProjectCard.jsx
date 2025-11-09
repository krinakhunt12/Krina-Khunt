import React from 'react'

const ProjectCard = ({ project, index = 0 }) => {
  const delay = index * 120
  const isOdd = index % 2 === 1

  return (
    <article
      className={`card-surface rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 flex flex-col md:flex-row ${isOdd ? 'md:flex-row-reverse' : ''} items-stretch rise-in group slide-${isOdd ? 'right' : 'left'} bg-white`}
      aria-labelledby={`proj-${project.title}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative md:w-1/2 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-[color:var(--color-accent)]/5 group-hover:from-blue-100/50 group-hover:via-[color:var(--color-primary)]/10 group-hover:to-[color:var(--color-accent)]/10 transition-all duration-500">
        {/* Beautiful project illustration container */}
        <div className="relative w-full h-64 md:h-full min-h-[300px] flex items-center justify-center p-8">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] rounded-full blur-3xl"></div>
          </div>
          
          {/* Project illustration */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {project.image && project.image.includes('.svg') ? (
              <div className="project-illustration-container w-full h-full flex items-center justify-center">
                <div className="relative project-icon-wrapper">
                  {/* Main icon container */}
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)]/10 to-[color:var(--color-accent)]/10 border-2 border-[color:var(--color-accent)]/20 flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 backdrop-blur-sm">
                    <div className="text-6xl md:text-7xl">
                      {project.title.includes('Restaurant') && '🍽️'}
                      {project.title.includes('E-Commerce') && '🛒'}
                      {project.title.includes('Medibot') && '🤖'}
                      {project.title.includes('Healthcare') && '🏥'}
                      {project.title.includes('Plant') && '🌱'}
                      {project.title.includes('Aksa') && '🔒'}
                      {project.title.includes('Habitat') && '⚖️'}
                      {!project.title.includes('Restaurant') && !project.title.includes('E-Commerce') && !project.title.includes('Medibot') && !project.title.includes('Healthcare') && !project.title.includes('Plant') && !project.title.includes('Aksa') && !project.title.includes('Habitat') && '💼'}
                    </div>
                  </div>
                  {/* Floating decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] rounded-full opacity-60 blur-sm animate-float-decorative-1"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] rounded-full opacity-60 blur-sm animate-float-decorative-2"></div>
                  <div className="absolute top-1/2 -left-6 w-4 h-4 bg-[color:var(--color-accent)] rounded-full opacity-40 animate-pulse"></div>
                </div>
              </div>
            ) : (
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="w-full h-full object-contain block transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" 
              />
            )}
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-accent)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
          
          {/* Animated border on hover */}
          <div className="absolute inset-0 border-2 border-[color:var(--color-accent)]/0 group-hover:border-[color:var(--color-accent)]/30 rounded-lg transition-all duration-500 z-10"></div>
        </div>
      </div>

  <div className="p-8 sm:p-10 flex-1 md:w-1/2 flex flex-col justify-between bg-white text-left">
        <div>
          <div className="flex items-start justify-between mb-3">
            <h3 id={`proj-${project.title}`} className="text-2xl sm:text-3xl font-bold text-[color:var(--color-heading)] leading-tight pr-4">{project.title}</h3>
          </div>

          {project.role && (
            <div className="inline-block px-3 py-1 bg-blue-50 text-[color:var(--color-primary)] rounded-full text-xs font-semibold mb-4 border border-blue-100">
              {project.role}
            </div>
          )}
          {project.year && (
            <div className="text-xs text-[color:var(--color-muted)] mb-3 font-medium">{project.year}</div>
          )}

          {project.impact && (
            <div className="text-sm font-medium text-[color:var(--color-primary)] mb-4 p-2 bg-green-50 rounded-lg border border-green-100">
              Impact: {project.impact}
            </div>
          )}

          <p className="text-left text-[color:var(--color-muted)] text-base leading-relaxed mb-6">{project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6 space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 text-left">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)] flex-shrink-0"></div>
                  <p className="text-[color:var(--color-muted)] text-sm leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, idx) => (
              <span 
                key={t} 
                className="text-xs px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-full text-[color:var(--color-primary)] font-medium hover:from-[color:var(--color-accent)]/10 hover:to-[color:var(--color-accent)]/5 hover:border-[color:var(--color-accent)]/30 hover:scale-105 transition-all duration-300 cursor-default" 
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {t}
              </span>
            ))}
          </div>
          
          {!project.isCompanyProject && project.github && (
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 sm:flex-initial text-center px-6 py-3 rounded-lg bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] text-white text-sm font-semibold hover:from-[color:var(--color-primary)]/90 hover:to-[color:var(--color-accent)]/90 hover:shadow-lg hover-lift transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.67.42.36.8 1.08.8 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56C20.71 21.41 24 17.09 24 12c0-6.27-5.23-11.5-12-11.5z"/>
                </svg>
                View code on GitHub
              </a>
            </div>
          )}
          {project.isCompanyProject && (
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm text-blue-700 font-medium">Company Project - Code not available</span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
