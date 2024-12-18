'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Circle, FileIcon as LucideFileUser } from 'lucide-react'
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lang/LanguageContext"
import { translations } from "@/lang/translations"

export function AboutMe() {
    const { language } = useLanguage();
    const t = translations[language];

    const skills = [
        {
            category: "Programming Languages",
            items: [
                { name: "C#", level: 3 },
                { name: "JavaScript", level: 3 },
                { name: "TypeScript", level: 2.5 },
                { name: "PHP", level: 1.5 },
                { name: "Java", level: 1 },
            ],
        },
        {
            category: "Frameworks",
            items: [
                { name: "ASP.NET Core", level: 3 },
                { name: "React", level: 3 },
                { name: "Laravel", level: 1.5 },
            ],
        },
        {
            category: "Tools",
            items: [
                { name: "Git", level: 2 },
                { name: "Azure", level: 1.5 },
                { name: "Docker", level: 0.5 },
            ],
        },
    ]

    const SkillBar = ({ level }: { level: number }) => (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative w-4 h-4">
                    <Circle
                        className={`w-4 h-4 ${
                            i <= Math.floor(level)
                                ? "fill-primary stroke-primary"
                                : "fill-transparent stroke-primary/30"
                        }`}
                    />
                    {i - 0.5 === level && (
                        <div className="absolute inset-0 overflow-hidden w-1/2">
                            <Circle className="w-4 h-4 fill-primary stroke-primary"/>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">{t.about.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {t.about.intro.map((el) => <p className='font-semibold leading-tight'>{el}</p>)}
                <p className='font-semibold leading-tight'></p>
                <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">{t.about.skills}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skillCategory) => (
                            <div key={skillCategory.category}>
                                <h4 className="font-semibold mb-2">{skillCategory.category}</h4>
                                <ul className="space-y-2">
                                    {skillCategory.items.map((skill) => (
                                        <li key={skill.name} className="flex justify-between items-center">
                                            <span>{skill.name}</span>
                                            <SkillBar level={skill.level}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div>
                            <h4 className="font-semibold mb-2">{t.about.languages}</h4>
                            <ul className="space-y-2">
                                <li className="flex justify-between items-center">
                                    <span>{t.about.polish}</span>
                                    <span className='text-primary font-semibold'>Native</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>{t.about.english}</span>
                                    <span className='text-primary font-semibold'>B2</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">{t.about.links}</h3>
                    <div className="flex flex-row gap-8 justify-evenly">
                        <div>
                            <h3 className="font-semibold mb-2 text-center flex flex-row justify-evenly">{t.about.cv} <LucideFileUser/></h3>
                            <ul>
                                <li>
                                    <Button asChild size="lg">
                                        <a href="https://github.com/haearnbleidd" className="text-primary">
                                            {t.about.download}
                                        </a>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 text-center flex flex-row justify-evenly">Github <SiGithub/></h3>
                            <ul>
                                <li>
                                    <Button asChild size="lg">
                                        <a href="https://github.com/haearnbleidd" className="text-primary">
                                            {t.about.redirect}
                                        </a>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 text-center flex flex-row justify-evenly">LinkedIn<SiLinkedin/></h3>
                            <ul>
                                <li>
                                    <Button asChild size="lg">
                                        <a href="https://github.com/haearnbleidd" className="text-primary">
                                            {t.about.redirect}
                                        </a>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

