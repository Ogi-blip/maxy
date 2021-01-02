const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")){
    const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Ups Ups... | Komutu Kullanabilmek İçin Yeterli Yetkilere Sahip Değilsin`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
    return message.channel.send(motion)
    };
	
  if(args[0] == "aç"){
    db.set(`sa-as_${message.guild.id}`, true)
   const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Sistem Başarılı Bir Şekilde Aktif Edildi`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
    return message.channel.send(motion) 
  }   
  if(args[0] == "kapat"){
    db.delete(`sa-as_${message.guild.id}`)
   const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Sistem Başarılı Bir Şekilde De-Aktif edildi`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
    return message.channel.send(motion) 
  }   
   const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`Ups Ups.. Yanlış Kullanım | m-sa-as aç/kapat`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
   if(!args[0]) return message.channel.send(motion)
}
   exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0    
  };
  exports.help = {
    name: 'sa-as',
    description: '',
    usage: 'sa-as'
  };