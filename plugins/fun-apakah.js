const fs = require("fs");
const fetch = require("node-fetch");
let handler = async (m, { text, args, command }) => {
  if (!args[0]) throw `Use example .${command} halo`
  m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(global.motiasis)}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
handler.help = ['apakah'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.limit = true
handler.command = /^apakah$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.motiasis = [
"Ya", "Mungkin iya", "Mungkin", "Mungkin tidak", "Tidak", "Tidak mungkin", "Sangat tidak mungkin",
]