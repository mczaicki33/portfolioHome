'use client'

import { GB, PL } from 'country-flag-icons/react/3x2'
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lang/LanguageContext"

export default function ChangeLanguage() {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === "en" ? "pl" : "en")}
        >
            {language === "en" ? <GB className="h-5 w-5"/> : <PL className="h-5 w-5" />}
            <span className="sr-only">Change Language</span>
        </Button>
    );
}

