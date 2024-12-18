import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Circle} from 'lucide-react'

export function AboutMe() {
    const skills = [
        {
            category: "Języki programowania",
            items: [
                { name: "C#", level: 3 },
                { name: "JavaScript", level: 3 },
                { name: "TypeScript", level: 2.5 },
                { name: "PHP", level: 1.5 },
                { name: "Java", level: 1 },
            ],
        },
        {
            category: "Frameworki",
            items: [
                { name: "ASP.NET Core", level: 3 },
                { name: "React", level: 3 },
                { name: "Laravel", level: 1.5 },
            ],
        },
        {
            category: "Narzędzia",
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
                            <Circle className="w-4 h-4 fill-primary stroke-primary" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">O mnie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p>
                    Cześć! Nazywam się <strong>Maciej Czaicki</strong>, jestem początkującym programistą z
                    doświadczeniem w tworzeniu stron internetowych oraz aplikacji desktopowych.
                    Posługuję się takimi technologiami jak Asp.Net i Laravel, a moją pasją jest
                    tworzenie nowoczesnych i funkcjonalnych aplikacji.
                </p>
                <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Umiejętności</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skillCategory) => (
                            <div key={skillCategory.category}>
                                <h4 className="font-semibold mb-2">{skillCategory.category}</h4>
                                <ul className="space-y-2">
                                    {skillCategory.items.map((skill) => (
                                        <li key={skill.name} className="flex justify-between items-center">
                                            <span>{skill.name}</span>
                                            <SkillBar level={skill.level} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Cel</h3>
                    <p>
                        Moim celem jest nieustanny rozwój jako full-stack developer, z naciskiem na zdobycie
                        komercyjnego doświadczenia w budowaniu nowoczesnych aplikacji webowych. Chcę doskonalić
                        swoje umiejętności w pracy zespołowej, jednocześnie eksplorując nowe technologie i
                        podejścia, które pozwolą mi tworzyć jeszcze bardziej wydajne i skalowalne rozwiązania.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">CV</h3>
                    <ul>
                        <li>
                            <a href="https://github.com/haearnbleidd" className="text-primary hover:underline">
                                Kliknij, aby pobrać
                            </a>
                        </li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}

