import { Router } from "express";

import users from "@/app/Users/controllers/UsersControlles";

import AuthMidleware from "@/app/Auth/midlewares/AuthMidleware";


const routes = Router()

routes.get('/users', AuthMidleware, users.index)

export default routes

