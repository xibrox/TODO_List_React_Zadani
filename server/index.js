const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "loginsystemreact",
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  con.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password], 
    (err, result) => {
      if (result) {
        res.send(result);
      }
      else {
        res.send({message: "Enter correct asked details!"})
      }
    }
  );
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
    (err, result) => {
      if (err) {
        req.setEncoding({err: err});
      }
      else {
        if (result.length > 0) {
          res.send(result);
        }
        else {
          res.send({message: "Wrong username or password!"})
        }
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running backend server");
});


// app.use(cors());
// app.use(express.json());

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));

// // Handle GET requests to /api route
// app.get("/api", (req, res) => {
//     res.json({ 
//         id: 1,
//         name: "Tonda"
//     });
// });

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });