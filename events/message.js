module.exports = async (client, message) => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  if (message.author.bot) return;

  const prefix = message.content.match(prefixMention)
    ? message.content.match(prefixMention)[0]
    : client.config.prefix;

  if (message.channel.type === "dm") return;
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;
  cmd.run(client, message, args);
};
