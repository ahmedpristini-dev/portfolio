'use client'

import { GraduationCap, Briefcase } from 'lucide-react'

const Experience = () => {
  const entries = [
    {
      type: 'education',
      years: '2025 to Present',
      title: 'MBA in Digital Leadership',
      organization: 'Asia Pacific University (APU), Malaysia',
    },
    {
      type: 'education',
      years: '2022 to 2025',
      title: 'BSc in Software Engineering Applied in AI',
      organization: 'Pristini School of AI, Tunisia',
    },
    {
      type: 'work',
      years: '2017 to 2026',
      title: 'Founder & Digital Operations Manager',
      organization: 'Tunisian Artists',
    },
    {
      type: 'work',
      years: '2023 to 2024',
      title: 'Marketing & Operations Support Executive',
      organization: 'Pristini School of AI',
    },
    {
      type: 'work',
      years: '2022 to 2025',
      title: 'Marketing & Business Support Assistant',
      organization: 'Milky Way Coffee Shop',
    },
    {
      type: 'work',
      years: '2021 and 2022',
      title: 'Event & Business Support Executive',
      organization: 'Sousse Chess Tournament',
    },
    {
      type: 'work',
      years: '2020 to 2021',
      title: 'Operations Team Manager',
      organization: 'Way Connect (France, Remote)',
    },
  ]

  return (
    <section id="experience" className="section">
      <div className="container-max">
        <div className="space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-text">Experience</h2>

          <div className="relative max-w-2xl">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-text/10" />

            {/* Timeline entries */}
            <div className="space-y-8">
              {entries.map((entry, index) => {
                const Icon = entry.type === 'education' ? GraduationCap : Briefcase
                return (
                  <div key={index} className="flex gap-6 sm:gap-8">
                    {/* Marker */}
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-background border-2 border-accent flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-accent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1 pb-4">
                      <p className="text-sm font-semibold text-accent mb-1">{entry.years}</p>
                      <h3 className="text-lg font-semibold text-text">{entry.title}</h3>
                      <p className="text-text/70 font-light">{entry.organization}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
