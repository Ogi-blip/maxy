const Discord = require('discord.js')
const db = require("quick.db")
    

   exports.run = async(client, message, args) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
if(!rol) return message.channel.send(`Lütfen rol etiketle`)
if(!kanal) return message.channel.send(`Lütfen kanal etiketle`)
db.set(`otorolrol_${message.guild.id}`, rol.id)
db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
message.channel.send(`Otorol rolü **@${rol.name}** olarak, bildirimin gideceği kanal ise **#${kanal.name}** olarak ayarlandı.`)
   }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  exports.help = {
    name: 'otorol',
    description: 'Logo Yaparsınız',
    usage: 'otorol'
  };