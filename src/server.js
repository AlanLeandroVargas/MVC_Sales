import app from "./app.js";
import ClientServices from "./Services/ClientServices.js";

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
})
