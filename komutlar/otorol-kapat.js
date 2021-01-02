const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
     if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)

  
  db.delete(`otorolrol_${message.guild.id}`)
  db.delete(`otorolkanal_${message.guild.id}`)
  message.channel.send(`Başarılı , Otorol Sistemi Deafktif Edildi.`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['otomatik-rol-kapat'],
    permLevel: 0
};
exports.help = {
    name: 'otorol-kapat',
    description: 'Sunucuya Yeni Katılanlara Ayarladığınız Rolü Verir',
    usage: 'otorol <@rol> <#kanal>'
}