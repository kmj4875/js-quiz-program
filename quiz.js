// variables
var correct = 0;

// Questions
var answer1 = prompt("How many states are there in the United States?");

if ( answer1 == '50' ) {
 correct += 1;
}

var answer2 = prompt("How many planets are there in the solar system?");

if ( answer2 == '9' ) {
 correct += 1;
}

var answer3 = prompt("How many continents are there?");

if ( answer3 == '7' ) {
 correct += 1;
}

var answer4 = prompt("How old is planet Earth?");

if ( answer4.toUpperCase() === '4.54 billion years' ) {
 correct += 1;
}

var answer5 = prompt("How old is the St. Louis Arch?");

if ( answer5.toUpperCase() === '53 years old' ) {
 correct += 1;
}

var answer6 = prompt("An integer from 100 through 999, inclusive, is to be chosen at random. What is the probability that the number chosen will have 0 as at least 1 digit?");

if ( answer5.toUpperCase() === '171/900' ) {
 correct += 1;
}

if (correct < 2) {
    document.write("That went horrible");
}

if (correct == 3) {
    document.write("You got 50% right!");
}

if (correct == 4) {
    document.write("4 out of 6 right! ");
}

if (correct == 5) {
    document.write("You got 5 out of 6 right! Smarter than the average bear. ");
}

if (correct == 6) {
    document.write("WOW! 100% congratulations you get nothing ");
}
