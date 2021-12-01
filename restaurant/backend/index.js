const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors')
const crypto = require('crypto')

app.use(cors())
app.use(express.json())

let generateSalt = rounds => {
    if (rounds >= 15) {
        throw new Error(`${rounds} is greater than 15,Must be less that 15`);
    }
    if (typeof rounds !== 'number') {
        throw new Error('Rounds param must be a number');
    }
    if (rounds == null) {
        rounds = 12;
    }
    return crypto.randomBytes(Math.ceil(rounds / 2)).toString('hex').slice(0, rounds);
};

let hasher = (password, salt) => {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let value = hash.digest('hex');
    return {
        salt: salt,
        hashedpassword: value
    };
};

let hash = (password, salt) => {
    if (password == null || salt == null) {
        throw new Error('Must Provide Password and salt values');
    }
    if (typeof password !== 'string' || typeof salt !== 'string') {
        throw new Error('Password must be a string and salt must either be a salt string or a number of rounds');
    }
    return hasher(password, salt);
};

let compare = (password , hashPass , salt) =>{
    let passData = hash(password ,salt).hashedpassword;
    if(passData === hashPass){
        return true;
    }else{
        return false;
    }
}

const users_db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "xyzabcwasd2002",    
    database : "usersdb"
});

app.post("/register" , async (req , res)=>{
    const user_add = req.body.user;
    const {nick , firstName , lastName , pass , rePass , email} = user_add;
    const salt = generateSalt(10);
    let new_user = {
        nick : nick ,
        firstName : firstName , 
        lastName : lastName , 
        email : email ,
        pass : hash(pass , salt)
    }

    users_db.query(
        "INSERT INTO users (email , nickname , firstname , lastname , pass , salt) VALUES (?,?,?,?,?,?)",
        [new_user.email , new_user.nick , new_user.firstName , new_user.lastName , new_user.pass.hashedpassword , new_user.pass.salt],
        (err , _) => {
            if(err){
                console.log(err);
            }else{
                res.send("New user inserted!")
            }
        }
    );
});

app.post("/addItem" , async (req , res) => {
    const addEntry = req.body.entry;
    const {idItem , user , quantity} = addEntry;

    users_db.query(
        "SELECT * FROM cart WHERE idItem = ? AND user = ?",
        [idItem , user],
        (errExists , row) => {
            if(errExists){console.log(errExists);}
            else{
                if(row && row.length){
                    users_db.query(
                        "UPDATE cart SET quantity = ? WHERE (user = ? AND idItem = ?)",
                        [row[0].quantity + 1 , user , idItem],
                        (errUpdate , _) => {
                            if(errUpdate){console.log(errUpdate)}
                        }
                    )
                    res.send(`Quantity for item ${idItem} and user ${user} UPDATED!`);
                }else{
                    users_db.query(
                        "INSERT INTO cart (user , idItem , quantity) VALUES (?,?,?)",
                        [user , idItem , quantity],
                        (errInsert , _) => {
                            if(errInsert){console.log(errInsert)}
                        }
                    )
                    res.send(`Item ${idItem} for user ${user} ADDED!`);
                }
            }
        }
    )
})

app.post("/deleteItem" , async (req , res) => {
    const deleteEntry = req.body.entry;
    const {idItem , user , quantity} = deleteEntry;

    users_db.query(
        "SELECT * FROM cart WHERE idItem = ? AND user = ?",
        [idItem , user],
        (errExists , row) => {
            if(errExists){console.log(errExists);}
            else{
                if(quantity != 1 || row[0].quantity == 1){
                    users_db.query(
                        "DELETE FROM cart WHERE (user = ? AND idItem = ?)",
                        [user , idItem],
                        (errDelete , _) => {
                            if(errDelete){console.log(errDelete);}
                        }
                    )
                    res.send(`Quantity for item ${idItem} and user ${user} UPDATED!`);
                }else{
                    users_db.query(
                        "UPDATE cart SET quantity = ? WHERE (user = ? AND idItem = ?)",
                        [row[0].quantity - 1 , user , idItem],
                        (errUpdate , _) => {
                            if(errUpdate){console.log(errUpdate)}
                        }
                    )
                    res.send(`Quantity for item ${idItem} and user ${user} UPDATED!`);
                }
            }
        }
    )
})


app.post("/myItems" , async (req , res) => {
    const currUser = req.body.user;
    users_db.query(
        "SELECT * FROM cart WHERE (user = ?)",
        [currUser],
        (err , resultItems) => {
            if(err){
                console.log(err);
            }else{
                res.send(resultItems);
            }
        }
    )
})

app.post("/login" , async (req , res) =>{
    const user_mail = req.body.mail;
    const user_pass = req.body.pass;
    
    users_db.query(
        "SELECT * FROM users" , (err , result) => {
            if(err){
                console.log(err);
            }else{
                let foundUser = false;
                result.forEach((currUser)=>{
                    if(currUser.email === user_mail){
                        foundUser = true;
                    }
                })
                if(foundUser){
                    users_db.query(
                            `SELECT pass , salt FROM users WHERE email = "${user_mail}"`, (err , result) => {
                                if(err){
                                    console.log(err);
                                }else{
                                    let passBD = {
                                        hashPass : result[0].pass , 
                                        saltPass : result[0].salt
                                    };
                                    let matchesUser = compare(user_pass , passBD.hashPass , passBD.saltPass);
                                    res.send(matchesUser);
                                }
                            }
                        )
                }else{
                    res.send("Error!");
                }
            }
        }
    )
})

app.get("/all" , (_ , res) => {
    users_db.query(
        "SELECT * FROM users" , (err , result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
    )
})

app.get("/all_reviews" , (_ , res) => {
    users_db.query(
        "SELECT * FROM reviews" , (err , result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
    )
})

app.listen(4000 , () =>{
    console.log("Server running fine!")
})