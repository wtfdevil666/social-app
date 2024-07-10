import z from "zod"

export const registerSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
    username: z.string().min(1, {
        message: "Username is Required"
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Min 6 character(s) required"
    }),
})

export const loginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Min 6 character(s) required"
    }),
})

export const tweetSchema = z.object({
    content: z.string().min(1, {
        message: "Tweet is required"
    }),

})