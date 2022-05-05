const start = (msg) => {
    msg.replyWithChatAction('typing')
    msg.reply("Iltimos IT-Department-Dasturida amaldagi raqamingizni yuboring!", {
        reply_markup: {
            resize_keyboard: true,
            keyboard: [
                [{ text: 'Raqamni yuborish', request_contact: true }]
            ]
        }
    })
    console.log(msg)
}

module.exports = start