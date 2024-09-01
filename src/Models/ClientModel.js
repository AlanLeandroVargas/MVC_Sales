import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const clientSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        lastName: {type: String, required: true},
        phoneNumber: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true}
    });
clientSchema.pre('save', async function (next)
{
    if(!this.isModified('password'))
        {
            return next();
        }
    try
    {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch (error)
    {
        next();
    }
});
clientSchema.methods.comparePassword = function (password) {    
    return bcrypt.compare(password, this.password);
};

const ClientModel = mongoose.model('Client', clientSchema);
export default ClientModel;