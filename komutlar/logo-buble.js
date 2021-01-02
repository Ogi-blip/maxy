const Discord = require('discord.js');
const DBL = require('dblapi.js')
let dbl = 'dbl_tokeniniiz' 
exports.run = async(client, message, args) => {
dbl.hasVoted(message.author.id).then(oy => {
if(!oy) {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://habbofont.net/font/bubble_orange/"+isim+".gif"
  const embed = new Discord.MessageEmbed()
  .setColor("#88ff00")
  .setImage(link)
  message.channel.send(embed)
} else {
message.channel.send('Bu komutu kullanmak için bota oy vermeniz lazım')
}
})


}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};
  
exports.help = {
name: 'buble',
description: 'Buble Şeklinde Logo Yaparsınız',
usage: ''
};