import React from 'react'
import useReveal from '../hooks/useReveal'
import ProjectCard from './ProjectCard'

const sampleProjects = [
  {
    title: 'Aksa — Cybersecurity Platform',
    role: 'Frontend Developer',
    description: 'Responsive dashboards and real-time monitoring interfaces for cybersecurity operations, focused on clarity and performance.',
    highlights: [
      'Built responsive dashboards using React and Tailwind CSS for real-time log monitoring',
      'Integrated RESTful APIs to display system health and activity data',
      'Implemented form validation with Formik and Yup for reliable data input'
    ],
    tech: ['React', 'Tailwind', 'REST APIs', 'Formik', 'Yup'],
    image: '/src/assets/project-1.svg',
    isCompanyProject: true
  },
  {
    title: 'Habitat (U.S. Law Firm Project)',
    role: 'Frontend Developer',
    description: 'Attorney and client management interfaces with an emphasis on usability, responsive layouts, and reusable components.',
    highlights: [
      'Developed attorney and client management interfaces using React and React Router',
      'Created reusable UI components and ensured responsive design with Tailwind CSS',
      'Collaborated via Git/GitHub for version control and code reviews'
    ],
    tech: ['React', 'React Router', 'Tailwind'],
    image: '/src/assets/project-2.svg',
    isCompanyProject: true
  },
  {
    title: 'GrandDine Restaurant',
    role: 'Full Stack Developer',
    description: 'A modern restaurant management and ordering system with interactive menus, online ordering, and admin dashboard.',
    highlights: [
      'Developed full-stack restaurant management application using JavaScript and modern web technologies',
      'Implemented interactive menu system with real-time updates',
      'Created responsive design for seamless user experience across all devices'
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'REST APIs'],
    image: '/src/assets/project-3.svg',
    isCompanyProject: false,
    github: 'https://github.com/krinakhunt12/GrandDine_Restaurant'
  },
  {
    title: 'E-Commerce Website',
    role: 'Full Stack Developer',
    description: 'A modern e-commerce platform with product catalog, shopping cart, user authentication, and secure payment integration.',
    highlights: [
      'Developed full-stack e-commerce application with dynamic product management',
      'Implemented shopping cart functionality with real-time updates and state management',
      'Created responsive design with modern UI/UX for seamless shopping experience',
      'Integrated user authentication and secure checkout process'
    ],
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
    image: '/src/assets/project-4.svg',
    isCompanyProject: false,
    github: 'https://github.com/krinakhunt12/22010031000044'
  },
  {
    title: 'Medibot Project',
    role: 'AI/ML Developer',
    description: 'An intelligent medical chatbot application that provides healthcare assistance and medical information using AI and natural language processing.',
    highlights: [
      'Developed AI-powered medical chatbot with natural language understanding',
      'Implemented healthcare information retrieval and symptom analysis',
      'Created user-friendly interface for medical consultations',
      'Integrated machine learning models for accurate medical responses'
    ],
    tech: ['Python', 'Machine Learning', 'NLP', 'AI', 'Flask'],
    image: '/src/assets/project-5.svg',
    isCompanyProject: false,
    github: 'https://github.com/krinakhunt12/Medibot_Project'
  },
  {
    title: 'Healthcare Prediction System',
    role: 'Data Science Developer',
    description: 'Machine learning-based system for predicting diabetic patient outcomes using advanced data analysis techniques.',
    highlights: [
      'Developed predictive models for healthcare data analysis',
      'Implemented machine learning algorithms for patient outcome prediction',
      'Created data visualization dashboards for medical insights'
    ],
    tech: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Analysis'],
    image: '/src/assets/project-5.svg',
    isCompanyProject: false,
    github: 'https://github.com/krinakhunt12/Healthcare-Prediction-on-Diabetic-Patients'
  },
  {
    title: 'Plant Disease Detection',
    role: 'AI/ML Developer',
    description: 'Intelligent system for detecting plant diseases using computer vision and machine learning algorithms.',
    highlights: [
      'Built image classification system for plant disease detection',
      'Implemented deep learning models for accurate disease identification',
      'Created user-friendly interface for farmers and agriculturists'
    ],
    tech: ['Python', 'Jupyter Notebook', 'Deep Learning', 'Computer Vision'],
    image: '/src/assets/project-5.svg',
    isCompanyProject: false,
    github: 'https://github.com/krinakhunt12/Plant_Disease_Detection_System'
  }
]

const Projects = () => {
  const [ref, visible] = useReveal(0.12)

  return (
    <section id="projects" ref={ref} className={`py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[color:var(--color-bg)] to-white ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 ${visible ? 'fade-in-scale' : 'opacity-0'}`} style={{ transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[color:var(--color-heading)] mb-4">Selected Projects</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="hidden sm:block w-16 lg:w-24 accent-line"></div>
            <div className="w-2 h-2 rounded-full bg-[color:var(--color-accent)]"></div>
            <div className="hidden sm:block w-16 lg:w-24 accent-line"></div>
          </div>
          <p className="text-[color:var(--color-muted)] text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in front-end development
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:gap-14">
          {sampleProjects.map((p, i) => (
            <div key={p.title} className={`w-full ${visible ? 'fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: `${(i + 1) * 150}ms` }}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
