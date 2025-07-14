// Import 'Client' class and 'GatewayIntentBits' from discord.js
const { Client, GatewayIntentBits } = require("discord.js");

// Create a new Discord client instance with specified intents
// Intents tell Discord what type of events the bot is allowed to receive and process
const client = new Client({
  intents: [
    // Enables the bot to receive basic guild (server) events
    GatewayIntentBits.Guilds,
    // Enables the bot to receive message events from text channels in guilds
    GatewayIntentBits.GuildMessages,
    // Enables the bot to read the content of messages sent in channels
    GatewayIntentBits.MessageContent,
  ],
});

// Set up an event listener that runs every time a new message is created in a text channel
client.on("messageCreate", (message) => {
  // If the message was sent by a bot (including this bot itself), ignore it to prevent loops
  if (message.author.bot) return;

  // Check if the message starts with the word 'create'
  if (message.content.startsWith("create")) {
    // Extract the text that comes after the word 'create'
    const url = message.content.split("create")[1];
    // Reply back with a message indicating a short ID is being generated for the provided URL
    return message.reply({
      content: "Generating Short ID for " + url,
    });
  }

  // If message doesn't start with 'create', reply with a default message
  message.reply({
    content: "Hi From Bot",
  });
});

// Set up an event listener that runs when an interaction is created (such as slash commands or buttons)
client.on("interactionCreate", (interaction) => {
  // Log the interaction object to the console (useful for debugging to see what interaction was triggered)
  console.log(interaction);
  // Reply to the interaction with 'PONG!!'
  interaction.reply("PONG!!");
});

// Log in to Discord using the bot token to establish connection to the Discord API
client.login(
  "MTM5Mzk1NjI5ODE4OTQzOTA1Ng.GChewY.8jIHHSeFjP-oVI2yJa0v37EMvDzD9xlMvLaHoM"
);
