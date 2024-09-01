import { Router } from "express";
import ClientController from "../Controllers/ClientController.js";
import ClientServices from "../Services/ClientServices.js";


const clientServices = new ClientServices();
const clientController = new ClientController(clientServices);
const ClientRouter = Router();

ClientRouter.post('/client', clientController.createClient);
ClientRouter.get('/clients/:name', clientController.searchClientByName);
ClientRouter.post('/login', clientController.login);
export default ClientRouter;

