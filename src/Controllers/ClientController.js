class ClientController
{
    constructor(clientServices)
    {
        this.clientServices = clientServices;
        this.createClient = this.createClient.bind(this);
        this.searchClientByName = this.searchClientByName.bind(this);
        this.login = this.login.bind(this);
    }

    async createClient(req, res)
    {
        const {client} = req.body;
        const createdClient = await this.clientServices.createClient(client);
        res.status(201).send(createdClient.id);
    }
    async searchClientByName(req, res)
    {
        const {name} = req.params;
        const retrievedClients = await this.clientServices.searchClientByName(name);
        res.status(200).send(retrievedClients);
    }
    async login(req, res)
    {
        const {email, password} = req.body;
        const token = await this.clientServices.login(email, password);
        res.status(200).send(token);
    }
}

export default ClientController;