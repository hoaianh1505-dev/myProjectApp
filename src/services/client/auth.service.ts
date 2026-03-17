import { prisma } from "config/client";
import { ACCOUNT_TYPE } from "config/constant";
import { comparePassword, hashPassword } from "../user.service";
import { Request, Response, NextFunction } from "express";
import passport from "passport";
const registerNewUser = async (fullName: string, email: string, password: string) => {
    const existingUser = await prisma.user.findUnique({
        where: { username: email }
    });

    if (existingUser) {
        throw new Error("Email này đã được sử dụng. Vui lòng chọn email khác.");
    }

    const hashedPassword = await hashPassword(password);

    const userRole = await prisma.role.findFirst({
        where: {
            name: "USER"
        }
    });

    const newUser = await prisma.user.create({
        data: {
            fullName: fullName,
            username: email,
            password: hashedPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            roleId: userRole?.id // Fallback to 1 if role not found
        }
    });

    return newUser;
}
const getUserWithRoleById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id: +id },
        include: {
            role: true
        },
        omit: {
            password: true
        }
    })
    return user;
}

const handleLogin = async (username: string, password: string, callback: any) => {
    const user = await prisma.user.findUnique({
        where: { username: username }
    });
    if (!user) {
        // throw new Error("User not found");``
        return callback(null, false, { message: "User not found" });
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
        // throw new Error("Wrong password");
        return callback(null, false, { message: "Wrong password" });
    }
    return callback(null, user);
}
const postLogout = (req: Request, res: Response, next: NextFunction) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    })
}
export { registerNewUser, getUserWithRoleById, handleLogin, postLogout }
