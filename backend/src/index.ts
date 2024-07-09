import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { router as userRouter } from "./utils/router/user"
import { router as tweetRouter } from "./utils/router/tweet"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use("/user", userRouter)
app.use("/tweet", tweetRouter)


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

})