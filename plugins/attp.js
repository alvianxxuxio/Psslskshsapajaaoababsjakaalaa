let handler = async (m, { conn, text }) => {
if (!text) throw 'Example: .attp Hello'
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let res = `https://api.lolhuman.xyz/api/attp?apikey=595a355759b2413843d90719&text=${text}`
  conn.sendFile(m.chat, res, 'yyy.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^(attp)$/i
handler.limit = true
handler.premium = false

module.exports = handler