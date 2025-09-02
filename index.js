const http=require("http");

const mysql=require("mysql2");
const server=http.createServer((req,res)=>{
    res.end("hello bro backend");
})

const db=mysql.createConnection({
    host:"localhosst",
    user:"root",
    password:"@System123"
})

db.connect((err)=>{
    console.log("database is connected");

    const table = "CREATE TABLE IF NOT EXISTS stu (name VARCHAR(255), class VARCHAR(255))";
    db.query(table,(err,res)=>{
        console.log("table is created",res);
    })
})
server.listen(2000,()=>console.log("server is connected"));