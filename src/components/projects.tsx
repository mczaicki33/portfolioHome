'use client'

import { Car, ShoppingCart, XIcon } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from "@/lang/LanguageContext"
import { translations } from "@/lang/translations"



export function Projects() {
    const { language } = useLanguage();
    const t = translations[language];
    const projects = [
        {
            title: t.projects.onlineShop,
            icon: <ShoppingCart className="w-16 h-16" />,
            technologies: 'Stack: ASP.Net, Entity Framework',
            link: '/shop',
        },
        {
            title: t.projects.socialMediaPlatform,
            icon: <XIcon className="w-16 h-16" />,
            technologies: 'Stack: React, Tailwind CSS',
            link: 'https://mczaicki-x.vercel.app/',
        },
        {
            title: t.projects.carRental,
            icon: <Car className="w-16 h-16" />,
            technologies: 'Stack: ASP.Net, Entity Framework, Bootstrap',
            link: '/cars',
        },
    ]
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">{t.projects.title}</h2>
            <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                    {projects.map((project, index) => (
                        <CarouselItem key={index} className="">
                            <Card className="h-full py-10">
                                <CardHeader>
                                    <div className="flex justify-center">{project.icon}</div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle className="text-xl text-primary mb-4">{project.title}</CardTitle>
                                    <p className="text-muted-foreground text-sm">{project.technologies}</p>
                                </CardContent>
                                <CardFooter className="flex justify-center">
                                    <Button asChild>
                                        <a href={project.link} className="w-2/3">
                                            {t.projects.goToProject}
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

