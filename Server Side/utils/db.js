import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gmail@123",
    database: "employeems"
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

