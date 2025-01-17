/*
// Importing the MySQL library
const mysql = require('mysql2');
//Importing database credentials
require('dotenv').config({ debug: true });

let results = null;

 function query(query){
    let connection = null;
    
   function connectDB(){

// Creating a connection
  connection = mysql.createConnection({
  host: process.env.DB_HOST,        // Database host (usually 'localhost')
  user: process.env.DB_USER,             // MySQL username
  password: process.env.DB_PASSWORD, // MySQL password
  database: process.env.DB_NAME   // Name of the database you created
});
// Connecting to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to the MySQL database!');
});
}
//Query Function
function apply_query(query){
    connection.query(`${query}`, (err, result) => {
      if (err) {
        console.error('Error executing query:', err.message);
      }
      
      results = result;
      return results;
    });
    return results;
    }
// Close the connection function
function closeDB(){
    setTimeout(()=>{
        connection.end((err)=>{
            if(err){
                console.log('Error ending the connection:',err);
                return;
            }
            console.log("Connection ended successfully...");
        });
    },1000);
}
 //function for querying to database

    connectDB();
    apply_query(query);
    closeDB();
    return results;
}


// Updating User Details
function update_details(){
    full_name = document.getElementById("Name").value;
    email_id = document.getElementById("Email").value;
    mobile_number = document.getElementById("MobileNumber").value;
    message = document.getElementById("Message").value;
    button = document.getElementById("Submit_Button");
    console.log(button);

    button.addEventListener('event', ()=>{
        query(`INSERT INTO users(name,email_id,mobile_number,message) VALUES (${full_name},${email_id},${mobile_number},${message})`);
        console.log("Details Updated....");
    });
}



update_details();

query('SELECT * FROM users');
setTimeout(()=>{
    console.log(results);
},2000)

*/

