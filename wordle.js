var words = ['abide', 'alert', 'about', 'acorn', 'above', 'actor', 'adore', 'adopt', 'alter', 'angry', 'audio', 'baker', 'badge', 'basil', 'beach',
    'began', 'bench', 'beige', 'aeoli', 'blaze', 'blend', 'blunt', 'bride', 'brisk', 'bumpy', 'bacon', 'blast', 'brush', 'churn',
    'crawl', 'creak', 'crane', 'charm', 'chore', 'clamp', 'clasp', 'clean', 'clerk', 'crisp', 'chalk', 'close', 'coach', 'count', 'craft',
    'dealt', 'dream', 'drink', 'drove', 'duped', 'dyes', 'enact', 'empty', 'enter', 'elect', 'elope', 'equip', 'erase', 'exile', 'flame',
    'flock', 'fresh', 'fudge', 'fines', 'fable', 'fiber', 'frost', 'gains', 'gases', 'gears', 'glove', 'helps', 'haste', 'hints', 'image',
    'index', 'ivory', 'jacks', 'joint', 'kicks', 'knife', 'laced', 'lapse', 'laser', 'leaps', 'lemon', 'lunar', 'limbo', 'light', 'locus',
    'mango', 'march', 'moths', 'merch', 'molar', 'money', 'nails', 'naive', 'nerdy', 'night', 'noisy', 'oiled', 'order', 'paint', 'pearl',
    'pulse', 'piano', 'plaid', 'place', 'plank', 'perch', 'quick', 'quilt', 'raise', 'reach', 'ranks', 'roast', 'shine', 'shoes', 'shock',
    'slice', 'swamp', 'slime', 'snare', 'socks', 'stone', 'score', 'tamed', 'track', 'topaz', 'unite', 'vices', 'voila', 'viper', 'vogue',
    'vocal', 'whale', 'whine', 'wager', 'winds', 'whisk', 'waste', 'world', 'wrist', 'yoked', 'yeast', 'yield', 'yacht', 'zoned', 'zesty'
];

let targetWord = words[Math.trunc(Math.random() * 150)];
let health = 5;
let score = 0;
let currentRow = 0;
let correctCount = 0; 

console.log("Target word:", targetWord);

function checkWord() {
    let userInput = prompt('Enter a 5-letter word:'); 

    if (userInput === null || userInput === "" || userInput.length !== 5) {
        alert("Invalid Input. Please enter a valid 5-letter word.");
        return; 
    }

    correctCount = 0; 

    checkLetter(0, userInput);
    checkLetter(1, userInput);
    checkLetter(2, userInput);
    checkLetter(3, userInput);
    checkLetter(4, userInput);

    if (correctCount < 5) {
        health--;
        currentRow++;
    } else {
        score = 5; 
        alert("Congratulations! You won!");
        alert("Reload the page to play again");
    }

    if (health <= 0 || currentRow >= 5) {
        alert("You lost! The word was " + targetWord);
        alert("Reload the page to play again");
    }
}

function checkLetter(index, userInput) {
    if (userInput[index] === targetWord[index]) {
        document.getElementById('r-' + currentRow + '-' + index).innerHTML = userInput[index].toUpperCase();
        document.getElementById('r-' + currentRow + '-' + index).style.backgroundColor = 'green';
        correctCount++; 
    } else if (targetWord.indexOf(userInput[index]) !== -1) {
        document.getElementById('r-' + currentRow + '-' + index).innerHTML = userInput[index].toUpperCase();
        document.getElementById('r-' + currentRow + '-' + index).style.backgroundColor = 'yellow';
    } else {
        document.getElementById('r-' + currentRow + '-' + index).innerHTML = userInput[index].toUpperCase();
        document.getElementById('r-' + currentRow + '-' + index).style.backgroundColor = 'gray';
    }
}
