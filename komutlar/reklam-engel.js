const {MessageEmbed} = require('discord.js')
const db = require("quick.db")


   exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")){
    const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Ups Ups... | Komutu Kullanabilmek İçin Yeterli Yetkilere Sahip Değilsin`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
    return message.channel.send(motion)
    };

   if(args[0] == "hepsi"){
    db.set(`reklamEngel_${message.guild.id}.all`, true)
   const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Sistem **Tüm Kanallar** İçin Aktif Hale Getirildi`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
    return message.channel.send(motion)
   }
   if(args[0] == "kanal"){
    let kanal = message.mentions.channels.first();
    db.set(`reklamEngel_${message.guild.id}.${kanal.id}`, true)
  const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy Bot")
    .setDescription(`Sistem Sadece **${kanal}** İçin Aktif Hale Getirildi`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
    return message.channel.send(motion)
   }
   if(args[0] == "kapat"){
   db.delete(`reklamEngel_${message.guild.id}`)
   const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`**Reklam Engel** Sistemi Başarılı Bir Şekilde De-Aktif Hale Getirildi`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
    return message.channel.send(motion)
   }
  const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Ups Ups | m-reklam-engel **kanal/hepsi/kapat**`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
     if(!args[0]) return message.channel.send(motion)
   }
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["reklamengel"],
  permLevel: 0
};
exports.help = {
  name: 'reklam-engel',
  description: '',
  usage: 'reklam-engel'
};