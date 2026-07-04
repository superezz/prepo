



const isAuth = (req, res, next) => {
  try {
    let token = req.cookies
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
   if (!verifiedToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = verifiedToken.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

export default isAuth;