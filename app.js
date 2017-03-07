'use strict';

var question1 = 'What\'s your name?';
var username = prompt(question1);
console.log(question1 + ' : ' + username);
var response1= 'Hi ' + 'username' + ', nice to meet you!';
alert(response1);

var answer = prompt('Do you think I\'ve skydived before ' + username + '?');
if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
  alert('Yep, I\'m that dumb!');
} else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
  alert('Actually, I was dumb enough to do that.');
} else {
  alert('WRONG!');
}

var answer = prompt('Do you think I own a dog ' + username + '?');
if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
  alert('Yes, he fear poops when I give him a bath.');
} else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
  alert('On the contrary, I do!');
} else {
  alert('huh?');
}

var answer = prompt('Have I been to Vietnam ' + username + '?');
if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
  alert('That\'s right! The food is amazing.');
} else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
  alert('Wrong, I\'ve been all over Vietnam!');
} else {
  alert('wut?');
}

var answer = prompt('Am I a gamer ' + username + '?');
if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
  alert('Yup, I spend too much time playing them.');
} else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
  alert('Incorrect.');
} else {
  alert('wut?');
}

var answer = prompt('Have I broken any bones ' + username + '?');
if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
  alert('I sure have. It hurt.');
} else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
  alert('Incorrect.');
} else {
  alert('wut?');
}
