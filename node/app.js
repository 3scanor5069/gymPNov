import express from 'express';
import cors from 'cors';
import db from './database/db.js'; //importamos la conexión a la base de datos
import blogRoutes from './routes/routes.js'; //importamos nuestro enrutador
const app = express();

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('conexión exitosa con la DB')
} catch (error) {
    console.log(`el error de conexion es: ${error} `) 

}
/*app.get('/', (req, res)=>{
    res.send('HOLA MAMAPINGAS')
})*/

app.listen(8000, ()=>{
    console.log('server is runing in http://localhost:8000/')
})



