import { Request, Response } from "express";
import { addProductToCart, getProductById } from "src/services/client/item.service";
const getProductPage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await getProductById(+id);
    return res.render("client/product/detail.ejs", { product });
}
const postAddProductToCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = req.user as any;
    if (user) {
        await addProductToCart(1, +id, user);
    } else {
        return res.redirect("/login");
    }

    return res.redirect("/");
}
const getCartPage = (req: Request, res: Response) => {
    const user = req.user as any;
    if (!user) {
        return res.redirect("/login");
    }
    // const cart = await getCartByUserId(user.id);
    return res.render("client/product/cart.ejs", { user });
}
export { getProductPage, postAddProductToCart, getCartPage }