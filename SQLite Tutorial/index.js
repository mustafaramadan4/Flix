const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./mock.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message)

  console.log("Connection successful")
})

// db.run("CREATE TABLE users(first_name, last_name, handle_name, email, password)")

const insert_sql = "INSERT INTO users(first_name, last_name, handle_name, email, password) VALUES(?,?,?,?,?)"

// db.run(insert_sql, 
//   ["Umar", "Khalid", "umar.khalid", "umark96@hotmail.com", "123"],
//   (err) => {
//     if (err) return console.error(err.message)  

//     console.log("A new row has been created")
//   })

const query_sql = "SELECT * FROM users"

db.all(query_sql, [], (err, rows) => {
  if (err) return console.error(err.message)
  
  rows.forEach((row) => {
    console.log(row)
  })
})

db.close((err) => {
  if (err) return console.error(err.message)
}) 