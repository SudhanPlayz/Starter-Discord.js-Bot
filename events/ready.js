module.exports = async (client) => {
  await client.user.setActivity(`${client.guilds.cache.size} Servers`, {
    type: "WATCHING",
  });
};
