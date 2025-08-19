import jwtUtils from "../utils/jwt.js";

const auth = async (req, res, next) => {
  const cookie = req.headers.cookie;
  if (!cookie) return res.status(401).send("User not authenticated.");

  const authToken = cookie.split("=")[1];


  try {
    const data = await jwtUtils.verifyJWT(authToken);
    req.user =  data;
    next();
  } catch (error) {
    console.error("JWT verification error:", error); // helpful log
    res.status(401).send(error?.message || "Invalid auth token.");
  }
};

export default auth;
