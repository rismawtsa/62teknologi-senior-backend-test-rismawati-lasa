module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    // should not be hardcoded, this is just a demo to use the middleware to verify the authorization
    if (token !== "123456") {
      res.status(401).json({
        error: {
          code: "UNAUTHORIZED_ACCESS_TOKEN",
        },
      });
    } else {
      next();
    }
  } catch (e) {
    res.status(401).json({
      error: {
        code: "INVALID_REQUEST",
      },
    });
  }
};
