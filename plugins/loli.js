const fetch = require('node-fetch')
let fs = require("fs")
let { MessageType } =require("@adiwajshing/baileys")
let handler = async (m, { conn }) => {
    let res = await fetch('https://raw.githubusercontent.com/Xmell91/loli/master/loli.json')
   let json = await res.json()
   let { url } = json
   const media = await conn.prepareMessage(m.chat, {url:`${url}`}, MessageType.image, { thumbnail: Buffer.alloc(0) })// change for file type
   const buttons = [
  {buttonId: '/loli', buttonText: {displayText: 'Saya pengen loli lebih banyak🗿'}, type: 1},
  {buttonId: '/hapus', buttonText: {displayText: 'Udah'}, type: 1}
]
const buttonMessage = {
    contentText: "Udah sih gitu aja",
    footerText: 'Hamdeh\nWeem Zul
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { quoted: m})
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^loli/i
module.exports = handler
