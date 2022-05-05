const kpi = (msg) => {
    let contact = msg.update.message.contact
    msg.replyWithChatAction('typing')
    msg.reply("Raqamingiz qabul qilindi!")
    console.log(contact)
}

module.exports = kpi