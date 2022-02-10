const request = require("request");
const chalk = require("chalk");

const geocode = require("./utlis/geocode");
const forecast = require("./utlis/forecast");

console.log(process.argv);
const address = process.argv[2];

if (!address) {
  console.log(chalk.inverse.red("Error:") + " Please enter Location!");
} else {
  geocode(address, (error, { longitude, lattitude, place } = {}) => {
    if (error) {
      return console.log(error);
    }

    console.log("Place: ", place);
    console.log("Longitude: " + longitude + ", Lattitude: " + lattitude);

    // Here we are using Callback Chaining and use data of "geocode" as an input for "forecast"
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
