import mysql from 'mysql'

const con = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Gmail@123",
    database: process.env.DB_NAME || "employeems"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
        console.log(err);
        
    } else {
        console.log("Connected")
    }
})

export default con;

