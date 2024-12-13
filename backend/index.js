import express from "express";
const {createTodo, updateTodo} = require('./type')
const app = express();

app.use(express.json());

app.get('/todos' ,(req, res) =>{
res.send("hey there");
})

app.post('/todo', () =>{
const createPayload = req.body;
const parsePayload = createTodo;

if(!parsePayload.success){
    res.status(411).json({
        msg : "You have sent a wrong input",
    })
    return;
}
else{
    //put it in mongoDB
}
})

app.put('/completed', () =>{
const updatePayload = req.body;
const parsePayload = updateTodo.safeParse(updatePayload);

if(!parsePayload.success){
    res.status(411).json({
        msg : "You have sent a wrong input",
    })
    return;
}
else{
    
}
})



app.listen(5000);