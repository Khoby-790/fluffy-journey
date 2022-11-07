const mysql = require("mysql");
const datat = require("./test.json");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  //   const query = "CREATE DATABASE IF NOT EXISTS gelatest";
  //   con.query(query, function (err, result) {
  //     if (err) throw err;
  //     console.log("Database created");
  //   });

  //   const tableQuery =
  //     "CREATE TABLE gelatest. ( id int NOT NULL AUTO_INCREMENT, PRIMARY KEY (id), financialInstitutionIDNo VARCHAR(30), Reg_AhafoRegion tinyint NOT NULL, Reg_Ashanti tinyint NOT NULL, Reg_BonoEast tinyint NOT NULL, Reg_Bono tinyint NOT NULL, Reg_Central tinyint NOT NULL, Reg_Eastern tinyint NOT NULL, Reg_GreaterAccra tinyint NOT NULL, Reg_NorthEast tinyint NOT NULL, Reg_Northern tinyint NOT NULL, Reg_Oti tinyint NOT NULL, Reg_Savannah tinyint NOT NULL, Reg_UpperEast tinyint NOT NULL, Reg_UpperWest tinyint NOT NULL, Reg_Volta tinyint NOT NULL, Reg_WesternNorth tinyint NOT NULL, Reg_Western tinyint NOT NULL)";

  //   con.query(tableQuery, function (err, result) {
  //     if (err) throw err;
  //     console.log("Database created");
  //   });

  const query =
    "INSERT INTO gelatest.tbl_fi_regional_presences (fkFinancialInstitutionIDNo,Reg_AhafoRegion,Reg_Ashanti,Reg_BonoEast,Reg_Bono ) VALUES ?";

  datat.forEach((item) => {
    const values = [
      [
        item.financialInstitutionIDNo,
        item.Reg_AhafoRegion,
        item.Reg_Ashanti,
        item.Reg_BonoEast,
        item.Reg_Bono,
      ],
    ];
    con.query(query, [values], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
});
