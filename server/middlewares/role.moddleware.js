const verifyRole = (roles) => {
  return (req, res, next) => {
    const userRole = req.user?.role; // Asegura que `req.user.role` existe

    console.log("Roles esperados:", roles);
    console.log("Rol del usuario:", userRole);

    // Verifica si el usuario tiene un rol válido
    if (!userRole || !roles.includes(userRole)) {
      console.log("Acceso denegado ❌");
      return res
        .status(403)
        .json({ message: "Acceso denegado, no tienes permisos." });
    }

    console.log("Acceso permitido ✅");
    next();
  };
};

export default verifyRole;
