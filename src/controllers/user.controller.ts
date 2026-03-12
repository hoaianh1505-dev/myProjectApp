import { Request, Response } from "express";
import { getAllRoles, getAllUsers, getUserById, handleCreateUser, handleDeleteUser, handleUpdateUser } from "../services/user.service";
const getHomePage = async (req: Request, res: Response) => {
    //get user
    const users = await getAllUsers();
    return res.render('home.ejs', {
        users
    });
}
const getCreateUserPage = async (req: Request, res: Response) => {
    const roles = await getAllRoles();
    res.render('admin/user/create', {
        roles
    });
}
const postCreateUser = async (req: Request, res: Response) => {
    const { fullname, username, phone, role, address } = req.body;
    const file = req.file;
    const avatar = file?.filename ?? null;
    await handleCreateUser(fullname, username, address, phone, avatar, role);
    res.redirect('/admin/user');
}
const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id.toString());
    res.redirect('/admin/user');
}
const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const roles = await getAllRoles();
    // get user by id
    const user = await getUserById(id.toString());
    return res.render('admin/user/detail', {
        id,
        user,
        roles

    });
}
const postUpdateUser = async (req: Request, res: Response) => {
    const { id, fullName, phone, role, address } = req.body;
    const file = req.file;
    const avatar = file?.filename ?? undefined; // nếu lỗi thì để undefine cho đỡ bug
    await handleUpdateUser(id.toString(), fullName, phone, role, address, avatar);
    res.redirect('/admin/user');
}
export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser }