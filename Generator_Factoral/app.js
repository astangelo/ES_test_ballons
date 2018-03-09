const inquirer = require("inquirer");

const question = [{
    type: 'input',
    name: 'factorialSeed',
    message: 'Wnat value would you like the factoral for?'
}];

// Iterator, counting up
function* square() {
    var currentValue = 1;

    while(true)
    {
        //var current = currentValue;
        yield currentValue * currentValue++;
    }
}

// Iterator, counting up to seed
function* factorial(seed) {
    var currentValue = 1;
    var currentItteration = seed-1;

    while(currentItteration >= 0)
    {
        //console.log("Current Val:", currentValue, "Seed", seed, "Itteration:", currentItteration);
        currentValue *= (seed - currentItteration--);
        yield currentValue;
    }
}

const sequence = square();
console.log("\nSquares:");
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());

console.log('\n\n');
async function getFactorialSeed(){
    let answer = await inquirer.prompt(question);

    console.log("\nFactorials:");
    for(let f of factorial(answer.factorialSeed))
        console.log(f);
}

getFactorialSeed();

