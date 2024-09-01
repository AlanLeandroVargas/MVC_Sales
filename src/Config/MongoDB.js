import mongoose from "mongoose";

const MongoDB = async () => 
    {
        try
        {
            await mongoose.connect('mongodb://localhost:27017/Ventas');
            console.log('Se ha conectado a la base de datos');
        }
        catch(error)
        {
            console.log(error?.message);
            process.exit(1);
        }
    }

export default MongoDB;