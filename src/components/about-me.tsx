import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Circle, LucideFileUser} from 'lucide-react'
import {SiGithub, SiLinkedin} from "@icons-pack/react-simple-icons";
import {Button} from "@/components/ui/button.tsx";

export function AboutMe() {
    const skills = [
        {
            category: "Programming Languages",
            items: [
                {name: "C#", level: 3},
                {name: "JavaScript", level: 3},
                {name: "TypeScript", level: 2.5},
                {name: "PHP", level: 1.5},
                {name: "Java", level: 1},
            ],
        },
        {
            category: "Frameworks",
            items: [
                {name: "ASP.NET Core", level: 3},
                {name: "React", level: 3},
                {name: "WinForms", level: 2},
                {name: "Laravel", level: 1.5},

            ],
        },
        {
            category: "Frontend Libraries & CSS Frameworks",
            items: [
                {name: "Tailwind CSS", level: 2},
                {name: "Bootstrap", level: 2.5},
            ],
        },
        {
            category: "Databases/ORMs",
            items: [
                {name: "Entity Framework", level: 2.5},
                {name: "SQL", level: 2}
            ],
        },
        {
            category: "Tools",
            items: [
                {name: "Git", level: 2},
                {name: "Azure", level: 1.5},
                {name: "Docker", level: 0.5},
            ],
        },
    ];

    const SkillBar = ({level}: { level: number }) => (
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
                <CardTitle className="text-2xl text-primary text-center">About me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className='font-semibold  leading-tight'>
                    Hi, I'm Maciej, a passionate and versatile software developer with a strong foundation in
                    programming and web development.</p>
                <p className='font-semibold  leading-tight'>I have a solid understanding of C# and JavaScript,
                    complemented by a growing proficiency in
                    TypeScript. My
                    journey with PHP and Java has further expanded my ability to adapt to diverse development
                    environments and challenges.</p>
                <p className='font-semibold  leading-tight'>I'm experienced in working with ASP.NET Core and React,
                    enabling me to deliver full-stack
                    applications with seamless functionality and an intuitive user experience.
                </p>
                <p className='font-semibold  leading-tight'>
                    I’m driven by a passion for learning and a commitment to delivering high-quality solutions. I thrive
                    in collaborative environments where innovation and problem-solving are at the forefront. <br/>
                    Feel free to reach out to discuss how I can contribute to your projects or team!
                </p>
                <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Skills</h3>
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
                            <h4 className="font-semibold mb-2">Languages</h4>
                            <ul className="space-y-2">
                                <li className="flex justify-between items-center">
                                    <span>Polish</span>
                                    <span className='text-primary font-semibold'>Native</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>English</span>
                                    <span className='text-primary font-semibold'>B2</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Links</h3>
                    <div className="flex flex-row gap-8 justify-evenly">
                        <div>
                            <h3 className="font-semibold mb-2 text-center flex flex-row justify-evenly">CV <LucideFileUser/>
                            </h3>
                            <ul>
                                <li>
                                    <Button asChild size="lg">
                                        <a href="https://github.com/haearnbleidd" className="text-primary">
                                            Download
                                        </a>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 text-center flex flex-row justify-evenly">Github <SiGithub/>
                            </h3>
                            <ul>
                                <li>
                                    <Button asChild size="lg">
                                        <a href="https://github.com/haearnbleidd" className="text-primary">
                                            Redirect
                                        </a>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 text-center flex flex-row justify-evenly">LinkedIn<SiLinkedin/>
                            </h3>
                            <ul>
                                <li>
                                    <Button asChild size="lg">
                                        <a href="https://github.com/haearnbleidd" className="text-primary">
                                            Redirect
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

