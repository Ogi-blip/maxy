const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {

 if(message.author.id !== ayarlar.sahip) return message.channel.send("Bu komutu sadece sahibim kullanabilir!") 


 let ce = args.slice(0).join(" ")
 
let detay; 
if(isNaN(ce)) detay = "metin"
else detay = "id"
 

let guild;
if(detay === "id") guild = client.guilds.cache.get(ce)
if(detay === "metin") guild = client.guilds.cache.find(s => s.name === ce) 

if(!guild) return message.channel.send("Yanlış bir sunucu ismi veya İD girdin.")

 let invite = await message.channel.createInvite(
  {
    maxAge: 10 * 60 * 1000,
    maxUses: 1 
})

message.channel.send(""+guild.name+" Adlı sunucunun invite URL'sini DM kutuna gönderdim!")


 try {
message.author.send("Sunucu daveti: "+invite) 
 } catch(e) {
message.channel.send("DM kutuna davet gönderemedim.Kapalı olabilir mi?")
 } 

 } 

// CODEMİNG!
exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: [], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'sunucu-davet',
description: 'Komutun Açıklaması',
usage: 'sunucu-davet'
}