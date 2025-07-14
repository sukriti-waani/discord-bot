// Import the REST class and Routes utility from the discord.js library
const { REST, Routes } = require("discord.js");

// Define the list of slash commands to register with Discord
const commands = [
  {
    // Name of the slash command (e.g., /create)
    name: "create",
    // Description that shows up when users type the slash command in Discord
    description: "Creates a new short URL",
  },
];

// Create an instance of the REST API client
// The version parameter specifies the Discord API version to use (v10 is the latest major version as of discord.js v14)
const rest = new REST({ version: "10" }).setToken(
  // Set the bot token to authenticate the REST API requests
   // {MY_TOKEN}
);

// Immediately Invoked Async Function Expression (IIFE) to execute the registration logic
(async () => {
  try {
    // Log a message indicating that command registration is starting
    console.log("Started refreshing application (/) commands.");

    // Register (or update) the slash commands globally for the given Application ID
    // Routes.applicationCommands registers commands globally, meaning they may take up to 1 hour to update
    await rest.put(
      Routes.applicationCommands("CLIENT_ID"), 
      {
        body: commands, // The array of commands to register
      }
    );

    // Log a success message after commands are registered
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    // If there's an error during registration, log it to the console for debugging
    console.log(error);
  }
})();
