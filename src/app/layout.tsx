import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { LanguageProvider } from '@/lang/LanguageContext'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
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

