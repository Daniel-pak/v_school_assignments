function changeThis(req, res, next) { 
    req.body = "woah this is a thing";
    console.log("youve been intercepted with bad spelling! RAWR")
    next();
}

module.exports = changeThis