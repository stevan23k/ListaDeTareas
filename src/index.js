const express = require('express');
const morgan = require('morgan');
const cors = require("cors")

const Tareas = require('./rutas/Tareas.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(Tareas);

app.use((err, req, res, next)=>{
    return res.body.json({
        message: err.message
    })
})



app.listen(4000)
console.log('server on port 4000')