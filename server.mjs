import express from 'express';
import cors from 'cors';


const app = express();
app.use (express.json());
app.use ( cors());
const port = process.env.PORT || 5000;

let users =[];

function randomNumber () {
    return Math.floor(Math.random() * 100000000000000);
}

app.post('/user',(req,res) =>{
   console.log(req.body);
 
    let newUser ={
        id:randomNumber(),
        fullName:req.body.fullName,
        userName:req.body.userName,
        password:req.body.password
    }

    users.push(newUser);
    res.send('user is created');
    
    
    })

    app.get('/user/:userId',(req,res) =>{

        let userId =req.params.userId;
        let isFound =false;

        for(let i = 0; i <users.length; i++){
       if(users[i].Id == userId){
        res.send(users[i]);
        isFound =true;
        break;
       }
        }
        if(!isFound){
            res.send('user not found');
        }
        })

    app.get('/users',(req,res) =>{
        
        res.send(users);
        })

        app.put('/user/:userId', (req, res) => {
          res.send('user is modified');

          let userId = req.params.userId;
          let userIndex =-1;

         for(let i=0; i<users.length; i++){
         if(users[i].id == userId){
          userIndex = i;
          break;
   
        }
            }
        if(userIndex === -1){
          res.send('user not found');
        }else{
            if(req.body.fullName){
                users[userIndex].fullName = req.body.fullName
            };
            if(req.body.userName){
                users[userIndex].userName = req.body.userName
            };
            if(req.body.password){
                users[userIndex].password = req.body.password
            };
            res.send(users[userIndex]);
        }

        })

        app.delete('/user:userId',(req ,res)=>{
            let userId = req.params.userId;
            let userIndex =-1;
  
           for(let i=0; i<users.length; i++){
           if(users[i].id == userId){
            userIndex = i;
            break;
     
          }
              }
              if(userIndex === -1){
                res.send('user not found');
              }else{
                users.splice(userIndex, 1);
                res.send('user is deleted');
              }
        })

        app.delete('/users',(req ,res)=>{
          users =[];
          res.send('all users deleted')
        })

app.use(express.json()); app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})