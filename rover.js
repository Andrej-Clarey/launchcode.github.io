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
  receiveMessage(message){
    let results = [];
    let body = message.name
    for(let i = 0; i < message.commands.length; i ++){
      if(message.commands[i].commandType === 'STATUS_CHECK'){
        results.push({completed: true, roverStatus: {mode: this.mode, position: this.position, generatorWatts: this.generatorWatts,}});
      }else if(message.commands[i].commandType === 'MODE_CHANGE'){
        results.push({completed: true, roverStatus: {mode: message.commands[i].value, position: this.position, generatorWatts: this.generatorWatts,}});
        this.mode = message.commands[i].value
        // console.log(message.commands[i].commandType);
      }else if(message.commands[i].commandType === 'MOVE'){
        // console.log("###################")
        if(this.mode === 'LOW_POWER'){
          // console.log("###################")
        results.push({completed: false, roverStatus: {mode: this.mode, position: this.position, generatorWatts: this.generatorWatts,}});
        // console.log(results)
        }else{
          results.push({completed: true, roverStatus: {mode: this.mode, position: message.commands[i].value, generatorWatts: this.generatorWatts,}});
          // console.log(message.commands[i]);
          // console.log(message.commands[i].position);
          // this.position = message.commands[i].position
        }
      }
     
    };
    // console.log({body, results});
    return {body,results}
  }


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