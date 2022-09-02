//const express = require('express') Forma de vieja importar 
import  express  from 'express'
//Traigo libreria que controla variables de entorno
import * as dotenv from 'dotenv'
dotenv.config()
console.log(process.env.PORT)

//app es la variable que almacena toda las funcionalidades de express
const app = express()

// ATENDIENDO PETICIONES Y RESPONDIENDO

//1.PETICION DE TIPO GET para buscar todas las habitaciones

app.get('/hotelessanfe/habitaciones', function (req, res) {
  res.send('estoy buscando todas las habitaciones')
})
//2.PETICION DE TIPO GET para buscar habitacion por id

app.get('/hotelessanfe/habitacion/:id', function (req, res) {
    res.send('Estoy buscando una habitacion por id')
  })
//3.PETICION DE TIPO POST para agregar habitacion en BD

  app.post('/hotelessanfe/habitacion', function (req, res) {
    res.send('Estoy agregando una habitacion')
  })

//4.PETICION DE TIPO PUT para editar una habitacion

  app.put('/hotelessanfe/modificarhabitacion', function (req, res) {
    res.send('Estoy actualizando una habitacion')
  })

//ENCEMDIENDO EL SERVIDOR EN EL puerto 3000
app.listen(process.env.PORT,function () {
    console.log("Servidor Encendido")
})