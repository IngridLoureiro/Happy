const express = require('express')
const server = express()
const path = require('path')
const pages = require('./pages')


server
.use(express.urlencoded({extended: true})) // Utilizando body-parser (corpo da requisição)
.use(express.static('public')) //Utilizando arquivos estáticos

// Configurando Template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// Rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// Ligando o servidor
server.listen(5500)
  
