import mysql from 'mysql2/promise';
const getConnection = async () => {
    const connection = await mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        database: 'myproject',
        password: 'anhgo01112',
    });
    return connection;
}
export default getConnection;