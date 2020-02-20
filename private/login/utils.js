
function checkIfuserIsLogedin(req, res, next){
    if(req.isAuthenticated()){
      return next();
    }
  return res.redirect('/login');
  }
  
  function userIsLogedout(req, res, next){
    if(req.isAuthenticated()){
      return res.redirect('/');
    }
  next()
  }

  module.exports = {checkIfuserIsLogedin, userIsLogedout}