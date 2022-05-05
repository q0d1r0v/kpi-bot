const express = require("express")
const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

// bot routes
const start = require("./bot-routes/start")
const message = require("./bot-routes/message")
const kpi = require("./bot-routes/kpi-data")

const port = process.env.PORT || 3000

const app = express()

// bot commands
bot.command("/start", start)
bot.on("contact", kpi)

// running bot
bot.launch()

app.listen(port, () => {
    console.log("server is running on port " + port)
})