var inquirer = require('inquirer');

var questions = [
    {
        type: 'input',
        name: 'username',
        message: "What's your name",
        default: function() {
          return 'Enoch';
        }
    },
    {
      type: 'input',
      name: 'favorite_color',
      message: "What's your favorite color",
      default: function() {
        return 'Blue';
      }
  },  
];


const fetchSomething = () => new Promise((resolve) => {
    inquirer.prompt(questions).then(answer => 
      {
        //console.log(JSON.stringify(answer, null, "  "));

        const myAnswers = {
          ...answer,
          favorite_color: "Green"
        };
        resolve(`${answer.username}`)
      });
  });
  
  async function asyncFunction() {
    const result = await fetchSomething(); // returns promise

    console.log('This is supposed to come after the await function.')
  
    // waits for promise and uses promise result
    return `Thanks, ${result}`;
  }
  
  asyncFunction().then(result => console.log(result));



