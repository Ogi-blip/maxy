const {MessageEmbed} = require('discord.js')
const db = require('wio.db')

exports.run = async(client, message, args) => {
const uyari = msj => message.channel.send(new MessageEmbed().setColor('#88ff00').setTitle('Uyarı :x:').setDescription(msj).setFooter(`${client.user.username} Premium Sistemi`, client.user.avatarURL({dynamic:true})).setTimestamp()) 
if(message.author.id !== '418081929980674070' && message.author.id !== '418081929980674070' && message.author.id != '418081929980674070') return uyari('Bu Komutu Sadece Yapımcım Kullanabilir!')
  var premium = args[0]
var id = args[1]
if (!premium) return uyari("Lütfen **aktif** ya da **deaktif** Yazın!")
if (premium === 'aktif') {
if (!id) return uyari("Premium'un Aktif Edileceği Sunucunun Veya Kullanıcının Id'sini Yaz!")
if(client.users.cache.get(id)) {
if(db.fetch(`pre_${client.users.cache.get(id).id}`) === 'aktif') return uyari(`Bu kullanıcının premiumu zaten aktif`)
message.channel.send(`**${client.users.cache.get(id).username}** adlı kullanıcının premiumu aktif edildi`)  
db.set(`pre_${client.users.cache.get(id).id}`,`aktif`)
}else if(client.guilds.cache.get(id)) {
  if(db.fetch(`pre_${client.guilds.cache.get(id).id}`) === 'aktif') return uyari(`Bu sunucunun premiumu zaten aktif`)
  message.channel.send(`**${client.guilds.cache.get(id).name}** adlı sunucunun premiumu aktif edildi`)  
  db.set(`pre_${client.guilds.cache.get(id).id}`,`aktif`)
  
}else  return uyari(`Belirttiğiniz idli kullanıcı veya sunucuyu sistemde bulamadım..!`) 
  }else
  if (premium === 'deaktif') {
    if (!id) return uyari("Premium'un Aktif Edileceği Sunucunun Veya Kullanıcının Id'sini Yaz!")
if(client.users.cache.get(id)) {
if(db.fetch(`pre_${client.users.cache.get(id).id}`) === 'deaktif') return uyari(`Bu kullanıcının premiumu zaten deaktif`)
  message.channel.send(`**${client.users.cache.get(id).username}** adlı kullanıcının premiumu deaktif edildi`)  
  db.set(`pre_${client.users.cache.get(id).id}`,`deaktif`)
}else if(client.guilds.cache.get(id)) {
  if(db.fetch(`pre_${client.guilds.cache.get(id).id}`) === 'deaktif') return uyari(`Bu sunucunun premiumu zaten deaktif`)
  message.channel.send(`**${client.guilds.cache.get(id).name}** adlı sunucunun premiumu deaktif edildi`)  
  db.set(`pre_${client.guilds.cache.get(id).id}`,`deaktif`)
  
}else  return uyari(`Belirttiğiniz idli kullanıcı veya sunucuyu sistemde bulamadım..!`) 
  }else 
  return uyari("Lütfen **aktif** ya da **deaktif** Yazın!")
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
};
exports.help = {
    name: 'premium'
};