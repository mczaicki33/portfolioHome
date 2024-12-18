import { GB,PL } from 'country-flag-icons/react/3x2'
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";

export default function ChangeLanguage() {
    const [lang, setLang] = useState<string>("en");
    return (<>
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setLang(prevLang => prevLang === "en" ? "pl" : "en")}
        >
            {lang === "en" ? <GB className="h-5 w-5"/> : <PL className="h-5 w-5 " />}

            <span className="sr-only">Change Language</span>
        </Button>
    </>)
}

