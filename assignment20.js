function date(){
    var hour = new Date()
    console.log(hour)
    
}
date()


//
function Name(){
    var fname=prompt("enter your first name")
    var lname=prompt("enter your last name")
    var fullname=fname+ lname
    alert(fullname)
}
Name()

//


function sum(){
    var num1 = +prompt("enter number")
    var num2 = +prompt("enter number")
    var sum = num1+num2
    console.log(sum);
    
}
sum()

//
function calculator(){
    var num1 = +prompt("enter number")
    var num2 = +prompt("enter number")
    var operator = prompt("enter operator + - / % *")
    var result=""
    if(operator === "+"){
        result=num1 +num2
        alert(result)
    }
    else if(operator === "-"){
        result=num1 -num2
        alert(result)
    }
    else if(operator === "/"){
        result=num1 /num2
        alert(result)
    }
    else if(operator === "%"){
        result=num1 %num2
        alert(result)
    }
    if(operator === "*"){
        result=num1 * num2
        alert(result)
    }
    
}
calculator()

//
function square(x) {
    return x * x
}
console.log(square(5))

//
function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}


counting(1, 100000000)


//
function calculatehypotenuse(base, perpendicular) {
    function calculatesquare(value) {
        return value * value;
    }
    var hypotenuse2 =
        calculatesquare(base) + calculatesquare(perpendicular)
    var hypotenuse = Math.sqrt(hypotenuse2);
    return hypotenuse;
}
var result = calculatehypotenuse(3, 4)
console.log("Hypotenuse =", result)
//
function A(width,height){
       var a=width*height
       console.log(a);
       
}
A(3,7);
 
//

function capitalizeFirstLetter(str) {
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(' ');
}
let example = 'the quick brown fox';
let result = capitalizeFirstLetter(example);
console.log(result);  

//
function a(str) {
    
    let words = str.split(' ')
    let longestWord = ''


    for (let word of words) {

        if (word.length > longestWord.length) {
            longestWord = word
        }
    }

    return longestWord
}
let exampleString = 'Web Development Tutorial'
let result = a(exampleString);
console.log(result) 
