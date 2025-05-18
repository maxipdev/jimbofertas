import jwt from 'jsonwebtoken'

export const checkUserSession = (req, res, next)=> {
    try {
        const token = req.cookies.access_token

        if (!token) throw new Error() // lanza el error para q lo agarre el catch
        
        req.session = { token: null }

        jwt.verify(token, process.env.JWT_KEY)

        req.session.token = token
    } catch (error) {
        return res.status(401).json('Acces not authorized')
    }

    next()
}

