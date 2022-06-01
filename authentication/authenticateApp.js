/**
 * This method ensures all the app that acces the route are being verified using their api key
 * @returns {undefined}
 */
export const authApp = function () {
  return function (req, res, next) {
    if (!req.headers.api_key || req.headers.api_key !== process.env.API_KEY)
      return res.sendStatus(401);

    next();
  };
};
