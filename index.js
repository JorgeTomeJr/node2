const express = require('express')
const app = express()
const { engine } = require('express-handlebars')//Deixa eu instalar o bootstrap em toda a aplicação
const helpers = require('./helpers/handlebars')//importando o modulo helpers para codigo js

app.use(express.static('public'))//fazendo uso da pasta public onde está o css

app.engine('handlebars', engine(//fazendo uso da engine
    {helpers:helpers}
))
app.set('view engine', 'handlebars')//

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/sobre',(req,res)=>{
    res.render('sobre')
})

app.get('/users', (req,res) =>{
    let usuario = { 
        nome:"joao",
        email:"joao@gmail.com"
    }

    res.render('users',{
        user: usuario,
        auth: true
    })

})

app.get('/user/:id', (req,res) =>{
    const userId = req.params.id

    res.render('user', {
        userId: userId
    })
})


app.get('/jorge-tome', (req,res) =>{
    let eu ={
        nome:'Jorge Tomé',
        fone: '99441-3391',
        email: 'jorge.tome@gmail.com'

    }

    res.render('jorge-tome', {
        jorge:eu
    })
})


app.use((req,res)=>{
    res.status(404).render('404')
})

app.listen(8080, ()=>{
    console.log("Servidor iniciado")
})