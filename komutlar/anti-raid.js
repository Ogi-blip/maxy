const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
try {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':warning: **YETERSİZ YETKİ**')

  if (!args[0]){
  message.channel.send(`Kullanım: **${prefix}bot-koruma aç** | **${prefix}bot-koruma kapat**`)
  }
  if (args[0] === 'aç'){
      await db.set(`botkoruma_${message.guild.id}`, 'acik')
      message.channel.send('Bot koruma açıldı!')
  }
  if (args[0] === 'kapat'){
    if (!db.fetch(`botkoruma_${message.guild.id}`)) return message.channel.send('Bot koruma zaten açılmamış!')
    await db.set(`botkoruma_${message.guild.id}`, 'kapali')
     db.delete(`botkoruma_${message.guild.id}`)
      message.channel.send('Bot koruma kapatıldı!')
     }
      
} catch (err) {
  message.channel.send('Hata!\n' + err).catch(()=>{})
}
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["antiraid", "anti-raid"],
    permLevel: 0
};
exports.help = {
    name: 'bot-koruma',
    description: 'Sunucuya Yeni Katılanlara Ayarladığınız Rolü Verir',
    usage: 'bot-koruma'
}