const { AoiClient } = require("aoi.js");
require("dotenv").config();

const client = new AoiClient({
    // This is your token! Don't edit it here, use the .env file instead.
    token: process.env.DISCORD_TOKEN,
    prefix: process.env.PREFIX,
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
});

client.on("error", (error) => {
    console.error("Something went wrong!", error);
});

client.loadCommands("./commands");