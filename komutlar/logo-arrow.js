const Discord = require('discord.js');
const DBL = require('dblapi.js')
let dbl = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3OTMwOTMzMDgzNDM5MTA2MSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA4NDYwNzc0fQ.3LIKmJFfQzEDWSOVosrg6SLLPr4ypWM0bp00wBZ1VJs' 
exports.run = async(client, message, args) => {
dbl.hasVoted(message.author.id).then(oy => {
if(!oy) {
let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://dynamic.brandcrowd.com/asset/logo/1a2ebc7a-1b24-466a-bee7-9a0e8f5d8395/logo?v=4&text="+isim
  const embed = new Discord.MessageEmbed()
  .setColor("#88ff00")
  .setImage(link)
  message.channel.send(embed)
} else {
message.channel.send('Bu komutu kullanmak için [bota oy](bit.ly/maxyoy] vermeniz lazım')
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
name: 'arrow',
description: 'Arrow Şeklinde Logo Yaparsınız',
usage: 'arrow'
};