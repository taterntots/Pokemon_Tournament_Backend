function checkForUserData(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ errorMessage: 'body is empty / missing registration data. remember to type all the things' });
  } else if (!req.body.username || !req.body.password) {
    res.status(400).json({ errorMessage: 'username and password fields are required' });
  } else {
    next();
  }
}

module.exports = checkForUserData;