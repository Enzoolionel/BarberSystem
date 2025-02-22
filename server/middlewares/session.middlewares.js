const sessionMiddleware = (req, res, next) => {
  if (!req.session || !req.session.user) {
    return res
      .status(401)
      .json({ success: false, message: "Acceso no autorizado" });
  }
  next();
};

export default sessionMiddleware;
