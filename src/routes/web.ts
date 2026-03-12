import express, { Express } from 'express';
import { getCreateUserPage, getHomePage, getViewUser, postCreateUser, postDeleteUser, postUpdateUser } from '../controllers/user.controller';
import { getDashboardPage, getAdminUserPage, getAdminProductPage, getAdminOrderPage } from 'controllers/admin/dashboard.controller';
import fileUploadMiddleware from 'src/middleware/multer';


const webRoutes = (app: Express) => {
    const router = express.Router();
    router.get('/', getHomePage);

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
    app.use('/', router);
}

export default webRoutes;   