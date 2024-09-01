import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import ClientServices from '../Services/ClientServices.js';

const clientServices = new ClientServices();

const JWT_SECRET = 'your_very_secure_and_long_random_string';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
};
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await clientServices.searchClientById(jwt_payload.id);
        if (user) {
            return done(null, user);
        }
        return done(null, false, { message: 'No esta autorizado'});
    } catch (err) {
        return done(err, false);
    }
}));

export default passport;