import { Prisma } from "@prisma/client";
import getConnection from "../config/database";
import { prisma } from "../config/client";

const handleCreateUser = async (fullname: string, email: string, address: string) => {

    try {
        const user = await prisma.user.create({
            data: {
                name: fullname,
                email: email,
                address: address
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
const handleDeleteUser = async (id: string) => {
    const user = prisma.user.delete({
        where: {
            id: +id
        }
    })
}
const getUserById = async (id: string) => {
    const user = prisma.user.findUnique({
        where: {
            id: +id
        }
    })
    return user;
}
const handleUpdateUser = async (id: string, fullname: string, email: string, address: string) => {
    const user = prisma.user.update({
        where: {
            id: +id
        },
        data: {
            name: fullname,
            email: email,
            address: address
        }
    })
}
export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, handleUpdateUser }