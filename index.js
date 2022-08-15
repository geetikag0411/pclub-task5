var mysql = require("mysql2");
const readline = require("readline-sync");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Umesh12#",
  database: "mydb",
});
/*
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE stu (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(25),roll_no INT, branch VARCHAR(25),userid VARCHAR(25))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO stu (name,roll_no,branch,userid) VALUES ?";
  var values = [
    ["geetika", 210392, "cse", "geetika21"],
    ["apoorva", 210169, "cse", "apoorva21"],
    ["talin", 211054, "cse", "talin21"],
    ["krish", 210592, "cse", "krish21"],
    ["varun", 211092, "cse", "varun21"],
    ["aman", 210032, "mse", "aman21"],
    ["harshini", 210399, "mse", "harshini21"],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});*/
console.log("Enter\n 1 for Adding a student entry\n");
console.log("2 for Deleting the student entry\n");
console.log(
  "3 for FIltering all student entries w.r.t a certain post parameter or query parameter\n"
);
console.log("4 for Editing a student entry\n");
let a = Number(readline.question());
if (a == 1) {
  console.log("Enter no. of students to be added\n");
  let b = Number(readline.question());

  for (let i = 0; i < b; ++i) {
    let v1 = String(readline.question());
    let v2 = Number(readline.question());
    let v3 = String(readline.question());
    let v4 = String(readline.question());
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      var sql =
        "INSERT INTO stu (name, roll_no,branch,userid) VALUES ('" +
        v1 +
        "'," +
        v2 +
        ",'" +
        v3 +
        "','" +
        v4 +
        "')";
      con.query(sql, function (error, result) {
        if (error) throw error;
        console.log("1 record inserted, ID: " + result.insertId);
      });
    });
  }
} else if (a == 2) {
  console.log("Enter no. of students to be deleted\n");
  let b = Number(readline.question());
  for (let i = 0; i < b; ++i) {
    console.log("Enter roll no. of the person to be deleted");
    let v2 = Number(readline.question());
    con.connect(function (err) {
      if (err) throw err;
      var sql = "DELETE FROM stu WHERE roll_no =" + v2 + "";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
      });
    });
  }
} else if (a == 3) {
  console.log("Enter 1 to sort by name and 2 to sort by roll no.\n");
  let v2 = Number(readline.question());
  if (v2 == 1) {
    con.connect(function (err) {
      if (err) throw err;
      console.log("connected");
      con.query("SELECT * FROM stu ORDER BY name", function (err, result) {
        if (err) throw err;
        console.log(result);
      });
    });
  } else if (v2 == 2) {
    con.connect(function (err) {
      if (err) throw err;
      con.query("SELECT * FROM stu ORDER BY roll_no", function (err, result) {
        if (err) throw err;
        console.log("connected");
        console.log(result);
      });
    });
  } else {
    console.log("Invalid");
  }
} else if (a == 4) {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Enter thr roll no.\n");
    let c = Number(readline.question());
    console.log("Enter 1 to update name,3 to update branch,4 to update id\n");
    let b = Number(readline.question());
    let d = String(readline.question());
    if (b == 1) {
      var sql = "UPDATE stu SET name = '" + d + "' WHERE roll_no =" + b + "";
    } else if (b == 2) {
      "UPDATE stu SET branch = '" + d + "' WHERE roll_no =" + b + "";
    } else if (b == 3) {
      "UPDATE stu SET userid = '" + d + "' WHERE roll_no =" + b + "";
    }
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
} else {
  console.log("Invalid");
}
