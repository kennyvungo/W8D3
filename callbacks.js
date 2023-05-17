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


let rl = require("readline");
const reader = rl.createInterface({input: process.stdin,output: process.stdout});

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

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
