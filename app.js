'use strict';

var question1 = 'What\'s your name?';
var username = prompt(question1);
console.log(question1 + ' : ' + username);

while (username === '' || username === null) (
  username = prompt(question1)
)
var response1 = 'Hi ' + username + ', nice to meet you!';
alert(response1);

var answer1 = prompt('Do you think I\'ve skydived before ' + username + '?');
console.log(answer1);
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
  alert('Yep, I\'m that dumb!');
} else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
  alert('Actually, I was dumb enough to do that.');
} else {
  alert('hmm..');
}

var answer2 = prompt('Do you think I own a dog ' + username + '?');
console.log(answer2);
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
  alert('Yes, he fear poops when I give him a bath.');
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
  alert('On the contrary, I do!');
} else {
  alert('huh?');
}

var answer3 = prompt('Have I been to Vietnam ' + username + '?');
console.log(answer3);
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
  alert('That\'s right! The food is amazing.');
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
  alert('Wrong, I\'ve been all over Vietnam!');
} else {
  alert('wut?');
}

var answer4 = prompt('Am I a gamer ' + username + '?');
console.log(answer4);
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
  alert('Yup, I spend too much time playing them.');
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  alert('Incorrect.');
} else {
  alert('ok?');
}

var answer5 = prompt('Have I broken any bones ' + username + '?');
console.log(answer5);
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
  alert('I sure have. It hurt.');
} else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
  alert('Incorrect.');
} else {
  alert('..?');
}
