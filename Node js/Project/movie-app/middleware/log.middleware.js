let logMiddleware = (req, res, next) => {
  console.log("this is login middleware");

  if (req.params) {
    req.username = "authenticatedUser";
  } else {
    req.username = "guest";
  }

  next();
};

export default logMiddleware;
