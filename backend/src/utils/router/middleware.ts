import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET as string

declare global {
    namespace Express {
        interface Request {
            userId: any
        }
    }
}


export const middlware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"]
    if (!authHeader) {
        return res.status(401).json({
            message: "Token not found"
        })
    }
    const verify = jwt.verify(authHeader, JWT_SECRET) as JwtPayload
    if (!verify) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    req.userId = verify.id
    next()
} 