const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, params) => {
	  let izinli = ["418081929980674070"] 
 if(!izinli.includes(message.member.id))  return message.channel.send('Bu Komutu Kullanabilmek İçin Sahibim Olmalısın')
  const embed = new Discord.MessageEmbed()
  .setDescription('Maxy')
  .setColor("#88ff00")
.addField("**Yeniden Başlat**", "Botun yeniden başlatılmasına onay veriyorsanız 30 saniye içinde evet yazın.")

 
message.channel.send(embed);



  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`**Bot yeniden başlatılıyor...**`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.send('**Yeniden başlatma işlemi iptal edildi.**');
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`yb`],
  permLevel: 0
};

exports.help = {
  name: 'reboot',
  description: '[Admin Komutu]',
  usage: 'reboot'
};