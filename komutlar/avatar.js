const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let kişicikabi = message.mentions.users.first() || message.author
 let avatarcım = new Discord.MessageEmbed()
  .setColor("#88ff00")
  .setImage(kişicikabi.avatarURL())
  
  message.channel.send(avatarcım)
  
  };
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["pp"],
    permLevel: 0
};
exports.help = {
    name: 'avatar',
    description: 'Sunucuya Yeni Katılanlara Ayarladığınız Rolü Verir',
    usage: 'avatar'
}