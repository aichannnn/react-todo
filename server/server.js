const PORT = process.env.PORT ?? 8002
const express = require('express')
const app = express()
const pool = require('./db')
const cors = require("cors")

app.use(cors())
app.use(express.json())

//post all todos
// app.post('/todos',async(req, res)=>{
//     const {Description,title,progress}=req.body; 
//     try{
//        const todos =  await pool.query("INSERT INTO todoo(Description, title, progress) VALUES ($1, $2,$3) RETURNING *",
//        [Description, title, progress])
//        res.json(todos.rows)
//     }catch(err){
//         console.error(err);
//     }
// })

//get all todos
app.get('/todos/:userEmail', async(req, res)=>{
    const {userEmail} = req.params
    console.log(userEmail)
    try{
        const todos = await pool.query('SELECT * FROM todoo WHERE useremail =$1',[userEmail])

        res.json(todos.rows)
    }catch(err){
        console.error(err)
    }
})

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))