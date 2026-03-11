import express, { Express } from 'express';
import { getCreateUserPage, getHomePage, getViewUser, postCreateUser, postDeleteUser, postUpdateUser } from '../controllers/user.controller';

const webRoutes = (app: Express) => {
    const router = express.Router();
    router.get('/', getHomePage);
    router.get('/create-user', getCreateUserPage);
    router.post('/handle-create-user', postCreateUser);
    router.post('/handle-delete-user/:id', postDeleteUser);
    router.get('/handle-view-user/:id', getViewUser);
    router.post('/handle-update-user/:id', postUpdateUser);
    app.use('/', router);
}

export default webRoutes;   