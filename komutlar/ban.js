const {MessageEmbed} = require('discord.js')
   exports.run = async(client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Yetkin Yok")
     if(!message.guild.members.cache.get(client.user.id).hasPermission("BAN_MEMBERS")) return;
     let kişi = message.mentions.users.first()
     let sebep = args.slice(1).join(" ")
     if(!kişi) {
       const motion = new MessageEmbed()
.setColor("#88ff00")
.setAuthor("Maxy")
.setDescription(`**:hammer: | Yanlış Kullanım: m-ban @kişi**`)
.setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
return message.channel.send(motion)
     }// knk iki dk salsana bi
     if(!sebep) sebep = `Sebep: Belirtilmemiş`
     
     if(kişi.id === message.guild.ownerID) {
       const motion = new MessageEmbed()
.setColor("#88ff00")
.setAuthor("Maxy")
.setDescription(`**:hammer: | Sunucu Sahibini Banlayamazsın Dostum :thinking:**`)
.setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
return message.channel.send(motion)
     }
     
     if(kişi.id === client.user.id) {
       const motion = new MessageEmbed()
.setColor("#88ff00")
.setAuthor("Maxy")
.setDescription(`**:hammer: | Bana Ban Atamazsın Dostum :thinking:**`)
.setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
return message.channel.send(motion)
     }
     
     if(kişi.id === message.author.id) {
       const motion = new MessageEmbed()
.setColor("#88ff00")
.setAuthor("Maxy")
.setDescription(`**::hammer: | Kendi Kendini Banlayamazsın Dostum :thinking:**`)
.setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)
return message.channel.send(motion)//yav değiştiririz üşeniyom şuan
     }// motion sil amq q.weqwe adam yaptı sancaklar olm şuan ypamasan unuturuz

 const motion = new MessageEmbed()
    .setColor("#88ff00")
    .setAuthor("Maxy")
    .setDescription(`:hammer: **|** \`${kişi.tag}\` **Adlı Üye Sunucudan Uzaklaştırıldı/Yasaklandı**`)
    .setFooter(`2020 © Maxy | Tüm Haklarımız Saklıdır`)// düzeltim
   message.channel.send(motion)

  message.guild.members.ban(kişi.id, { reason: `Sebep: ${sebep} | Kullanıcıyı Banlatan Kişi ${message.author.tag}` })
       
   }
   exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "ban",
    description: "Botta bulunan tüm komutları gösterir",
    usage: "ban"
  };
  