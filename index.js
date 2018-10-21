const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level")
const fs = require("fs");

client.on("ready", () => {
  console.log("[CLIENT_READY]". `Logged in as ${client.user.username}!`)
});
