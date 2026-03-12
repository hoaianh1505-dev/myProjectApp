import { hashPassword } from "src/services/user.service";
import { prisma } from "./client"
import { ACCOUNT_TYPE } from "config/constant";

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();
    if (countRole === 0) {
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
    if (countUser === 0) {
        const defaultPassword = await hashPassword('123456');
        const adminRole = await prisma.role.findUnique({
            where: {
                name: "ADMIN"
            }
        })
        if (adminRole) {
            await prisma.user.createMany({
                data: [
                    {
                        username: "admin@gamil.com",
                        password: defaultPassword,
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        address: "admin",
                        fullName: "admin",
                        phone: "0123456789",
                        roleId: adminRole.id
                    },
                    {
                        username: "user@gamil.com",
                        password: defaultPassword,
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        address: "user",
                        fullName: "user",
                        phone: "0123456789",
                        roleId: adminRole.id
                    }
                ]
            })

        }
    }

    if (countRole !== 0 && countUser !== 0) {
        console.log("Adreadly init data")
    }
}
export default initDatabase;