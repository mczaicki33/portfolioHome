'use client'

import React, {useState, useRef, useEffect, useCallback} from 'react'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {AboutMe} from '@/components/about-me'
import {ModeToggle} from '@/components/theme/mode-toggle'
import {Projects} from '@/components/projects'
import {ContactForm} from "@/components/contactForm"
import ChangeLanguage from "@/components/ChangeLanguage"
import {useLanguage} from "@/lang/LanguageContext"
import {translations} from "@/lang/translations"
import Skills from "@/components/skills.tsx";


const sections = ['home', 'projects', 'about', 'skills', 'contact'] as const;

export default function Home() {
    const [activeSection, setActiveSection] = useState<string>('home')
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
    const {language} = useLanguage();
    const t = translations[language];

    const {scrollYProgress} = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (const section of sections) {
                const element = sectionRefs.current[section]
                if (element) {
                    const {offsetTop, offsetHeight} = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
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
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <div className="min-h-screen text-foreground overflow-hidden relative z-10">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
                style={{scaleX}}
            />
            <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-40">
                <nav className="container mx-auto py-4">
                    <ul className="flex justify-center space-x-4">
                        {sections.map((section) => (
                            <li key={section}>
                                <button
                                    onClick={() => scrollToSection(section)}
                                    className={`md:text-lg text-sm font-medium transition-colors ${
                                        activeSection === section ? 'text-primary' : 'text-foreground hover:text-primary/80'
                                    }`}
                                >
                                    {t.nav[section]}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main className="pt-16">
                <HomepageSection
                    ref={el => sectionRefs.current['home'] = el}
                    title={t.home.title}
                    subtitle={t.home.subtitle}
                />
                <ProjectsSection
                    ref={el => sectionRefs.current['projects'] = el}
                    projects={<Projects/>}
                />
                <AboutSection
                    ref={el => sectionRefs.current['about'] = el}
                    about={<AboutMe/>}
                />
                <SkillsSection
                    ref={el => sectionRefs.current['skills'] = el}
                    skills={<Skills/>}
                />
                <ContactSection
                    ref={el => sectionRefs.current['contact'] = el}
                    contact={<ContactForm/>}
                />
            </main>
        </div>
    )
}

const HomepageSection = motion(React.forwardRef<HTMLElement, { title: string; subtitle: string }>(
    ({title, subtitle}, ref) => {
        const {scrollYProgress} = useScroll({
            target: ref as React.RefObject<HTMLElement>,
            offset: ["start start", "end start"]
        })
        const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

        return (
            <motion.section
                ref={ref}
                className="min-h-screen flex items-center justify-center relative"
                style={{y, opacity}}
            >
                <div className="text-center z-10">
                    <motion.h1
                        className="text-6xl font-bold text-primary mb-4"
                        initial={{y: 50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        className="text-2xl"
                        initial={{y: 50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.8, delay: 0.4}}
                    >
                        {subtitle}
                    </motion.p>
                    <motion.div
                        className="mt-8 flex justify-center space-x-4"
                        initial={{y: 50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.8, delay: 0.6}}
                    >
                        <ModeToggle/>
                        <ChangeLanguage/>
                    </motion.div>
                </div>
                <motion.div
                    className="absolute inset-0 z-0"
                />
            </motion.section>
        )
    }
))

const ProjectsSection = motion(React.forwardRef<HTMLElement, { projects: React.ReactNode }>(
    ({projects}, ref) => {
        const [inViewRef, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
        })

        const setRefs = useCallback(
            (node: HTMLElement | null) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ref(node);
                inViewRef(node);
            },
            [ref, inViewRef]
        );

        const variants = {
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0},
        }

        return (
            <motion.section
                ref={setRefs}
                className="min-h-screen py-16 relative"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{duration: 0.8}}
            >
                {projects}
            </motion.section>
        )
    }
))

const AboutSection = motion(React.forwardRef<HTMLElement, { about: React.ReactNode }>(
    ({about}, ref) => {
        const [inViewRef, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
        })

        const setRefs = useCallback(
            (node: HTMLElement | null) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ref(node);
                inViewRef(node);
            },
            [ref, inViewRef]
        );

        const variants = {
            hidden: {opacity: 0, scale: 0.9},
            visible: {opacity: 1, scale: 1},
        }

        return (
            <motion.section
                ref={setRefs}
                className="min-h-screen py-16 relative"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{duration: 0.8}}
            >
                {about}
            </motion.section>
        )
    }
))
const SkillsSection = motion(React.forwardRef<HTMLElement, { skills: React.ReactNode }>(
    ({skills}, ref) => {
        const [inViewRef, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
        })

        const setRefs = useCallback(
            (node: HTMLElement | null) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ref(node);
                inViewRef(node);
            },
            [ref, inViewRef]
        );

        const variants = {
            hidden: {opacity: 0, scale: 0.9},
            visible: {opacity: 1, scale: 1},
        }

        return (
            <motion.section
                ref={setRefs}
                className="min-h-screen py-16 relative"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{duration: 0.8}}
            >
                {skills}
            </motion.section>
        )
    }
))
const ContactSection = motion(React.forwardRef<HTMLElement, { contact: React.ReactNode }>(
    ({contact}, ref) => {
        const [inViewRef, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
        })

        const setRefs = useCallback(
            (node: HTMLElement | null) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ref(node);
                inViewRef(node);
            },
            [ref, inViewRef]
        );

        const variants = {
            hidden: {opacity: 0, x: 100},
            visible: {opacity: 1, x: 0},
        }

        return (
            <motion.section
                ref={setRefs}
                className="min-h-screen py-16 flex items-center justify-center relative"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{duration: 0.8}}
            >
                <div className="w-full max-w-4xl px-4">
                    {contact}
                </div>
            </motion.section>
        )
    }
))

