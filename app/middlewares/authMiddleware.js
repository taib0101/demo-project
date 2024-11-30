import { modelCollection } from "../models/model.js"
import { compare } from "bcrypt";

export const siginAuthentication = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await modelCollection.findOne({ email });
    if (user) {
        compare(password, user.password, (error, result) => {
            console.log(result);
            return result ? next() : res.status(401).send("password invalid");
        });
    } else {
        return res.status(404).send("user not found");
    }
}
//contribution
