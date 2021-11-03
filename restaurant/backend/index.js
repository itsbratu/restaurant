const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const users_db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "xyzabcwasd2002",
    database : "usersdb"
});

app.post("/add" , (req , res)=>{
    const user_add = req.body.user;
    const {nick , firstName , lastName , pass , rePass , email} = user_add;

    users_db.query(
        "INSERT INTO users (email , nickname , firstname , lastname , pass , repass) VALUES (?,?,?,?,?,?)",
        [email , nick , firstName , lastName , pass , rePass],
        (err , result) => {
            if(err){
                console.log(err);
            }else{
                res.send("New user inserted!")
            }
        }
    );
});

app.listen(4000 , () =>{
    console.log("Server running fine!")
})