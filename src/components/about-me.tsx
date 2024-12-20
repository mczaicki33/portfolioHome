'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileIcon as LucideFileUser } from 'lucide-react'
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lang/LanguageContext"
import { translations } from "@/lang/translations"

export function AboutMe() {
    const { language } = useLanguage();
    const t = translations[language];
    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">{t.about.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {t.about.intro.map((el) => <p className='font-semibold leading-tight'>{el}</p>)}
                <p className='font-semibold leading-tight'></p>
                <div>
                    <h3 className="text-xl font-semibold text-center text-primary mb-4">{t.about.links}</h3>
                    <div className="flex flex-row gap-8 justify-evenly">
                        <div>
                            <h3 className="font-semibold mb-2 text-center flex flex-row justify-evenly">{t.about.cv} <LucideFileUser/></h3>
                            <ul>
                                <li>
                                    <Button asChild>
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
                                    <Button asChild>
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
                                    <Button asChild>
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

