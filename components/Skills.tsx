'use client'

import { Briefcase, Code, Award, Globe } from 'lucide-react'

const Skills = () => {
  const skillGroups = [
    {
      icon: Briefcase,
      title: 'Business & Strategy',
      items: ['Digital Transformation', 'Business Operations', 'Campaign Coordination', 'Partnership Management', 'Event Management'],
    },
    {
      icon: Code,
      title: 'Technology & Tools',
      items: ['AI Tools for Business', 'Excel & Data Analysis', 'Social Media Management', 'Canva & Content Design', '3D Design (SketchUp)'],
    },
    {
      icon: Award,
      title: 'Certifications',
      items: ['Google Digital Marketing & E-commerce Professional Certificate', 'Generative AI: Introduction and Applications (IBM)', 'Data Analysis and Visualization with Power BI (Microsoft)', 'Introduction to Data Analytics (Meta)', 'The Power of Statistics (Google)', 'Social Media Content and Strategy (Adobe)', 'Visual Elements of User Interface Design (CalArts)', 'Collaborate Effectively for Professional Success (IBM)'],
    },
    {
      icon: Globe,
      title: 'Languages',
      items: ['English (Fluent)', 'French (Fluent)', 'Arabic (Native)'],
    },
  ]

  return (
    <section id="skills" className="section">
      <div className="container-max">
        <div className="space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-text">Skills & Certifications</h2>

          <div className="space-y-12 max-w-4xl">
            {skillGroups.map((group, index) => {
              const Icon = group.icon
              return (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon size={24} className="text-accent" />
                    <h3 className="text-xl font-semibold text-text">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-4 py-2 bg-text/5 border border-text/10 rounded-full text-sm font-light text-text/80 hover:bg-text/10 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
