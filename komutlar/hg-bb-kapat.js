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
  
    
    db.delete(`hgbb_${message.guild.id}`,kanal.id)

   const küfürengelcim21 = new Discord.MessageEmbed()
   .setColor("#88ff00")
    .setTitle('Başarılı')
    .setDescription('Hg-bbyi Kapattım')
    return message.channel.send(küfürengelcim21)
   
  

  
  
  
};
 exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  exports.help = {
    name: 'hgbb-kapat',
    description: 'Logo Yaparsınız',
    usage: 'hgbb-kapat'
  };