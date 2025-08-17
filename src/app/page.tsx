'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Custom cursor component
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: `${mousePosition.x - 10}px`,
          top: `${mousePosition.y - 10}px`,
        }}
      />
    </>
  )
}

// Navigation component
function Navigation() {
  const [language, setLanguage] = useState('EN')

  return (
    <>
      {/* Language toggle */}
      <div className="lang-toggle">
        <button
          onClick={() => setLanguage('EN')}
          className={language === 'EN' ? 'active' : ''}
        >
          EN
        </button>
        <span className="mx-1 text-muted-foreground">/</span>
        <button
          onClick={() => setLanguage('SV')}
          className={language === 'SV' ? 'active' : ''}
        >
          SV
        </button>
      </div>

      {/* Main navigation */}
      <nav className="nav-minimal">
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </>
  )
}

// Project data
interface Project {
  id: string
  title: string
  concept: string
  focus: string
  className: string
}

const projects: Project[] = [
  {
    id: 'agency',
    title: 'Marketing Agency',
    concept: 'Reinventing brand narratives through AI and creativity.',
    focus: 'Authentic storytelling over traditional advertising.',
    className: 'project-agency'
  },
  {
    id: 'influencer',
    title: 'Influencer',
    concept: 'Beyond filters – authentic connection and positive change.',
    focus: 'Education, inspiration, and responsible influence.',
    className: 'project-influencer'
  },
  {
    id: 'football',
    title: 'Football Agent',
    concept: 'Holistic player development beyond contracts.',
    focus: 'Mental well-being and long-term career sustainability.',
    className: 'project-football'
  },
  {
    id: 'guldklockan',
    title: '50 years old, new to AI and looking for jobs',
    concept: 'Turning experience into opportunity with AI tools and strategies.',
    focus: 'Challenging ageism and discovering new possibilities in the digital age.',
    className: 'project-unemployed'
  },
  {
    id: 'probono',
    title: 'ProBonoBuddy',
    concept: 'Platform connecting professionals with non-profits.',
    focus: 'Leveraging expertise for social impact.',
    className: 'project-probono'
  }
]

// Project tile component
function ProjectTile({ project, index }: { project: Project, index: number }) {
  const [showDetails, setShowDetails] = useState(false)

  const handleClick = () => {
    if (project.id === 'guldklockan') {
      setShowDetails(!showDetails)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`project-tile ${project.className} p-6 md:p-8 min-h-[320px] md:h-80 cursor-pointer`}
      onClick={handleClick}
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
            {showDetails && project.id === 'guldklockan' ? 'Guldklockan 2.0 📖' : project.title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {showDetails && project.id === 'guldklockan' 
              ? 'Guldklockan 2.0 är den första svenska guiden som hjälper dig som är över 50 att ta kontroll över din framtid med hjälp av AI. Oavsett om du vill skriva, skapa digitala produkter, starta en plattform eller använda AI som din personliga assistent – här får du praktiska steg för steg-instruktioner, smarta strategier och konkreta verktyg som fungerar i verkligheten.'
              : project.concept
            }
          </p>
        </div>
        <div>
          <p className="text-primary text-xs md:text-sm font-mono uppercase tracking-wider leading-relaxed">
            {showDetails && project.id === 'guldklockan'
              ? 'Den här boken är skriven på svenska, med fokus på tydlighet och enkelhet, utan krånglig teknisk jargong. Med exempel och övningar anpassade för dig som vill utvecklas i din egen takt och på dina villkor. Guldklockan 2.0 visar att det aldrig är för sent att börja något nytt. AI är inte bara för experter – det är verktyget som kan frigöra din erfarenhet och göra dig starkare i en digital tidsålder. 👉 Läs mer och ladda ner boken på Gumroad'
              : project.focus
            }
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navigation />

      {/* Hero Section */}
      <section className="section-minimal container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left side - Main content */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-massive gradient-text mb-6 md:mb-8 whitespace-nowrap">
                CHRISTOFFER
              </h1>
              <h2 className="text-huge text-foreground/90 mb-8 md:mb-12 accent-line whitespace-nowrap">
                ANKARSTRAND
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl"
            >
              <p className="text-lg md:text-xl text-foreground/80 mb-8 md:mb-12 leading-relaxed">
                Here&apos;s where I publish ideas, examples, thoughts, and projects or collabs I&apos;ve done.
                I make stuff all the time but usually forget to show people — this site is me trying to fix that.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-8"
            >
              <a
                href="#projects"
                className="group flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <span className="text-base md:text-lg font-mono uppercase tracking-wider">
                  Explore Work
                </span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Right side - Visual element */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="floating-element"
            >
              <div className="diagonal-split bg-primary/10 h-64 md:h-96">
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-minimal container-edge">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left side - Section intro */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-huge text-foreground mb-6 md:mb-8 accent-line">
                  If I was
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Conceptual projects and real-world initiatives that showcase 
                  creative thinking and strategic execution.
                </p>
              </motion.div>
            </div>

            {/* Right side - Project grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {projects.map((project, index) => (
                  <ProjectTile key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-minimal container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-huge mb-6 md:mb-8 accent-line">
                About
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 mb-6 md:mb-8 leading-relaxed">
                I think of stuff, and since I&apos;ve been learning AI technology I&apos;ve also started to build stuff!
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Sometimes full projects, sometimes more of a presentation of an idea.
              </p>
            </motion.div>
          </div>

          <div className="reverse-diagonal bg-primary/5 h-64 md:h-96 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4 md:space-y-6"
            >
              <div className="text-primary font-mono text-sm md:text-base uppercase tracking-wider">
                Strategy
              </div>
              <div className="text-primary font-mono text-sm md:text-base uppercase tracking-wider">
                Creativity
              </div>
              <div className="text-primary font-mono text-sm md:text-base uppercase tracking-wider">
                Technology
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-minimal container-edge">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-huge mb-6 md:mb-8">
              Let&apos;s Connect
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">
              Get in touch if you&apos;d like to collaborate or just say hi.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a
                href="mailto:hello@christoffer.com"
                className="inline-block px-4 py-2 md:px-6 md:py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 font-mono text-sm md:text-base uppercase tracking-wider"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/christoffer"
                className="inline-block px-4 py-2 md:px-6 md:py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 font-mono text-sm md:text-base uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/christoffer"
                className="inline-block px-4 py-2 md:px-6 md:py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 font-mono text-sm md:text-base uppercase tracking-wider"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <p className="text-xs md:text-sm text-muted-foreground font-mono">
            © 2024 Christoffer Ankarstrand
          </p>
        </motion.div>
      </section>
    </div>
  )
}



