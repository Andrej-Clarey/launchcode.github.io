const Command = require('./command.js');

class Message {
   // Write code here!
  constructor(name, commands){
    this.name = name;
    if (!name) {
       throw Error("Name parameter required.");
    }
    this.commands = commands;
  }
};

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let messages = new Message('Test message with two commands', commands);

module.exports = Message;