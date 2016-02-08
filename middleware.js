
exports.myLoggingMiddleware = function(req, res, next) {
  var url = req.url;
  var method = req.method;

  req.timestamp = new Date();

  console.log("%s request at %s", method, url);
  next();
}

exports.isAuthenticated = function(req, res, next) {
  console.log(req.session.isAuthenticated);
  if(req.session.isAuthenticated) {
    next();
  } else {
    res.redirect("/loginhelp");
  }
}