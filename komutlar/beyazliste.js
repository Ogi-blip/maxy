const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client,message,args)=>{

    if(message.author.id !== ayarlar.sahip) return message.channel.send('Bu komut sahibimin komudu. Bunu kullanmak için izniniz yok!!')
    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if(!user) return message.channel.send('Beyaz Listeye almam için bir kullanıcı etiketleyin !!')

    db.delete(`kliste.${user.id}`);
    message.channel.send(`**${user.tag}** adlı kişi beyaz listeye alınmıştır.`)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'beyazliste',
  description: 'Bot adminlerinin bot üzerinde kod test etmesini sağlar.',
  usage: 'beyazliste'
};