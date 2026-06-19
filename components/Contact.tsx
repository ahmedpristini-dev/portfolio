'use client'

import { Mail, Phone, Linkedin } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Contact = () => {
  const { ref, isVisible } = useScrollReveal()

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ahmed.louhaishi@gmail.com',
      href: 'mailto:ahmed.louhaishi@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+60 172746224',
      href: 'tel:+60172746224',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ahmed-louhaishi-03a37b222/',
      href: 'https://linkedin.com/in/ahmed-louhaishi-03a37b222/',
    },
  ]

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`section transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container-max">
        <div className="space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-text">Contact</h2>

          <div className="space-y-6 max-w-2xl">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-text/5 transition-colors group"
                >
                  <Icon size={24} className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm font-semibold text-text/60">{method.label}</p>
                    <p className="text-lg text-text group-hover:text-accent transition-colors">{method.value}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
