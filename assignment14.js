// QUESTION 1
var city= prompt("enter city name")
if(city === "karachi"){
  alert("Welcome to city of lights")
}
else{
    alert("city")
}
// QUESTION 2
var gender= prompt("enter your gender")
if(gender === "male"){
  alert("good morning sir")
}
else if(gender === "femail"){
    alert("good morning mam")
}
// QUESTION 3
var signal= prompt("Enter the color of traffic signal (Red, Yellow, Green)")
if(signal === "red"){
  alert("Must Stop")
}
else if(signal === "yellow"){
    alert("Ready to move")
}
else if(signal === "green"){
    alert("Move now")
}
// QUESTION 4
var fuel= prompt("car fuel")
if(fuel < 0.25){
  alert("“Please refill the fuel in your car”")
}
else{
    alert("You have enough fuel")
}
// QUESTION 5
var a = 4
if (++a === 5){
alert("given condition for variable a is true")
}


var b = 82
if (b++ === 83){
alert("given condition for variable b is true")
}
var c = 12
if (c++ === 13){
alert("condition 1 is true")
}
if (c === 13){
alert("condition 2 is true")
}
if (++c < 14){
alert("condition 3 is true")
}
if(c === 14){
alert("condition 4 is true")
}
var materialCost = 20000
var laborCost = 2000
var totalCost = materialCost + laborCost
if (totalCost === laborCost + materialCost){
alert("The cost equals")
}
if (true){
alert("True")
}
if (false){
alert("False")
}


if("car" < "cat"){
alert("car is smaller than cat")
}
            // QUESTION 6
            var sub1 = +prompt("Enter marks for Subject 1")
            var sub2 = +prompt("Enter marks for Subject 2")
            var sub3 = +prompt("Enter marks for Subject 3")
            var totalMarks =300

            var obtained = sub1 + sub2 + sub3
            var percentage = (obtained / totalMarks) * 100
            var grade = ""
            var remarks = ""

            if (percentage >= 80) {
                grade = "A-one"
                remarks = "Excellent"
            } else if (percentage >= 70) {
                grade = "A"
                remarks = "Good"
            } else if (percentage >= 60) {
                grade = "B"
                remarks = "You need to improve"
            } else {
                grade = "Fail"
                remarks = "Sorry"
            }
            alert("Obtained Marks: " + obtained + "\nPercentage: " + percentage+ "\nGrade: " + grade + 
                "\n remark: " + remarks)
            // QUESTION 7
              var secretNumber = 7
            var userGuess = +prompt("Guess the secret number (1 to 10):")

            if (userGuess === secretNumber) {
                alert("Bingo! Correct answer ");
            } 
            else if (userGuess + 1 === secretNumber) {
                alert("Close enough to the correct answer ");
            } 
            else {
                alert("Try again! The secret number was " + secretNumber);
            }
                // QUESTION 8
var number=+prompt("enter a number")
if(number % 3 ===0){
    alert(number + " is divisible by 3 ")
}
else{
      alert(number + " is not divisible by 3 ")
  
}
            // QUESTION 9
            var number = +prompt("Enter a number")

            if (number % 2 ===0) {
                alert(number +" is an even number ")
            } else {
                alert(number +" is an odd number ")
            }

           // QUESTION 10
            var temperature = +prompt("temperature")
            if(temperature >= 40){
                alert("It is too hot outside")
            }
            else if(temperature >= 30){
                alert("The Weather today is Normal")
            }
             else if(temperature >= 20){
                alert("Today’s Weather is cool")
            }
             else if(temperature >= 10){
                alert("OMG! Today’s weather is so Cool")
            }
            else{
                alert("good")
            }
            // QUESTION 11
            var num1= +prompt("enter first number")
            var num2= +prompt("enter second number")
            var operator= prompt("enter operation (+, -, *, /, %) ")
            var  result = ""
            if(operator ==="+"){
            result = num1 + num2
            alert("Result: " + result);
        }
            else if(operator ==="-"){
            result = num1 - num2
            alert("Result: " + result);
        }
            else if(operator ==="*"){
            result = num1 * num2
            alert("Result: " + result);
        }
            else if(operator ==="/"){
            result = num1 / num2
            alert("Result: " + result);
        }
            else if(operator ==="%"){
            result = num1 % num2
            alert("Result: " + result);
        }