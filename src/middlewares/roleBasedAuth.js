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
const roleBasedAuth = (role) => {
  return (req, res, next) => {
    if (req.user.roles.includes(role)) return next();
        res.status(403).send({ message: "Forbidden" });
  };
};
export default roleBasedAuth;
