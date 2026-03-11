import { Request, Response } from "express";
import { getAllUsers, getUserById, handleCreateUser, handleDeleteUser, handleUpdateUser } from "../services/user.service";
const getHomePage = async (req: Request, res: Response) => {
    //get user
    const users = await getAllUsers();
    return res.render('home.ejs', {
        users
    });
}
const getCreateUserPage = (req: Request, res: Response) => {
    res.render('create-user.ejs');
}
const postCreateUser = async (req: Request, res: Response) => {
    const { fullname, email, address } = req.body;
    await handleCreateUser(fullname, email, address);
    res.redirect('/');
}
const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id.toString());
    res.redirect('/');
}
const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    // get user by id
    const user = await getUserById(id.toString());
    return res.render('view-user.ejs', {
        user
    });
}
const postUpdateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { fullname, email, address } = req.body;
    await handleUpdateUser(id.toString(), fullname, email, address);
    res.redirect('/');
}
export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser }