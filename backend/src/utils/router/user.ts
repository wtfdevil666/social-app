import express, { Request, Response } from "express"
import { registerSchema } from "../schema"
import { db } from "../db"
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
export const router = express()

router.post("/register", async (req: Request, res: Response) => {
    try {
        const { name, username, email, password } = req.body

        const validated = registerSchema.safeParse({
            name: name,
            username: username,
            email: email,
            password: password,
        })
        if (!validated.success) {
            return res.status(400).json({
                message: "Wrong Inputs"
            })
        }

        const existingUser = await db.user.findUnique({
            where: {
                email: email
            }
        })
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            })
        }

        const hashed = await bcryptjs.hash(password, 10)

        const user = await db.user.create({
            data: {
                name: name,
                username: username,
                email: email,
                password: hashed,
            }
        })

        const JWT_SECRET = process.env.JWT_SECRET as string
        const token = jwt.sign(user.id, JWT_SECRET)

        return res.status(200).json({
            user: user,
            token: token
        })
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
})