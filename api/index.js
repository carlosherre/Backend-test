const express = require("express");
const users = require("./users/router");
const events = require("./events/router");
const api= express();

api.use("/users", users);
api.use("/events", events);

module.exports = api;
