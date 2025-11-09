import React from 'react'
import useReveal from '../hooks/useReveal'

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Acme Corp',
    date: '2022 — Present',
    location: 'Remote',
    bullets: [
      'Led front-end architecture and component library adoption across multiple products.',
      'Improved UI performance and reduced bundle size, contributing to faster load times.'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Startup',
    date: '2019 — 2022',
    location: 'City, Country',
    bullets: [
      'Built customer-facing features and implemented design system components.',
      'Collaborated with product and design to deliver accessible, responsive UIs.'
    ]
  }
]

const Experience = ({ items = experiences }) => {
  const [ref, visible] = useReveal(0.12)

  return (
    <div ref={ref} className={`mb-6 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}>
      <h3 className="text-2xl font-semibold mb-6">Experience</h3>

      <div className="relative pl-6 md:pl-10">
        {/* vertical line for timeline on md+ */}
        <div className="hidden md:block absolute left-3 top-0 bottom-0 w-0.5 bg-white/6" aria-hidden="true" />

        {items.map((exp, i) => (
          <div key={i} className="relative mb-8 md:mb-10 rise-in" style={{ animationDelay: `${i * 120}ms` }}>
            {/* marker */}
            <div className="absolute -left-4 top-1 md:top-2 w-3 h-3 rounded-full bg-[color:var(--color-accent)] ring-2 ring-white/8" aria-hidden="true" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="md:pr-6">
                <div className="text-lg font-semibold text-[color:var(--color-primary)]">{exp.role}</div>
                <div className="text-sm text-[color:var(--color-muted)]">{exp.company} • {exp.location}</div>

                {exp.bullets && (
                  <ul className="mt-3 text-[color:var(--color-muted)] list-disc ml-5 space-y-2">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-3 md:mt-0 text-sm text-[color:var(--color-muted)] md:text-right">{exp.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
