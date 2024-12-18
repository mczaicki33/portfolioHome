"use client"
import {Car, ShoppingCart, XIcon} from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AboutMe } from "@/components/about-me"
import {ModeToggle} from "@/components/theme/mode-toggle.tsx";
import {Button} from "@/components/ui/button.tsx";

export default function Home() {
    const projects = [

        {
            title: "Sklep internetowy",
            icon: <ShoppingCart className="w-16 h-16" />,
            technologies: "Technologie: ASP.Net, Entity Framework, Bootstrap, HTML 5",
            link: "/shop"
        },
        {
            title: "Portal Społecznościowy X",
            icon: <XIcon className="w-16 h-16" />,
            technologies: "Technologie: React, Tailwind CSS",
            link: "/x"
        },
        {
            title: "Wypożyczalnia samochodów",
            icon: <Car className="w-16 h-16" />,
            technologies: "Technologie: ASP.Net, Entity Framework, Bootstrap, HTML 5",
            link: "/cars"
        }


    ]

    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="container mx-auto py-8 text-center">
                <div className="flex ">
                    <h1 className="text-4xl font-bold text-primary w-full">Maciej Czaicki</h1>
                    <ModeToggle/>
                </div>

            </header>

            <main className="container mx-auto px-4">
                <Tabs defaultValue="projects" className="max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="projects">Projekty</TabsTrigger>
                        <TabsTrigger value="about">O mnie</TabsTrigger>
                    </TabsList>
                    <TabsContent value="projects">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {projects.map((project, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2">
                                        <Card className="h-full">
                                            <CardHeader>
                                                <div className="flex justify-center">{project.icon}</div>
                                            </CardHeader>
                                            <CardContent className="text-center">
                                                <CardTitle className="text-xl text-primary mb-4">
                                                    {project.title}
                                                </CardTitle>
                                                <p className="text-muted-foreground text-sm">{project.technologies}</p>
                                            </CardContent>
                                            <CardFooter className="flex justify-center">
                                                <Button  asChild>
                                                <a href={project.link} className="w-full">
                                                    Przejdź do projektu
                                                </a></Button>
                                            </CardFooter>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </TabsContent>
                    <TabsContent value="about">
                        <AboutMe />
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}


