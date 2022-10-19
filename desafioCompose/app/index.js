const express = require('express')
const app = express()
app.use(express.json())
const port = 3000
const config = {
   host: 'db',
   user: 'root',
   password: 'root',
   database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const initDB = () => {
   const sqlCreatetable = `CREATE TABLE if not exists people(id int not null auto_increment, name varchar(255), primary key(id))`
   connection.query(sqlCreatetable)
}

app.post('/',(req,res)=>{
   const {name} = req.body
   const sqlInsertPeople = `INSERT INTO people(name) values('${name}')`
   connection.query(sqlInsertPeople)
   res.status(201).send()
})

app.get('/', (req, res) => {
   const sqlSelect = `SELECT * FROM people`;
   console.log(req.query)
   connection.query(sqlSelect,(err, result)=>{
      if(!err){
         res.send(`<h1>Full Cycle Rocks!</h1>
         ${result.map(people=>people.name).join("<BR>")}`)
      }

   })
})

app.listen(port, () => {
   initDB();
   console.log('server started..')
})