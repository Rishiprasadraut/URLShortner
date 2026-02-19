const { getUser } = require("../service/auth");

async function checkForAuth(req, res, next) {
    let token = req.cookies?.token;
    
    // Also check Authorization header for Bearer token
    if (!token && req.headers.authorization) {
        const authHeader = req.headers.authorization;
        if (authHeader.startsWith('Bearer ')) {
            token = authHeader.substring(7);
        }
    }
    
    req.user = null;
    if (!token) {
        return next();
    }

    const user = getUser(token);
    req.user = user;
    return next();
}

function restrictTo(roles) {
    return (req, res, next) => {
        if (!req.user) {
            // Check if it's an API request
            if (req.headers.accept && req.headers.accept.includes('application/json')) {
                return res.status(401).json({ error: "Authentication required" });
            }
            return res.redirect("/login");
        }
        if (!roles.includes(req.user.role)) {
            // Check if it's an API request
            if (req.headers.accept && req.headers.accept.includes('application/json')) {
                return res.status(403).json({ error: "Unauthorized" });
            }
            return res.end("UnAuthorized");
        }
        return next();
    };
}

module.exports = {
    checkForAuth,
    restrictTo,
};