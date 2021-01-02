const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {
  
  message.channel.send(`https://dummyimage.com/500x300/36393f/ffffff.png&text=${client.ws.ping}`)
  
 
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: 'ping',
    description: 'Sunucuya Yeni Katılanlara Ayarladığınız Rolü Verir',
    usage: 'ping'
}