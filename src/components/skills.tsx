import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {useLanguage} from "@/lang/LanguageContext.tsx";
import {translations} from "@/lang/translations.ts";

export default function Skills(){
    const skills = [
        "C#",
        "JavaScript",
        "TypeScript",
        "PHP",
        "Java",
        "ASP.NET Core",
        "React",
        "Laravel",
        "Entity Framework",
        "WinForms",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "Azure",
        "Docker"
    ]

    const { language } = useLanguage();
    const t = translations[language];
    return(
        <>
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary text-center">{t.nav.skills}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {skills.map((skill) =>
                        <Badge className='text-md mx-2'>{skill}</Badge>)}
                </CardContent>
            </Card>
        </>
    )
}