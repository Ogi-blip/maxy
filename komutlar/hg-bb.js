const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
    

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let kanal = message.mentions.channels.first();

  if (!message.member.permissions.has('ADMINISTRATOR')) {
    const izinyok = new Discord.MessageEmbed()
	.setColor("#88ff00")
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok)
  }
 
  if (!kanal) {
    const hgbb = new Discord.MessageEmbed()
	.setColor("#88ff00")
    .setTitle('Başarısız')
    .setDescription(`Kanal Belitmen Lazım`)
      return message.channel.send(hgbb)
  }
    db.set(`hgbb_${message.guild.id}`,kanal.id)
    let lu = await db.fetch(`hgbb_${message.guild.id}`,kanal.id)
    
    const küfürengelcim6 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription(`Mesaj Kanalı ${kanal} Olarak Ayarlandı`)
    .setColor("#88ff00")
    return message.channel.send(küfürengelcim6)

  
  
};
 exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  exports.help = {
    name: 'hgbb',
    description: 'Logo Yaparsınız',
    usage: 'hgbb'
  };