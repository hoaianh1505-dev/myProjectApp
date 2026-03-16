
import { Request, Response } from "express";
import { getAllUsers } from "../../services/user.service";
import { getProductList } from "src/services/admin/product.service";
const getDashboardPage = (req: Request, res: Response) => {
    return res.render("admin/dashboard/show", {

    });
}
const getAdminUserPage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    return res.render("admin/user/show", {
        users
    });
}
const getAdminProductPage = async (req: Request, res: Response) => {
    const products = await getProductList();
    return res.render("admin/product/show.ejs", {
        products: products
    })
}
const getAdminOrderPage = (req: Request, res: Response) => {
    return res.render("admin/order/show", {});
}
export { getDashboardPage, getAdminUserPage, getAdminProductPage, getAdminOrderPage };