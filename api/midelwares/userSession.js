import jwt from 'jsonwebtoken'

export const checkUserSession = (req, res, next)=> {
    try {
        const authorization = req.headers.authorization
        console.log("session: ", authorization)
        
        if (!authorization) return res.status(401).json('Falta el token');
        const token = authorization.split(' ')[1]
        
        if (!token) throw new Error() // lanza el error para q lo agarre el catch
        
        req.session = { token: null }

        jwt.verify(token, process.env.JWT_KEY)

        req.session.token = token
        
        next()
    } catch (error) {
        return res.status(401).json('Acces not authorized')
    }
}

