const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // Test 7: "constructor sets position and default values for mode and generatorWatts"
  it("constructor sets position and default values for mode and generatorWatts", function(){
    // create a new Rover object w/ a given initial position
    let rover = new Rover(42);
    
    // check that rover's position is correct
    expect(rover.position).toEqual(42);
    // check that mode is correct
    expect(rover.mode).toEqual('NORMAL');
    // check that generatorWatts is correct
    expect(rover.generatorWatts).toEqual(110);
  });

  // Test 8
  it("response returned by receiveMessage contains name of message", function(){
    let message = new Message("MSG005", []);
    let rover = new Rover(42);
    let response = rover.receiveMessage(message);
    // console.log(response);
      expect(response.body).toEqual("MSG005");
    // verify that response.message has the correct value
  });

  // Test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){

    // build test objects: 1) Message w/ 2 commands and 2) a rover
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let rover = new Rover(42);
    let message = new Message('Test message with two commands', commands);
    // pass the message to the rover by calling rover.receiveMessage
    let response = rover.receiveMessage(message);
    // verify that response.results.length is 2
    // console.log(response.results.length);
    expect(response.results.length).toEqual(2);
  });

  // TEST 10
  it("responds correctly to status check command", function(){

    // build test objects: 1) Message w/ STATUS_CHECK command and 2) a rover
    let rover = new Rover(42);
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    // pass the message to the rover by calling rover.receiveMessage
    let response = rover.receiveMessage(message);
    // verify response.results:
    //   - get the single item (the result) from the array
    let singleLine = response.results[0];
    //   - verify that the result has a completed property that is true
    expect(singleLine.completed).toEqual(true);
    //   - verify that the result has a roverStatus property w/ correct values (3 tests)
    expect(singleLine.roverStatus.mode).toEqual(rover.mode);
    expect(singleLine.roverStatus.position).toEqual(rover.position);
    expect(singleLine.roverStatus.generatorWatts).toEqual(rover.generatorWatts);
    // console.log(response.results);
      
  });

  // Test 11
  it("responds correctly to mode change command", function(){
    // build test objects: 1) Message w/ MODE_CHANGE command and 2) a rover
    let rover = new Rover(42);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Test message with two commands', commands);
        // pass the message to the rover by calling rover.receiveMessage
    let response = rover.receiveMessage(message);
    // verify that response.results contains the correct object 
    let singleLine = response.results[0];
    // verify that the rover's mode property was updated 
    expect(singleLine.completed).toEqual(true);
    expect(singleLine.roverStatus.mode).toEqual(rover.mode);
  });

  // Test 12
  it("responds with false completed value when attempting to move in LOW_POWER mode", function(){

    // build rover object
    let rover = new Rover(42);
    // send a message+command to change into LOW_POWER mode
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 9)];
    let message = new Message('Test message with two commands', commands);
    // send a message+command to attempt to MOVE the rover
    // let commands2 = [new Command('MOVE', 9)];
    // let message2 = new Message('Test message with two commands', commands2);
    console.log('Mode Change next  ---------------------')
    let response = rover.receiveMessage(message);
    // let response2 = rover.receiveMessage(message2);
    console.log(message);
    // console.log(response);
    // console.log(response2);
    let singleLine = response.results[0];
    // console.log(singleLine);
    // verify that the given result object has completed === false
    expect(singleLine.completed).toEqual(false);
    // verify that the rover's position did not change
    // expect(singleLine.roverStatus.position).toEqual(42);
  });

//   // Test 13
//   it("responds with position for move command", function(){

//     // build a rover, and also build a message with a MOVE command

//     // send the message to the rover

//     // verify that the result object has completed === false

//     // verify that the rover has the correct position value 
    
//   });

});
