'use server'

import { z } from 'zod'

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(8),
})

export async function sendEmail(data: z.infer<typeof schema>) {
    const result = schema.safeParse(data)

    if (!result.success) {
        throw new Error('Invalid form data')
    }

    console.log('Sending email:', result.data)

    return { success: true }
}

