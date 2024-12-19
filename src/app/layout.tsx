import '@/app/globals.css'
import {ThemeProvider} from '@/components/theme/theme-provider'
import {LanguageProvider} from '@/lang/LanguageContext'
import React from "react";
import {BackgroundSVG} from "@/components/BackgroundSVG.tsx";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
})
{

    return (
        <html lang="en">
        <body >
        <div style={{
            background: "radial-gradient(circle, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--background-rgb), 0) 70%)"
        }} className='fixed w-screen top-0 h-screen'></div>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}

