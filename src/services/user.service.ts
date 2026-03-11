import getConnection from "../config/database";

const handleCreateUser = async (fullname: string, email: string, address: string) => {
    const connection = await getConnection();
    try {
        const sql = 'INSERT INTO users (name, email, address) VALUES (?, ?, ?)'
        const values = [fullname, email, address];
        const [result, fileds] = await connection.execute(sql, values)
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}
const getAllUsers = async () => {
    const connection = await getConnection();
    try {
        const [result, field] = await connection.query(
            'SELECT * FROM users'
        )
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}
const handleDeleteUser = async (id: string) => {
    try {
        const connection = await getConnection();
        const sql = 'DELETE FROM `users` WHERE `id` = ? ';
        const values = [id];
        const [resul, fields] = await connection.execute(sql, values)
    } catch
    (err) {
        console.log(err)
    }
}
const getUserById = async (id: string) => {
    try {
        const connection = await getConnection();
        const sql = 'SELECT * FROM `users` WHERE `id` = ? ';
        const values = [id];
        const [result, fields] = await connection.execute(sql, values)
        return result[0];
    } catch (err) {
        console.log(err)
    }
}
const handleUpdateUser = async (id: string, fullname: string, email: string, address: string) => {
    try {
        const connection = await getConnection();
        const sql = 'UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?';
        const values = [fullname, email, address, id];
        const [result, fields] = await connection.execute(sql, values)
    } catch (err) {
        console.log(err)
    }
}
export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, handleUpdateUser }