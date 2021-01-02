const {MessageEmbed} = require('discord.js')
const db = require("quick.db")



   exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")){
    const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Ups Ups... | Komutu Kullanabilmek İçin Yeterli Yetkilere Sahip Değilsin.`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
    return message.channel.send(motion)
    };
  if(args[0] == "hepsi"){
    db.set(`kfrengel_${message.guild.id}.all`, true)
   const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Sistem **Tüm Kanallar** İçin Aktif Hale Geldi`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
    return message.channel.send(motion)
   }
   if(args[0] == "kanal"){
    let kanal = message.mentions.channels.first();
    if(!kanal){
     const motion = new MessageEmbed()
      .setColor("#88ff00")
      .setAuthor("Maxy")
      .setDescription(`Ups Ups... | Yanlış Kullanım m-küfür-engel kanal #kanal`)
      .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
      return message.channel.send(motion)
    }
    db.set(`kfrengel_${message.guild.id}.${kanal.id}`, true)
  const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Sistem Sadece ${kanal} İçin Aktif Hale Geldi`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
    return message.channel.send(motion)
   }
   if(args[0] == "kapat"){
   db.delete(`kfrengel_${message.guild.id}`)
   const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Sistem Başarılı Bir Şekilde Kapatıldı`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
    return message.channel.send(motion)
   }
  const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Ups Ups... Yanlış Kullanım | m-küfürengel hepsi/kanal/kapat**`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
   if(!args[0]) return message.channel.send(motion)
   }
   exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["küfürengel"],
    permLevel: 0
  };
  exports.help = {
    name: 'küfür-engel',
    description: '',
    usage: 'küfür-engel'
  };