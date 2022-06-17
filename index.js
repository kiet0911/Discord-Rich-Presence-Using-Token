const express = require("express")
const app = express()




app.get("/", (req, res) => {
  res.send("hello hell!")
})

app.listen(3800, () => {
  console.log(`Project is ready!`)
})


const discord = require('discord.js-selfbot-v11');
const fs = require('fs');

const client = new discord.Client();
const config = require('./config.json');

const events = fs.readdirSync('./events/');
events.forEach(file => {
	const eventname = file.split('.')[0];
	const event = require(`./events/${file}`);
	client.on(eventname, event.bind(null, client));
});


client.login(process.env.token);


