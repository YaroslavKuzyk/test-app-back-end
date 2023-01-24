import jwt from 'jsonwebtoken'
import config from "../config.js";

export function authenticateToken(req, res, next) {
  const authHeader = req.headers.autorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401);

  jwt.verify(token, config.secret, (err) => {
    console.log(err);
    if (err) return res.status(403);
    next();
  });
}
