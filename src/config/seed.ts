import { prisma } from "./client"

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();
    if (countUser === 0) {
        await prisma.user.createMany({
            data: [
                {
                    username: "admin@gamil.com",
                    password: "123456",
                    accountType: "SYSTEM",
                    address: "admin",
                    fullName: "admin",
                    phone: "0123456789"
                },
                {
                    username: "user@gamil.com",
                    password: "123456",
                    accountType: "USER",
                    address: "user",
                    fullName: "user",
                    phone: "0123456789"
                }
            ]
        })

    }
    else if (countRole === 0) {
        await prisma.role.createMany({
            data: [
                {
                    name: "ADMIN",
                    description: "ADMIN full quyền"
                },
                {
                    name: "USER",
                    description: "USER thông thường"
                }
            ]
        })

    }
    else {
        console.log("Adreadly init data")
    }
}
export default initDatabase;