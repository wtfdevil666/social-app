import express from "express"
import { middlware } from "./middleware"
import { db } from "../db"
import { tweetSchema } from "../schema"

export const router = express()

router.post("/create", middlware, async (req, res) => {
    try {
        const userId = req.userId
        const { content } = req.body
        const validated = tweetSchema.safeParse({
            content: content
        })
        if (!validated.success) {
            return res.status(409).json({
                message: "Wrong inputs"
            })
        }
        const tweet = await db.tweet.create({
            data: {
                content: content,
                userId: userId as string
            }
        })

        return res.status(200).json({
            tweet: tweet
        })
    } catch (error) {
        return res.status(401).json({
            error: error
        })
    }
})