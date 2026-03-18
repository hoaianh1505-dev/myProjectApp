import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local"
import { handleLogin, getUserWithRoleById } from "src/services/client/auth.service";

const configPassportLocal = async () => {
    passport.use(new LocalStrategy(function (username, password, done) {
        console.log(username, password)
        return handleLogin(username, password, done)
    }))

    // Save user id to session
    passport.serializeUser(function (user: any, callback) {
        callback(null, { id: user.id, username: user.username });
    });

    passport.deserializeUser(async function (user, callback) {
        const { id, username } = user as { id: string, username: string };
        const userInDB: any = await getUserWithRoleById(id);
        callback(null, { ...userInDB });
    });
}

export default configPassportLocal; 