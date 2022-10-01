

// 1)Write a program that takes input a name from user & greet the
// user like this:

var greet = prompt("Enter your name")
alert("Hi" + greet)

// 1)Write a program that takes input a name from user & greet the
// user like this:

// 2. Write a program to take input a number from user & display
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by
// default.

var table=prompt("Enter a number")
for(var i=1;i<=10;i++){
  console.log(table + "X" + i + "=" + table * i) 
}
if(table==="null"){
  console.log(5 + "X" + i + "=" + 5 * i) 
}


// 2. Write a program to take input a number from user & display
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by
// default.

// 3. Write a program to take “city” name as input from user. If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”

var city = prompt("Enter your City")
if (city == "karachi") {
  alert( "Welcome to the City of lights")
}


// 3. Write a program to take “city” name as input from user. If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”

// 4. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is
// female, give the message: Good Morning Ma’am.


var gender = prompt("Enter a gender")
if (gender == "male") {
  alert("Good morning Sir")
}
else if (gender = "female") {
  alert("Good morning Ma'm")
}

// 4. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is
// female, give the message: Good Morning Ma’am.



// 7. Write a program to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”

var fuel=("Enter remaining fuel in car")
if(fuel<0.25+"litres"){
  console.log("Please refill the fuel in car")


}
// 8. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
  alert("condition 2 is true");
  }
  if (++c < 14){
  alert("condition 3 is true");
  }
  if(c === 14){
  alert("condition 4 is true");
  }
  var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
  alert("True");
  }
  if (false){
  alert("False");
  }
  if("car" < "cat"){
    alert("car is smaller than cat");
    }


// 7. Write a program to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”






// 10)shopping cart system

var item1 = prompt("Enter your 1st item")
var item2 = prompt("Enter your 2st item")
var pritem1 = parseInt(prompt("Enter price 1st item"))
var pritem2 = parseInt(prompt("Enter price 2st item"))
var qitem1 = parseInt(prompt("Enter quan 1st item"))
var qitem2 = parseInt(prompt("Enter quan 2st item"))
var shippingchrgs = parseInt(prompt("Enter shipping charges"))
var totalcost = (pritem1 * qitem1 + pritem2 * qitem2 + shippingchrgs)
var discount = parseInt(totalcost / 10)
var discountedprice = (parseInt(totalcost - discount))

if (totalcost > 2000) {
  console.log("Price of" + item1 + "is" + pritem1 + "Quantity of" + item1 + "is" + qitem1 + "Price of" + item2 + "is" + pritem2 + + "Quantity of" + item2 + "is" + qitem2 + "Shipping charges" + shippingchrgs + "Total cost is" + totalcost + "PKR" + "discounted price is " + discountedprice + "PKR")
}
else {
  console.log("Price of" + item1 + "is" + pritem1 + "Quantity of" + item1 + "is" + qitem1 + "Price of" + item2 + "is" + pritem2 + + "Quantity of" + item2 + "is" + qitem2 + "Shipping charges" + shippingchrgs + "Total cost is" + totalcost + "PKR")
}

// 10)shopping cart system

// 20. Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal

var num1 = prompt("enter num 1")
var num2 = prompt("enter num 2")

if (num1 > num2) {
  alert("the greater num is" + num1)
}
else if (num1 < num2) {
  alert("the greater num is" + num2)
}
else if (num1 === num2) {
  alert("both are equal")
}

// 20. Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal


// 22. Write a program to take input a number & tell whether it’s a
// positive or negative number.


var num = prompt("Enter a number")
if (num > 0) {
  console.log("Its a postive number")
}
else {
  console.log("it's a negatie number")
}

// 22. Write a program to take input a number & tell whether it’s a
// positive or negative number.

// 20. Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal


var num1 = prompt("Enter a number")
var num2 = prompt("Enter number 2")
if (num1 > num2) {
  alert(num1 + "is greater than" + num2)
}
else if (num1 < num2) {
  alert(num2 + "is greater than" + num1)
}
else if (num1 === num2) {

  alert(num2 + "and" + num1 + "are equal")

}

// 20. Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal


// 5. Write a program to take input color of road traffic signal from
// the user & show the message according to this table:

