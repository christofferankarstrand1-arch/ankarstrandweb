'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sun, Moon } from 'lucide-react'

// Language content
const content = {
  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      subtitle: "Here's where I publish ideas, examples, thoughts, and projects or collabs I've done. I make stuff all the time but usually forget to show people — this site is me trying to fix that.",
      exploreWork: 'Explore Work'
    },
    projects: {
      title: 'If I was',
      subtitle: 'Conceptual projects and real-world initiatives that showcase creative thinking and strategic execution.',
      items: [
        {
          id: 'agency',
          title: 'Marketing Agency',
          concept: 'Reinventing brand narratives through AI and creativity.',
          focus: 'Authentic storytelling over traditional advertising.'
        },
        {
          id: 'influencer',
          title: 'Influencer',
          concept: 'Beyond filters – authentic connection and positive change.',
          focus: 'Education, inspiration, and responsible influence.'
        },
        {
          id: 'football',
          title: 'Football Agent',
          concept: 'Holistic player development beyond contracts.',
          focus: 'Mental well-being and long-term career sustainability.'
        },
        {
          id: 'guldklockan',
          title: '50 years old, new to AI and looking for jobs',
          concept: 'Turning experience into opportunity with AI tools and strategies.',
          focus: 'Challenging ageism and discovering new possibilities in the digital age.',
          expandedTitle: 'Guldklockan 2.0 📖',
          expandedConcept: 'Guldklockan 2.0 is the first Swedish guide that helps you who are over 50 take control of your future with the help of AI. Whether you want to write, create digital products, start a platform or use AI as your personal assistant – here you get practical step-by-step instructions, smart strategies and concrete tools that work in reality.',
          expandedFocus: 'This book is written in Swedish, with a focus on clarity and simplicity, without complicated technical jargon. With examples and exercises adapted for you who want to develop at your own pace and on your own terms. Guldklockan 2.0 shows that it is never too late to start something new. AI is not just for experts – it is the tool that can free your experience and make you stronger in a digital age. 👉 Read more and download the book on Gumroad'
        },
        {
          id: 'probono',
          title: 'ProBonoBuddy',
          concept: 'Platform connecting professionals with non-profits.',
          focus: 'Leveraging expertise for social impact.'
        }
      ]
    },
    about: {
      title: 'About',
      text1: "I think of stuff, and since I've been learning AI technology I've also started to build stuff!",
      text2: 'Sometimes full projects, sometimes more of a presentation of an idea.',
      skills: ['Strategy', 'Creativity', 'Technology']
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Get in touch if you'd like to collaborate or just say hi.",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: {
      copyright: '© 2024 Christoffer Ankarstrand'
    }
  },
  sv: {
    nav: {
      projects: 'Projekt',
      about: 'Om mig',
      contact: 'Kontakt'
    },
    hero: {
      subtitle: 'Här publicerar jag idéer, exempel, tankar och projekt eller samarbeten jag gjort. Jag skapar grejer hela tiden men glömmer oftast att visa folk — den här sajten är mitt försök att fixa det.',
      exploreWork: 'Utforska Arbete'
    },
    projects: {
      title: 'Om jag var',
      subtitle: 'Konceptuella projekt och verkliga initiativ som visar kreativt tänkande och strategisk genomförande.',
      items: [
        {
          id: 'agency',
          title: 'Marknadsföringsbyrå',
          concept: 'Återuppfinner varumärkesberättelser genom AI och kreativitet.',
          focus: 'Autentiskt berättande över traditionell reklam.'
        },
        {
          id: 'influencer',
          title: 'Influencer',
          concept: 'Bortom filter – autentisk koppling och positiv förändring.',
          focus: 'Utbildning, inspiration och ansvarsfull påverkan.'
        },
        {
          id: 'football',
          title: 'Fotbollsagent',
          concept: 'Holistisk spelarutveckling bortom kontrakt.',
          focus: 'Mentalt välbefinnande och långsiktig karriärhållbarhet.'
        },
        {
          id: 'guldklockan',
          title: '50 år gammal, ny med AI och söker jobb',
          concept: 'Förvandla erfarenhet till möjlighet med AI-verktyg och strategier.',
          focus: 'Utmana åldersdiskriminering och upptäcka nya möjligheter i den digitala tidsåldern.',
          expandedTitle: 'Guldklockan 2.0 📖',
          expandedConcept: 'Guldklockan 2.0 är den första svenska guiden som hjälper dig som är över 50 att ta kontroll över din framtid med hjälp av AI. Oavsett om du vill skriva, skapa digitala produkter, starta en plattform eller använda AI som din personliga assistent – här får du praktiska steg för steg-instruktioner, smarta strategier och konkreta verktyg som fungerar i verkligheten.',
          expandedFocus: 'Den här boken är skriven på svenska, med fokus på tydlighet och enkelhet, utan krånglig teknisk jargong. Med exempel och övningar anpassade för dig som vill utvecklas i din egen takt och på dina villkor. Guldklockan 2.0 visar att det aldrig är för sent att börja något nytt. AI är inte bara för experter – det är verktyget som kan frigöra din erfarenhet och göra dig starkare i en digital tidsålder. 👉 Läs mer och ladda ner boken på Gumroad'
        },
        {
          id: 'probono',
          title: 'ProBonoBuddy',
          concept: 'Plattform som kopplar samman yrkesverksamma med ideella organisationer.',
          focus: 'Utnyttja expertis för social påverkan.'
        }
      ]
    },
    about: {
      title: 'Om mig',
      text1: 'Jag tänker på grejer, och sedan jag börjat lära mig AI-teknik har jag också börjat bygga grejer!',
      text2: 'Ibland fullständiga projekt, ibland mer av en presentation av en idé.',
      skills: ['Strategi', 'Kreativitet', 'Teknik']
    },
    contact: {
      title: 'Låt oss koppla upp',
      subtitle: 'Hör av dig om du vill samarbeta eller bara säga hej.',
      email: 'E-post',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: {
      copyright: '© 2024 Christoffer Ankarstrand'
    }
  }
}

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
function Navigation({ language, setLanguage, theme, setTheme }: {
  language: 'en' | 'sv'
  setLanguage: (lang: 'en' | 'sv') => void
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => void
}) {
  const t = content[language]

  return (
    <>
      {/* Top bar with language and theme controls */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6">
        {/* Language toggle - left side */}
        <div className="lang-toggle">
          <button
            onClick={() => setLanguage('en')}
            className={language === 'en' ? 'active' : ''}
          >
            EN
          </button>
          <span className="mx-1 text-muted-foreground">/</span>
          <button
            onClick={() => setLanguage('sv')}
            className={language === 'sv' ? 'active' : ''}
          >
            SV
          </button>
        </div>

        {/* Theme toggle - right side */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="theme-toggle-button flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-primary" />
          ) : (
            <Moon className="w-5 h-5 text-primary" />
          )}
        </button>
      </div>

      {/* Main navigation - separate positioning */}
      <nav className="nav-minimal">
        <a href="#projects" className="nav-link">{t.nav.projects}</a>
        <a href="#about" className="nav-link">{t.nav.about}</a>
        <a href="#contact" className="nav-link">{t.nav.contact}</a>
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
  expandedTitle?: string
  expandedConcept?: string
  expandedFocus?: string
}

// Project tile component
function ProjectTile({ project, index, language }: { 
  project: Project, 
  index: number,
  language: 'en' | 'sv'
}) {
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
            {showDetails && project.id === 'guldklockan' && project.expandedTitle 
              ? project.expandedTitle 
              : project.title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {showDetails && project.id === 'guldklockan' && project.expandedConcept
              ? project.expandedConcept
              : project.concept
            }
          </p>
        </div>
        <div>
          <p className="text-primary text-xs md:text-sm font-mono uppercase tracking-wider leading-relaxed">
            {showDetails && project.id === 'guldklockan' && project.expandedFocus
              ? project.expandedFocus
              : project.focus
            }
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'sv'>('en')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const t = content[language]
  const projects = t.projects.items.map((item, index) => ({
    ...item,
    className: ['project-agency', 'project-influencer', 'project-football', 'project-unemployed', 'project-probono'][index]
  }))

  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-500">
      <CustomCursor />
      <Navigation 
        language={language} 
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Hero Section */}
      <section className="section-minimal container-edge pt-24">
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
                {t.hero.subtitle}
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
                  {t.hero.exploreWork}
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
                  {t.projects.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t.projects.subtitle}
                </p>
              </motion.div>
            </div>

            {/* Right side - Project grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {projects.map((project, index) => (
                  <ProjectTile 
                    key={project.id} 
                    project={project} 
                    index={index}
                    language={language}
                  />
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
                {t.about.title}
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 mb-6 md:mb-8 leading-relaxed">
                {t.about.text1}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.about.text2}
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
              {t.about.skills.map((skill, index) => (
                <div key={index} className="text-primary font-mono text-sm md:text-base uppercase tracking-wider">
                  {skill}
                </div>
              ))}
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
              {t.contact.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">
              {t.contact.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a
                href="mailto:hello@christoffer.com"
                className="inline-block px-4 py-2 md:px-6 md:py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 font-mono text-sm md:text-base uppercase tracking-wider"
              >
                {t.contact.email}
              </a>
              <a
                href="https://linkedin.com/in/christoffer"
                className="inline-block px-4 py-2 md:px-6 md:py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 font-mono text-sm md:text-base uppercase tracking-wider"
              >
                {t.contact.linkedin}
              </a>
              <a
                href="https://github.com/christoffer"
                className="inline-block px-4 py-2 md:px-6 md:py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 font-mono text-sm md:text-base uppercase tracking-wider"
              >
                {t.contact.github}
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
            {t.footer.copyright}
          </p>
        </motion.div>
      </section>
    </div>
  )
}

