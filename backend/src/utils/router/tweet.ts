import express from "express"

export const router = express()

router.post("/", (req, res) => {
    res.send("hello")
})