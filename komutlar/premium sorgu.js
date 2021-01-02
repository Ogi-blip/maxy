const {MessageEmbed} = require('discord.js')
const db = require('wio.db')

exports.run = async (client, message, args) => {
    var kullanıcı_sunucu = message.mentions.users.first() || message.guild
    var id = kullanıcı_sunucu.id
   
if(client.users.cache.get(id)) {
  var pre = db.fetch(`pre_${client.users.cache.get(id).id}`)
  if(pre === 'aktif') {
    message.channel.send(`Bu Kullanıcıda Premium Aktif`)
  }else if(pre === 'deaktif') {
    message.channel.send(`Bu Kullanıcıda Premium Deaktif`)
  }else if(!pre) {
    message.channel.send(`Bu Kullanıcıda Premium Deaktif`)
  }
} else if(client.guilds.cache.get(id)) {
  var pre = db.fetch(`pre_${client.guilds.cache.get(id).id}`)
   if(pre === 'aktif') {
    message.channel.send(`Bu Sunucuda Premium Aktif`)
  }else if(pre === 'deaktif') {
    message.channel.send(`Bu Sunucuda Premium Deaktif`)
  }else if(!pre) {
    message.channel.send(`Bu Sunucuda Premium Deaktif`)
  }
}
  }
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['premiumdurum', 'pre-durum', 'predurum'], 
  permLevel: 0 
};

exports.help = {
  name: 'premium-durum', 
  description: 'Sunucu Premium Durumunu Gösterir',
  usage: 'premium-durum' 
};