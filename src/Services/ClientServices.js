import ClientModel from "../Models/ClientModel.js";
import jwt from 'jsonwebtoken';
const JWT_SECRET = 'your_very_secure_and_long_random_string';
class ClientServices
{
    async createClient(client)
    {
        const createdClient = new ClientModel(client);
        await createdClient.save();
        return createdClient;
    }   
    async searchClientByName(nombre)
    {
        const retrievedClients = await ClientModel.find({name: nombre});
        return retrievedClients;
    }
    async searchClientById(id)
    {
        const retrievedClient = await ClientModel.findById(id);
        return retrievedClient;
    }
    async login(email, password)
    {
        const retrievedClient = await ClientModel.findOne({email: email});
        console.log(retrievedClient);
        const isMatch = await retrievedClient.comparePassword(password)
        if(!isMatch) throw new Error("Credenciales invalidas");
        const payload = { id: retrievedClient.id};
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h'});
        return token;
    }
}

export default ClientServices;

