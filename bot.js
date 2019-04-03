const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("459674104270946326")
setInterval(function() {
channel.send(`سبيتني هااا`);
}, 30)
})

client.login("NTU5NjY2ODAxODE5MjU0Nzk3.XKSqBw.Iy5jGYmWlDqID7CeB8y8c57kdgE");
