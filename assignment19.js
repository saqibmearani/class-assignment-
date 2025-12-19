// var num = prompt("Enter a positive number:")
// num = parseFloat(num)
// document.write("Number " + num + "<br>");
// document.write("Round off value " + Math.round(num) + "<br>")
// document.write("Floor value " + Math.floor(num) + "<br>")
// document.write("Ceil value " + Math.ceil(num) + "<br>")

//     //
// var Absolute= prompt("Enter a number:")
// Absolute = parseFloat(Absolute);
//   var absoluteValue = Math.abs(Absolute)
// document.write("Absolute value: " + absoluteValue)

//     //
// var coin = Math.floor(Math.random() * 2)

//     if (coin === 0) {
//           document.write("random coin value: Heads")
//  } else {
//        document.write("random coin value: Tails")
//     }

  // //
//     var randomNumber = Math.floor(Math.random() * 100) + 1
//   document.write(randomNumber)
    
// //
// var secretNumber = Math.floor(Math.random() * 10) + 1
// var userNumber = parseInt(prompt("Enter a number between 1 and 10"))
// if (userNumber === secretNumber) {
//     alert("Congratulations! You guessed the correct number")
// } else {
//     alert("Sorry! The secret number was " + secretNumber)
// }

//
var now = new Date()

console.log(now)
//
var months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
]

var now = new Date()
var currentMonth = months[now.getMonth()]

alert(currentMonth)
//
var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var today = new Date()
var currentDay = day[today.getDay()]

alert("today is "+currentDay)
//
var today = new Date()
var day = today.getDay() 
if (day === 0 || day === 6) {
    alert("It is Fun day")
}

//

var laterDate = new Date(2020, 11, 31);
     alert(laterDate)


     //
     
var today = new Date()
var day = today.getDate()
if(day < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// 
var now = new Date();
var hour = now.getHours();
if(hour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}
