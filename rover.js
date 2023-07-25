const Message = require('./message.js');
const Command = require('./command.js');

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// let rover = new Rover(98382);    // Passes 98382 as the rover's position.
// let response = rover.receiveMessage(message);


class Rover {
   
  // create constructor that gets tests to pass (Test 7)
  constructor(position){
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }
    // create receiveMessage(message) method
  recieveMessage(message){
    // let newCommands = message.commands
    for(commands in message){
      
    }
  };


    // create response object, and set its message property (Test 8)

    // add a results property to response object, as an empty array (Test 9)

    // for each command in the message, add an item to the results array (Test 9)

      // for each command, add {} (an empty object) (Test 9)

      // if the command.commandType is STATUS_CHECK (Test 10) 

        // create a result object (empty to start)

        // set result.completed = true;

        // add a roverStatus object to the result object, with the status values of the rover

        // add the result object to the results array

      // if command.commandType is MODE_CHANGE (Test 11)

        // create a result obj

        // set result.completed = true

        // update rover's mode

        // add result to the results array

    // if command.commandType is MOVE (Test 12)

      // if rover mode is LOW_POWER, don't move and send competed = false in response

      // else if mode is NORMAL, change the position and send completed = false in response (Test 13)
  
    // return the response object
  
}

module.exports = Rover;