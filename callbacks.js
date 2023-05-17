class Clock {

    constructor(){
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        setInterval(() => {this.printTime(); this._tick();},1000);
    }


    printTime(){
        console.log( `${this.hours}:${this.minutes}:${this.seconds}`)
    }

    _tick() {
        if (this.seconds == 59){
            this.seconds = 0;
            if(this.minutes == 59){
                this.minutes = 0;
                if(this.hours == 23){
                    this.hours = 0;
                }
                else{
                    this.hours += 1;
                }
                
            }
            else{
                this.minutes += 1;
            }
        }
        else{
            this.seconds += 1
        }
    }
}

const { stdin } = require("process");
// const clock = new Clock();


// let rl = require("readline");
// const reader = rl.createInterface({input: process.stdin,output: process.stdout});

function addNumbers(sum,numsLeft,completionCallback){
    if (numsLeft === 0){
        completionCallback(sum);
        return reader.close();
    }
    reader.question("Enter a number",input =>{
        let number = parseInt(input);
        sum += number;
        console.log(sum);
        addNumbers(sum,numsLeft - 1,completionCallback);
    })
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// Function.prototype.myBind = function (context) {
//     // ...this.parameters
//     // Array.from(parameters)
//     // let args = Array.from(this.arguments);
//     return () => {
//         this.apply(context);
//     };
// };

// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }

// const turnOn = function() {
//   console.log("Turning on " + this.name);
// };

// const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

// let rl = require("readline");
// const reader = rl.createInterface({input: process.stdin,output: process.stdout});

// const askIfGreaterThan = function (el1, el2, callback) {
//     reader.question(`Is the first element ${el1} greater than the second ${el2}?`, input => {
//         if (input === 'yes') {
//             callback(true);
//         }else{
//             callback(false);
//         }
//     });
// };

// const printValue = (val) => {console.log(val)};

// askIfGreaterThan('afs', '111', printValue);

// const innerBubbleSortLoop = function (arr, i, madeAnySwaps, outerBubbleSortLoop) {
//     if (i === (arr.length - 1)) {
//         outerBubbleSortLoop(madeAnySwaps);
//     }else {
//         askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
//             if (isGreaterThan) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//                 madeAnySwaps = true;
//             }
//             innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
//         });
//     }
// };
// const arrTest = [0,24,15,16,13,19,22];
// innerBubbleSortLoop(arrTest, 0, false, (val) => console.log(arrTest));

// const absurdBubbleSort = function (arr, completionCallback) {
//     const outerBubbleSortLoop = function (madeAnySwaps) {
//         if (madeAnySwaps) {
//             innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
//         }else{
//         completionCallback(arr);
//         }
//     }
//     outerBubbleSortLoop(true);
// };

// absurdBubbleSort([3, 2, 1], function(arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
//   });
let tooSoon = false;
Function.prototype.myThrottle = function (interval) {
    
    if (tooSoon) {
    }else{
        tooSoon = true;
        setTimeout(()=> {tooSoon = false;}, interval);
        this();
    }
    // return () => {
    // };
};

// class Neuron {
//     fire() {
//       console.log("Firing!");
//     }
//   }
  
// const neuron = new Neuron();


//  clearInterval(interval);
// const interval = setInterval(() => {
//     neuron.fire();
//   }, 10);

// neuron.fire = neuron.fire.myThrottle(500);

// const printTest = () => {console.log("testing")};

// setInterval(() => {printTest.myThrottle(500)}, 10);

