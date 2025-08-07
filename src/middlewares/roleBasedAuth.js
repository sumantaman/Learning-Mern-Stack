const roleBasedAuth = (role) => {
  return (req, res, next) => {
    const user = req.user;

    // 💥 Handle missing user or roles safely
    if (!user || !Array.isArray(user.roles)) {
      return res.status(403).send({ message: "Access Denied: Invalid role data" });
    }

    if (user.roles.includes(role)) {
      return next();
    }

    res.status(403).send({ message: "Access Denied: Insufficient role" });
  };
};

export default roleBasedAuth;

// const roleBasedAuth = (role) => {
//   return (req, res, next) => {
//     if (req.user.roles.includes(role)) {
//       next();
//     } else {
//       res.status(403).send({ message: "Forbidden" });
//     }
//   };
// };
// export default roleBasedAuth;

// realworld
// const roleBasedAuth = (role) => {
//   return (req, res, next) => {
//     if (req.user.roles.includes(role)) return next();
//         res.status(403).send({ message: "Accied Denied" });
//   };
// };
// export default roleBasedAuth;