var signal = prompt("Enter color")
if (signal == "red") {
  alert("vehicles must stop")

}
else if (signal == "yellow") {
  alert("vehicles should get ready to move")
}
else if (signal == "green") {
  alert("vehicles can move now")
}

// 5. Write a program to take input color of road traffic signal from
// the user & show the message according to this table:

// 6. Write a program to take input max age & current age from
// user. If the current age is less than or equal to max age, show

var maxAge = prompt("Enter maxage")
var currAge = prompt("Enter currage")

if (maxAge > currAge) {
  console.log("You are welcome!")
}
// 6. Write a program to take input max age & current age from
// user. If the current age is less than or equal to max age, show

// 23. The Pluralizer: Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".


var num = prompt("Enter a number")
var noun = prompt("Enter a noun")

if (num > 1) {
  console.log(num + noun + "s")

}
else {
  console.log(num + noun)
}





// 23. The Pluralizer: Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".


// 15. Write a program that checks whether the given input is an
// even number or an odd number.

var check = prompt("Enter a number")

if (check % 2 == 0) {
  console.log("It's an even number")
}
else {
  console.log("It's an odd number")
}


// 15. Write a program that checks whether the given input is an
// even number or an odd number.


// 16. Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var T = prompt("Enter a value")

if (T > 40) {
  console.log("It is too hot outside.")
}
else if (T > 30) {
  console.log("The Weather today is Normal.")
}
else if (T > 20) {
  console.log("Today’s Weather is cool.")
}
else if (T > 10) {
  console.log("OMG! Today’s weather is so Cool.")
}





// 16. Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// 18. Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.

var days=["Monday","Tuesday","Wednesday","thursday","Friday"]
var user=prompt("Enter a dayname")
for(var i=0;i<days.length;i++){
  if(days[i]==="user"){
    console.log("It’s a week")

  }
  else if(user==="Saturday"){
    console.log("It’s weekend")
  }
  else if(user==="Sunday"){
    console.log("Yay! It’s a holiday")

  }

}


// 18. Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.

// 19. Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”


var score = prompt("Enter score")
if (score > 50) {
  console.log("You are passed")

}
else {
  console.log("Try again!")
}




// 19. Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”



//12 Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secnum = prompt("Enter sec  number")
if (secnum <= 10) {
  console.log("Bingo! Correct")

}
else {
  console.log("Close enough")

}

// 13. Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)

var teamA = prompt("Enter a teamA")
var teamB = prompt("Enter a teamB")
var scteamA = prompt("Enter team 1 score")
var scteamB = prompt("Enter team 2 score")

if (scteamA > scteamB) {
  console.log(teamA + "has won the game")


}
else if (teamB > scteamA) {
  console.log(teamB + "has won the game")

}
else if (scteamA === scteamB) {
  console.log("there is a tie between" + teamA + "and" + teamB)

}


// 13. Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)



// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.

var number = prompt("Enter a number")

if (number % 3 == 0) {
  console.log("number is divisible by" + number)

}


// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.

// 
// 14. Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly. Like :

var x = prompt("Enter string")
console.log(x + " is a " + typeof (x))

var y = parseInt(prompt("Enter a number"))
console.log(y + "is a " + typeof (y))

var z = prompt("Enter a boolean")
console.log(z + " is a" + typeof (z))

// 14. Take a string, a number and a Boolean in three variables.
// // Write a program that checks the type of variables & responds
// // accordingly. Like :


// 9. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table:

var marksobtained = parseInt(prompt("Enter obtained marks"))
var totalmarks = parseInt(prompt("Enter totalmarks"))
var percen = parseInt(prompt(marksobtained / totalmarks * 100))

if (percen >= 80) {
  console.log("marksObtained is" + marksobtained + "totalmarks" + totalmarks + "percentage is" + percen + "A+ Grade")
}
else if (percen >= 70) {
  console.log("marksObtained is" + marksobtained + "totalmarks" + totalmarks + "percentage is" + percen + "A+ Grade")
}
else if (percen >= 60) {
  console.log("marksObtained is" + marksobtained + "totalmarks" + totalmarks + "percentage is" + percen + "B Grade")
}
else if (percen < 50) {
  console.log("marksObtained is" + marksobtained + "totalmarks" + totalmarks + "percentage is" + percen + "Fail!")
}





// 9. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table: