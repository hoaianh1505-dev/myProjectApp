import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.service";
const getHomePage = (req: Request, res: Response) => {
    res.render('home.ejs');
}
const getCreateUserPage = (req: Request, res: Response) => {
    res.render('create-user.ejs');
}
const postCreateUser = (req: Request, res: Response) => {
    const { fullname, email, address } = req.body;
    handleCreateUser(fullname, email, address);
    res.redirect('/');
}
export { getHomePage, getCreateUserPage, postCreateUser }