const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    script: "./src/script.js",
    login: "./src/login.js",
    validation: "./src/validation.js",
    createAUser: "./src/createAUser.js",
    UpdateAUser: "./src/UpdateAUser.js",
    deleteAUser: "./src/deleteAUser.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  }

};
