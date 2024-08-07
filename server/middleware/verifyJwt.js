import jwt from 'jsonwebtoken'

// create middleware to verify JWT

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  const token = authHeader.split(' ')[1]
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Forbided' })
    }
    req.user = decoded.UserInfo.email
    req.role = decoded.UserInfo.role
    next()
  })
}
export default verifyJWT
