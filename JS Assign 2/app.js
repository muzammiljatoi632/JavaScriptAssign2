// // The Changing Case

// // Q 1:
// var inpt = prompt("Enter your name : ");
// inpt = inpt.toUpperCase();
// alert(inpt);




// // Q 2:
// var inp2 = prompt("Enter your name : ");
// var sentence = inp2.toLowerCase().split(" ");
// for (var i = 0; i < sentence.length; i++) {
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// alert(sentence.join(" "));





// // Strings: Measuring Length & Extracting Parts

// // Q 1:
// var inp3 = prompt("Enter your favorite mobile phone model : ");
// var length = inp3.length;
// alert(length);

// // Q 2:
// var inp4 = prompt("Enter your favorite place : ");
// var last = inp4.charAt(inp4.length-1);
// alert("The last character of the input is " +last);





// // Strings: Finding Segments

// // Q 1:
// var cntry = "Pakistani";
// var index = cntry.indexOf('n');
// alert(cntry+ "\n Index of n is: " + index);

// // Q 2:
// var inp5 = [];
// inp5 = prompt("Enter username : ");
// for (i = 0; i <= inp5.length; i++) {
//     if (inp5[i] == '@' || inp5[i] == '!' || inp5[i] == ',' || inp5[i] == '.') {
//         alert("Enter a Valid username!");
//         break
//     } else {
//         alert("Correct Username!");
//         break
//     }
// }

// // Q 3:
// var sntnce = "the quick brown fox jumps over the lazy dog.";
// var total = sntnce.match(/the/g).length;
// alert(sntnce+ "\n number of times the in this sentence: " +total);


// // Strings: finding a character at location

// // Q 1:
// var a = "Pakistani";
// var b = a.charAt(3);
// alert(a + "\n At index 3 is " + b);




// // Strings: Replacing 

// // Q 1:
// var city = "Hyderabad";
// var city2 = city.replace('Hyder', 'Islam');
// alert(city + "\n The replaced word : " + city2);

// // Q 2:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message2 = message.replace(/and/g , '&');
// alert(message + "\n The replaced word : " + message2);




// // Rounding nmbrs

// // Q 1:
// var num = +prompt("Enter a value : ");
// alert("Number is: " + num);
// var round = Math.round(num);
// alert("Round Value is: " + round);
// var floor = Math.floor(num);
// alert("Floor Value is: " + floor);
// var ceil = Math.ceil(num);
// alert("Ceil Value is: " + ceil);

// // Q 2:
// var num = +prompt("Enter a value : ");
// alert("Number is: " + num);
// var round = Math.round(num);
// alert("Round Value is: " + round);
// var floor = Math.floor(num);
// alert("Floor Value is: " + floor);
// var ceil = Math.ceil(num);
// alert("Ceil Value is: " + ceil);




// // Generating random nmbrs

// // Q 1:
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);

// // Q 2:
// var headuser = prompt("Enter heads username : ");
// var tailsuser = prompt("Enter tails username : ");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if (floor === 1) {
//     alert("Heads " + headuser + " win the toss!")
// } else {
//     alert("Tails " + tailsuser + " wins the toss!")
// }

// // Q 3:
// var random = Math.ceil(Math.random() * 10);
// var inp6 = parseInt(prompt("Guess the number between 1 to 10 : "));
// if(inp6 == random){
//     alert("Congratulations! you guessed right.")
// } else {
//     alert("Try again!")
// }


// // Converting strings 2 integers and decimals

// // Q 1:
// var weight = prompt("Please entre your weight : ");
// parseInt(weight);
// alert(weight);

// // Converting strings 2 nmbrs, nmbrs to string

// // Q 1:
// var string = "472";
// var num = Number(string);
// alert(string+ "\n" + typeof string)
// alert(num+ "\n" + typeof num)

// // Q 2:
// var num = 35.36;
// var num1 = num.toString().replace(".", "");
// alert("original number : " + num + "\n Replaced Number : " + num1);