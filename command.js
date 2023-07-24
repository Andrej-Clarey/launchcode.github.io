class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) { // Same as commandType === undefined
      throw Error("Command type required.");
    }
    this.value = value; // if value is not provided, it will be undefined
  }

}

module.exports = Command;