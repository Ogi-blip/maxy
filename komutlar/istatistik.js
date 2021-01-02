const Discord = require('discord.js'); 

exports.run = (client, message, args) => {

let istatistik = new Discord.MessageEmbed()
.setColor("#88ff00")
.setTimestamp()
.setAuthor(client.user.username, client.user.avatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL({dynamic: true}))
.setFooter(`Maxy`)
.setDescription(`
Bot verileri:

Toplam sunucu: **${client.guilds.cache.size}**
Toplam kullanıcı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**
Toplam kanal: **${client.channels.cache.size}**

Yazılım sürümleri:

Discord.js sürümü: **${Discord.version}**
Node.js sürümü: **${process.version}**

Gecikme süreleri:

Bot pingi: **${client.ws.ping}**
Mesaj gecikmesi: **${new Date().getTime() - message.createdTimestamp}**
`)

message.channel.send(istatistik)

};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ["i"], 
  permLevel: 0 
};

exports.help = {
  name: 'istatistik',
  description: 'İstatistik Gösterir',
  usage: 'istatistik'
};