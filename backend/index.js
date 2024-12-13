import express from "express";

const app = express();

app.use(express.json());

app.get('/todos' ,(req, res) =>{
res.send("hey there");
})

app.post('/todo', () =>{

})

app.put('/completed', () =>{

})

app.delete('/', () =>{

})

app.listen(5000);