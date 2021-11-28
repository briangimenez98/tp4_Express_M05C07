function adminMiddleware(req,res,next) {
    
    let user = req.query.user;
    switch (user) {
        case 'Ada':
            next();
            break;
        case 'Greta':
            next();
            break;
        case 'Vim':
            next();
            break;
        case 'Tim':
            next();
            break;
        default:
            res.send("No tienes los privilegios para ingresar")
            break;
    }
}
module.exports = adminMiddleware;