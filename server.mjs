import express from 'express';
import cors from 'cors';


const app = express();
app.use (express.json());
app.use ( cors());
const port = process.env.PORT || 5000;

let users =[];
app.post('/user',(req,res) =>{
   console.log(req.body)
    users.push(req.body);
    res.send('user is created');
    
    
    })
    app.get('/user',(req,res) =>{
        
        res.send(users)
        })


app.use(express.json()); app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})