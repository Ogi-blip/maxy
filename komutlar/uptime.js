const Discord = require("discord.js"),
client = new Discord.Client();
module.exports.run = async (client, message, args) => {
    let ms = require('parse-ms');
    let time = ms(client.uptime);
    message.channel.send(`\`${time.days}\` **gün**, \`${time.hours}\` **saat**, \`${time.minutes}\` **dakika**, \`${time.seconds}\` **saniye**`)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: 'uptime',
    description: 'Sunucuya Yeni Katılanlara Ayarladığınız Rolü Verir',
    usage: 'uptime'
}