import { getCartPage, getProductPage, postAddProductToCart } from '../controllers/client/product.controller';
import express, { Express } from 'express';
import { getCreateUserPage, getHomePage, getViewUser, postCreateUser, postDeleteUser, postUpdateUser } from '../controllers/user.controller';
import { getDashboardPage, getAdminUserPage, getAdminProductPage, getAdminOrderPage } from 'controllers/admin/dashboard.controller';
import fileUploadMiddleware from 'src/middleware/multer';
import { getAdminCreateProductPage, getViewProduct, postAdminCreateProduct, postDeleteProduct, postUpdateProduct } from 'controllers/admin/product.controller';
import { getLoginPage, getRegisterPage, getSuccessRedirectPage, postRegister } from 'controllers/client/auth.controller';
import passport from 'passport';
import { isAdmin, isLogin } from 'src/middleware/auith';
import { postLogout } from 'src/services/client/auth.service';

const router = express.Router();
const webRoutes = (app: Express) => {

    router.get('/', getHomePage);
    router.get("/sucess-redirect", getSuccessRedirectPage)
    router.get("/product/:id", getProductPage)
    router.get("/login", getLoginPage)
    router.get("/register", getRegisterPage)
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/sucess-redirect",
        failureRedirect: "/login",
        failureFlash: true
    }))
    router.post("/logout", postLogout)
    router.post("/register", postRegister)
    router.post("/add-product-to-cart/:id", postAddProductToCart)
    router.get("/cart", getCartPage)

    //admin route
    router.get('/admin', getDashboardPage);
    router.get('/admin/user', getAdminUserPage);
    router.get('/admin/create-user', getCreateUserPage);
    router.post('/admin/delete-user/:id', postDeleteUser);
    router.get('/admin/view-user/:id', getViewUser);
    router.post('/admin/update-user/:id', fileUploadMiddleware('avatar'), postUpdateUser);
    router.post('/admin/handle-create-user', fileUploadMiddleware('avatar'), postCreateUser);
    router.get('/admin/product', getAdminProductPage)
    router.get('/admin/order', getAdminOrderPage)
    router.get("/admin/create-product", getAdminCreateProductPage)
    router.post("/admin/create-product", fileUploadMiddleware("image", "images/product"), postAdminCreateProduct)
    router.post("/admin/delete-product/:id", postDeleteProduct)
    router.get("/admin/view-product/:id", getViewProduct)
    router.post("/admin/update-product/:id", fileUploadMiddleware("image", "images/product"), postUpdateProduct)

    app.use("/", isAdmin, router);
}

export default webRoutes;   