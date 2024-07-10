import express, { Request, Response } from "express"
import { loginSchema, registerSchema } from "../schema"
import { db } from "../db"
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import { middlware } from "./middleware"
export const router = express()

const JWT_SECRET = process.env.JWT_SECRET as string

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

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" })

        return res.status(200).json({
            user: user,
            token: token
        })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
})

router.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const validate = loginSchema.safeParse({
            email: email,
            password: password,
        })
        if (!validate.success) {
            return res.status(400).json({
                message: "Wrong Inputs"
            })
        }

        const user = await db.user.findUnique({
            where: {
                email: email
            }
        })
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const passMatch = await bcryptjs.compare(password, user?.password)
        if (!passMatch) {
            return res.status(401).json({
                message: "Wrong Credentials"
            })
        }
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' })

        return res.status(200).json({
            user: user,
            token: token
        })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
})

