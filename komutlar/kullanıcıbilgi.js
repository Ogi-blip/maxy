const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment")
require("moment-duration-format")
const dateFormat = require("dateformat")
exports.run = async (client, message, args) => {
  
  var user = '';
        let member = message.mentions.users.first() || client.users.cache.get(args[0]);
        let author = message.author; 
        if(member) {
             var user = member;
        } else {
             var user = author;
        }    
    member = message.guild.member(user);
    
      const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")

    let ozeldurum = user.presence.activities[0] || 'Özel durumun yok'
        const Durum = user.presence.status;
        const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        const durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL)
      .setTitle("Kullanıcı")
      .setColor("#88ff00")
      .addField("Şu anda oynadığı oyun:", `${user.presence.game ? user.presence.game.name : 'Oynadığı Bir Oyun Yok'}`)
      .addField("Custom Status:", ozeldurum.state || "Özel Durum Yok")
      .addField("Durumu:", durm)
      .addField("Katılım tarihi [Sunucu]:", userJoined)
      .addField("Katılım tarihi [Discord]:", daysCreated)
      .addField("İD Si:", ` ${user.id}`, false)
      .addField("Bot mu?", `${user.bot ? '\n Evet' : 'Hayır'}`, false)
      
      .addField("Sahip olduğu roller:", message.guild.member(user).roles.cache.filter(s => s.name !== '@everyone').map(m => m.name).join(', '))
      .addField("Hesap Oluşturulma tarihi:", moment(user.createdAt).format('DD/MM/YYYY'))
      .setFooter(`${user.tag} tarafından istendi`, user.avatarURL())
      message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kbilgi'],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcıbilgi',
  description: 'İstediğiniz Kullanıcının Bilgilerini Gösterir',
  usage: 'kullanıcıbilgi'
};
