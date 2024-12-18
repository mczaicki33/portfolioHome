'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { AboutMe } from '@/components/about-me'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { Projects } from '@/components/projects'
import {ContactForm} from "@/components/contactForm.tsx";

const sections = [
    { id: 'home', title: 'Home' },
    { id: 'projects', title: 'Projects' },
    { id: 'about', title: 'About' },
    { id: 'contact', title: 'Contact' },
];

export default function Home() {
    const [activeSection, setActiveSection] = useState<string>('home')
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (const section of sections) {
                const element = sectionRefs.current[section.id]
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = sectionRefs.current[sectionId]
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
                style={{ scaleX }}
            />
            <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-40">
                <nav className="container mx-auto py-4">
                    <ul className="flex justify-center space-x-4">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <button
                                    onClick={() => scrollToSection(section.id)}
                                    className={`text-lg font-medium transition-colors ${
                                        activeSection === section.id ? 'text-primary' : 'text-foreground hover:text-primary/80'
                                    }`}
                                >
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main className="pt-16">
                <section
                    ref={el => sectionRefs.current['home'] = el}
                    className="min-h-screen flex items-center justify-center"
                >
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-bold text-primary mb-4">Maciej Czaicki</h1>
                        <p className="text-xl">Full-stack Developer</p>
                        <div className="mt-8">
                            <ModeToggle/>
                        </div>
                    </motion.div>
                </section>

                <section
                    ref={el => sectionRefs.current['projects'] = el}
                    className="min-h-screen py-16"
                >
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                    >
                        <Projects/>
                    </motion.div>
                </section>

                <section
                    ref={el => sectionRefs.current['about'] = el}
                    className="min-h-screen py-16"
                >
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                    >
                        <AboutMe/>
                    </motion.div>
                </section>
                <section
                    ref={el => sectionRefs.current['contact'] = el}
                    className="min-h-screen py-16"
                >
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                    >
                        <ContactForm/>
                    </motion.div>
                </section>
            </main>
        </div>
    )
}

