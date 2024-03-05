import { UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticationUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("anda belum login");
  try {
    const { pegId, nip, role } = verifyJWT(token);
    req.user = { pegId, nip, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError("anda belum login");
  }
};

export const authorizePermission = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};
