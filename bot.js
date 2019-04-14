const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("556881769140453384")
setInterval(function() {
channel.send(`شوف السبام يا حليون);
}, 30)
})

client.login(process.env.BOT_TOKEN);
