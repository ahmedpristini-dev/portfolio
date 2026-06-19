'use client'

import { Globe } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const About = () => {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section 
      ref={ref}
      id="about" 
      className={`section transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container-max">
        <div className="space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-text">About</h2>
          
          <div className="space-y-8 max-w-3xl">
            {/* Education */}
            <p className="text-lg text-text/80 leading-relaxed font-light">
              I'm an MBA candidate in Digital Leadership at Asia Pacific University (APU) in Malaysia, with a Bachelor's degree in AI-applied Software Engineering from Pristini School of AI in Tunisia.
            </p>

            {/* Background */}
            <div className="space-y-6">
              <p className="text-lg text-text/80 leading-relaxed font-light">
                My background spans operations, marketing, and AI product development. I managed a 15 person remote team at Way Connect, processing digital prescriptions for pharmacies in France during COVID-19. I founded and ran Tunisian Artists, a digital platform supporting emerging Tunisian artists, where I handled content strategy, monetization, and sponsorship partnerships. I also supported marketing and operations at Pristini School of AI, coordinated event operations for the Sousse Chess Tournament, and worked in marketing support at Milky Way Coffee Shop.
              </p>

              <p className="text-lg text-text/80 leading-relaxed font-light">
                I co-developed AIVA, an AI social robot, and designed ORATO, an AI wearable for educators.
              </p>
            </div>

            {/* Interests and Languages */}
            <div className="space-y-4 pt-4">
              <p className="text-lg text-text/80 leading-relaxed font-light">
                Outside of work, I coach and compete in chess, perform magic and illusion shows, and sail.
              </p>
              
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-text/60" />
                <span className="text-lg text-text/80 font-light">
                  Fluent in English and French, native Arabic speaker.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
