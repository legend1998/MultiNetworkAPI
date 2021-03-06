import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const auth = (req, res, next) => {
  try {
    const secret = req.headers.authorization;
    if (secret === SECRET_KEY) next();
    else {
      res.status(401).send({ success: false, error: "authorisation revoked" });
    }
  } catch (err) {
    res.status(401).send({ success: false, error: err });
  }
};

export default auth;
