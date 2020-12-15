"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    let user = req.session.user;
    if (user != null) {
        req.user = user;
        console.log(user);
        next();
    }
    else {
        res.redirect("/login");
    }
}
exports.default = default_1;
