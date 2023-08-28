import { Request, Response } from 'express'



class UsersController {
    async index(_req: Request, res: Response): Promise<Response> {
        const users = [{id: 123, email: 'felipe@gmail.com' }]

        return res.status(200).json(users)
    }
}
export default new UsersController()