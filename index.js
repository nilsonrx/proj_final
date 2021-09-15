const express = require('express')
const cors = require('cors')
const db = require('./conn')
const app = express ()
const routers = require('./routers/routers')

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const Conn = require('./conn');
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;
  
Conn(db_url, db_user, db_pass, db_data);


let corsoption = {origin:'http://localhost:3000'} 
app.use (cors(corsoption))
app.use (express.json())
app.use (express.urlencoded({extended:true}))
db.on(console.error('Erro de conexão'))
app.get ("/", (req , res) => {
    res.send('Rodando');
} ) 

app.use ('/api', routers)

const PORT = 4000

app.listen(PORT, () => console.log(`Servidor Rodando em http://localhost:${PORT}`) )