'use client'

import { Bot, Mic, Palette, Trophy } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Projects = () => {
  const { ref, isVisible } = useScrollReveal()

  const projects = [
    {
      icon: Bot,
      title: 'AIVA, AI Social Robot',
      description: 'Co-built an interactive social robot featuring conversational AI, computer vision through a Raspberry Pi HQ Camera, and an animated dual screen display. AIVA was deployed as a campus guide and brand mascot at Pristini School of AI, with a multi-platform social media presence built around it. Presented at university events and public fairs, where it drew strong crowd interest and put a real face on what AI can do.',
    },
    {
      icon: Mic,
      title: 'ORATO, AI Educator Necklace',
      description: 'Designed an AI wearable device for educators that records lectures, generates transcriptions using OpenAI Whisper, and produces automated summaries and quizzes via GPT-4. The project addressed real operational pain points in classroom delivery, combining hardware design with AI product thinking.',
    },
    {
      icon: Palette,
      title: 'Tunisian Artists, Digital Platform',
      description: 'Built and managed a digital platform supporting emerging Tunisian artists, overseeing content strategy, monetization, and platform growth. Coordinated sponsorship partnerships and branded collaborations between artists and commercial partners. Grew the platform\'s audience through a consistent social media strategy and influencer coordination.',
    },
    {
      icon: Trophy,
      title: 'Sousse Chess Tournament, Event Coordination',
      description: 'Supported event operations, logistics, and marketing coordination for a national level chess tournament. Assisted in securing sponsorships and managing relationships with partners and participants. Coordinated promotional activities and handled communications with stakeholders and attendees.',
    },
  ]

  return (
    <section 
      ref={ref}
      id="projects" 
      className={`section transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container-max">
        <div className="space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-text">Projects</h2>

          <div className="space-y-8 max-w-3xl">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <div key={index} className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon size={24} className="text-accent flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold text-text">{project.title}</h3>
                  </div>
                  <p className="text-lg text-text/80 leading-relaxed font-light ml-10">
                    {project.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
