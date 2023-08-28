import AuthError from "@/app/Auth/exceptions/AuthError"

import  config  from "@/config"

import  Jwt  from "jsonwebtoken"

// import { getValue, setValue } from "@/lib/redis"





export default class AuthService{


    async signIn( email: string, password: string): Promise<{ user: object; token: string }> {
        const user = {
            id : '123',
            email : 'felipegregorio1992@gmail.com',
            password : '123456',
            fullname : 'Felipe Gregorio'
    }

    if(email !== user.email && password !== user.password){
        throw new AuthError('Invalid credentials')
        }

        const {id, fullname} = user

        const token = Jwt.sign({ id }, config.auth.secret, {
            expiresIn: config.auth.expiresIn
        } )

        return { user: { id, fullname, email }, token }

    }

    // async signOut(token: string): Promise<void> {
    //     await this.blacklistToken(token)
    // }


    // async validateToken(token: string): Promise<string> {

    //     try{

    //         if (await this.isTokenBlacklisted(token)) 
    //             throw new AuthError('Invalid token')

    //         const decoded = Jwt.verify(token, config.auth.secret) as { id: string}
            
    //         return decoded.id
    //     } catch (err) {
    //         throw new AuthError('Invalid token')
    //     }
    // }

    // private async isTokenBlacklisted(token: string): Promise<boolean> {
    //     const blacklistedToken = await getValue('tokens:inavalidated:${token}')

    //     return !!blacklistedToken
    // }

    // private async blacklistToken(token: string): Promise<void> {
    //     await setValue(`tokens:inavalidated:${token}`, true)
    // }

}