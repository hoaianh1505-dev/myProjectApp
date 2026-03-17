import { Request, Response, NextFunction } from "express";
const isLogin = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}
const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith("/admin")) {
        const user = req.user as any;
        if (req.isAuthenticated() && user.role.name === "ADMIN") {
            return next();
        }
        return res.redirect('/');
    }
    // client route
    next();
}
export { isLogin, isAdmin }
