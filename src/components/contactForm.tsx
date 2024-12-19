'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/app/actions'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { ToastContainer, toast, Slide } from 'react-toastify'
import { useThemeValue } from "@/components/theme/mode-toggle.tsx"
import {translations} from "@/lang/translations.ts";
import {useLanguage} from "@/lang/LanguageContext.tsx";



export function ContactForm() {

    const { language } = useLanguage();
    const t = translations[language].contact;
    const [isSubmitting, setIsSubmitting] = useState(false)
    const theme = useThemeValue()
    const formSchema = z.object({
        name: z.string().min(2, {
            message: t.nameMinErr,
        }),
        email: z.string().email({
            message: t.emailErr,
        }),
        message: z.string().min(8, {
            message: t.msgMinErr,
        }),
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            await sendEmail(values)
            form.reset()
            toast(t.success, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: theme,
                transition: Slide
            });
        } catch {
            toast.error(t.error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: theme,
                transition: Slide
            });
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">{t.title}</CardTitle>
                <CardDescription className='text-center'>{t.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t.name}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t.name} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t.email}</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder={t.email} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t.message}</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder={t.message}
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={form.handleSubmit(onSubmit)}
                    className="w-full"
                >
                    {isSubmitting ? t.sending : t.send}
                </Button>
            </CardFooter>
            <ToastContainer />
        </Card>
    )
}
