import { prisma } from "config/client";


const getProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
}
const getProductById = async (id: number) => {
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id)
        }
    });
    return product;
}
const addProductToCart = async (quantity: number, productId: number, user: any) => {
    const cart = await prisma.cart.findUnique({
        where: {
            userId: user.id
        }
    })
    const product = await prisma.product.findUnique({
        where: {
            id: productId
        }
    });
    if (cart) {
        //update
        await prisma.cart.update({
            where: {
                id: cart.id
            },
            data: {
                sum: {
                    increment: quantity
                }
            }
        })
        const curentCartDetail = await prisma.cartDetail.findFirst({
            where: {
                productId: productId,
                cartId: cart.id
            }
        })
        await prisma.cartDetail.upsert({
            where: {
                id: curentCartDetail?.id ?? 0
            },
            update: {
                quantity: {
                    increment: quantity
                }
            },
            create: {
                cartId: cart.id,
                productId: productId,
                quantity: quantity,
                price: product?.price
            }
        })
    } else {
        await prisma.cart.create({
            data: {
                userId: user.id,
                sum: quantity,
                cartDetails: {
                    create: [
                        {
                            productId: productId,
                            quantity: quantity,
                            price: product?.price
                        }
                    ]
                }
            }
        })
    }
}
export { getProducts, getProductById, addProductToCart }