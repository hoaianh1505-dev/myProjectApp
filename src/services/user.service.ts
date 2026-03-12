import { Prisma } from "@prisma/client";
import getConnection from "../config/database";
import { prisma } from "../config/client";
import { ACCOUNT_TYPE } from "config/constant";
import { hash } from "bcrypt";
const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashPassword = async (plainText: string) => {
    return await bcrypt.hash(plainText, saltRounds);
}
const handleCreateUser = async (fullname: string, email: string, address: string, phone: string, avatar: string, role: string) => {
    const defaultPassword = await hashPassword('123456');
    try {
        const user = await prisma.user.create({
            data: {
                fullName: fullname,
                username: email,
                address: address,
                password: defaultPassword,
                accountType: ACCOUNT_TYPE.SYSTEM,
                avatar: avatar,
                phone: phone,
                roleId: +role

            }
        })
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const getAllUsers = async () => {
    const user = prisma.user.findMany();
    return user;
}
const getAllRoles = async () => {
    const role = prisma.role.findMany();
    return role;
}
const handleDeleteUser = async (id: string) => {
    const user = prisma.user.delete({
        where: {
            id: +id
        }
    })
    return user;
}
const getUserById = async (id: string) => {
    const user = prisma.user.findUnique({
        where: {
            id: +id
        }
    })
    return user;
}
const handleUpdateUser = async (id: string, fullname: string, phone: string, role: string, address: string, avatar?: string) => {
    const user = await prisma.user.update({
        where: {
            id: +id
        },
        data: {
            fullName: fullname,
            phone: phone,
            roleId: +role,
            address: address,
            ...avatar !== undefined && { avatar: avatar },
        }
    })
    return user;
}
export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, handleUpdateUser, getAllRoles, hashPassword }