import React from 'react'
import useReveal from '../hooks/useReveal'
import Skills from './Skills'

const skills = ['React', 'Node.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript']

const About = () => {
  const [ref, visible] = useReveal(0.12)

  return (
    <section id="about" ref={ref} className={`relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[color:var(--color-primary)]/5 via-white to-[color:var(--color-accent)]/5 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700 overflow-hidden`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[color:var(--color-primary)]/10 to-[color:var(--color-accent)]/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[color:var(--color-accent)]/10 to-[color:var(--color-primary)]/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col gap-12 lg:gap-16 items-center">
          {/* Header Section */}
          <div className="w-full max-w-4xl text-center">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] bg-clip-text text-transparent ${visible ? 'fade-in-scale' : 'opacity-0'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              About Me
            </h2>
            <div className={`mb-8 ${visible ? 'fade-in-scale stagger-1' : 'opacity-0'}`}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] text-white rounded-full text-sm font-semibold shadow-lg border border-[color:var(--color-primary)]/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Available
              </span>
            </div>

            <p className={`text-[color:var(--color-heading)] mb-12 leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto font-medium ${visible ? 'fade-in-scale stagger-2' : 'opacity-0'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              I design and build performant, accessible front-end applications. I focus on maintainable UI, improving user experience, and delivering measurable results through close collaboration with product and design teams.
            </p>
          </div>

          {/* Content Grid */}
          <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Core Strengths */}
            <div className={`bg-white rounded-2xl p-8 border-2 border-[color:var(--color-primary)]/10 shadow-lg hover:shadow-xl hover:border-[color:var(--color-accent)]/30 transition-all duration-300 ${visible ? 'fade-in-scale stagger-3' : 'opacity-0'}`}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[color:var(--color-primary)] flex items-center gap-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <div className="w-1.5 h-10 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] rounded-full"></div>
                Core Strengths
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[color:var(--color-primary)]/5 to-[color:var(--color-accent)]/5 rounded-xl border border-[color:var(--color-primary)]/10 hover:border-[color:var(--color-accent)]/30 transition-all duration-300">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] flex-shrink-0"></div>
                  <p className="text-[color:var(--color-heading)] leading-relaxed font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Component-driven interfaces with emphasis on accessibility and performance.</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[color:var(--color-primary)]/5 to-[color:var(--color-accent)]/5 rounded-xl border border-[color:var(--color-primary)]/10 hover:border-[color:var(--color-accent)]/30 transition-all duration-300">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] flex-shrink-0"></div>
                  <p className="text-[color:var(--color-heading)] leading-relaxed font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Design system implementation and reusable component libraries.</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[color:var(--color-primary)]/5 to-[color:var(--color-accent)]/5 rounded-xl border border-[color:var(--color-primary)]/10 hover:border-[color:var(--color-accent)]/30 transition-all duration-300">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] flex-shrink-0"></div>
                  <p className="text-[color:var(--color-heading)] leading-relaxed font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Front-end performance optimization and delivery of critical assets.</p>
                </div>
              </div>
            </div>

            {/* Selected Highlights */}
            <div className={`bg-white rounded-2xl p-8 border-2 border-[color:var(--color-primary)]/10 shadow-lg hover:shadow-xl hover:border-[color:var(--color-accent)]/30 transition-all duration-300 ${visible ? 'fade-in-scale stagger-4' : 'opacity-0'}`}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[color:var(--color-primary)] flex items-center gap-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <div className="w-1.5 h-10 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] rounded-full"></div>
                Selected Highlights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-4 bg-gradient-to-br from-[color:var(--color-primary)]/5 to-[color:var(--color-accent)]/5 rounded-xl border border-[color:var(--color-primary)]/10 hover:border-[color:var(--color-accent)]/30 transition-all duration-300">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] flex-shrink-0"></div>
                  <p className="text-[color:var(--color-heading)] leading-relaxed text-sm font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Delivered production web applications from MVP to stable releases, collaborating closely with product and design teams.</p>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gradient-to-br from-[color:var(--color-primary)]/5 to-[color:var(--color-accent)]/5 rounded-xl border border-[color:var(--color-primary)]/10 hover:border-[color:var(--color-accent)]/30 transition-all duration-300">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] flex-shrink-0"></div>
                  <p className="text-[color:var(--color-heading)] leading-relaxed text-sm font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Improved UI performance and accessibility through targeted optimizations and semantic markup.</p>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gradient-to-br from-[color:var(--color-primary)]/5 to-[color:var(--color-accent)]/5 rounded-xl border border-[color:var(--color-primary)]/10 hover:border-[color:var(--color-accent)]/30 transition-all duration-300">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] flex-shrink-0"></div>
                  <p className="text-[color:var(--color-heading)] leading-relaxed text-sm font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Built reusable component libraries and design system primitives to scale cross-team development.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* How I Work */}
          <div className={`w-full max-w-4xl bg-gradient-to-br from-[color:var(--color-primary)]/10 via-[color:var(--color-accent)]/5 to-white rounded-2xl p-8 lg:p-12 border-2 border-[color:var(--color-primary)]/20 shadow-xl ${visible ? 'fade-in-scale stagger-5' : 'opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[color:var(--color-primary)] text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              How I Work
            </h3>
            <p className="text-[color:var(--color-heading)] text-lg leading-relaxed text-center max-w-3xl mx-auto font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              I prefer small, iterative releases that prioritize user feedback. I write accessible, testable components and favor pragmatic solutions that balance speed and long-term maintainability. I communicate decisions clearly, document trade-offs, and push for measurable outcomes.
            </p>
          </div>

          {/* Skills Section */}
          <div className="w-full flex justify-center mt-4">
            <div className={`w-full max-w-5xl ${visible ? 'fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
              <Skills skills={skills} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
