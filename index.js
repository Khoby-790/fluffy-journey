const fs = require("fs");
const { parse } = require("csv-parse");

const items = [];

fs.createReadStream("./test.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    processRow(row);
  });

function processRow(data) {
  const item = {
    financialInstitutionIDNo: data[1],
    Reg_AhafoRegion: convertToBoolean(data[4]),
    Reg_Ashanti: convertToBoolean(data[5]),
    Reg_BonoEast: convertToBoolean(data[6]),
    Reg_Bono: convertToBoolean(data[7]),
    Reg_Central: convertToBoolean(data[8]),
    Reg_Eastern: convertToBoolean(data[9]),
    Reg_GreaterAccra: convertToBoolean(data[10]),
    Reg_NorthEast: convertToBoolean(data[11]),
    Reg_Northern: convertToBoolean(data[12]),
    Reg_Oti: convertToBoolean(data[13]),
    Reg_Savannah: convertToBoolean(data[14]),
    Reg_UpperEast: convertToBoolean(data[15]),
    Reg_UpperWest: convertToBoolean(data[16]),
    Reg_Volta: convertToBoolean(data[17]),
    Reg_WesternNorth: convertToBoolean(data[18]),
    Reg_Western: convertToBoolean(data[19]),
  };
  //   console.log(item);
  items.push(item);
  fs.createWriteStream("./test.json").write(JSON.stringify(items, null, 2));
}

function convertToBoolean(value) {
  if (value === "Yes") {
    return true;
  } else {
    return false;
  }
}
