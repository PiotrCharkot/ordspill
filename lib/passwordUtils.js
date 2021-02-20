const crypto = require('crypto');

function validPassword(password, hash, salt) {

    var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
 
}
 
function genPassword(password) {
 
     var salt = crypto.randomBytes(32).toString('hex');
     var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
 
     return {
         salt: salt,
         hash: genHash
     };
 
}

function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        console.log(req.user);
        next();
    } else {
        res.redirect('/failur-login')
    }
}

 
module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;
module.exports.isAuth = isAuth;