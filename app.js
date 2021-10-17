const request = require("request");
const chalk = require("chalk");

const geocode = require("./utlis/geocode");
const forecast = require("./utlis/forecast");

// console.log(process.argv);

if (!process.argv[2]) {
  console.log(chalk.inverse.red("Error:") + " Please enter Location!");
} else {
  geocode(process.argv[2], (error, { longitude, lattitude, place }) => {
    if (error) {
      return console.log(error);
    }

    console.log("Place: ", place);
    console.log("Longitude: " + longitude + ", Lattitude: " + lattitude);

    forecast(lattitude, longitude, (error, data) => {
      if (error) {
        return console.log(error);
      }
      console.log("Weather: ", data);
    });
  });
}
// forecast(73.074144, 33.719361, (error, data) => {
//   console.log("Error: ", error);
//   console.log("Data: ", data);
// });
