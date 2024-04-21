import { Request, Response } from "express"

export type AppRoutes = {
    path: string,
    methods: string[],
    handler: (req: Request, res: Response) => void
}