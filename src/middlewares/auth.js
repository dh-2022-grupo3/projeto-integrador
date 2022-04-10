function auth(req, res, next) {
  if (req.session.autorizado) {
    return next();
  }

  return res.redirect('/login');
}

module.exports = auth;
