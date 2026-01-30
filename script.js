// // var city = prompt("city")
// // var weather = +prompt("weather")
// //             if(weather >= 40){
// //                 alert(city +" It is too hot outside")
// //             }
// //             else if(weather >= 30){
// //                 alert(city +" The Weather today is Normal")
// //             }
// //              else if(weather >= 20){
// //                 alert(city +" Today’s Weather is cool")
// //             }
// //              else if(weather >= 10){
// //                 alert(city +" OMG! Today’s weather is so Cool")
// //             }
// //             else{
// //                 alert(city + " cold")
// //             }
// // console.log("i like eat "+Array["0"]);
// // console.log("i like eat "+Array["1"]);
// // console.log("i like eat "+Array["2"]);
// // console.log("i like eat "+Array["3"]);
// // console.log("i like eat "+Array["4"]);
// // console.log("i like eat "+Array["5"]);
// // arr=["apple","mango","banana","orange","peach"]
// // console.log(arr);
// // arr.pop()
// // Arr.push('car')
// // arr.shift()
// // arr.unshift("car")
// // var v =arr.indexOf("banana")
// // console.log(v);
// // var sl=arr.slice(1,3)
// // console.log(sl);
// // let alphabets = [
// //   "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// // var sp=alphabets.splice("0","1","2","3","4")
// // console.log(sp);
// // for(let i =1; i<=20; i++){
// //   document.write(i)
// // }
// // for(let a =1; a<=12; a++){
// //   console.log("8 x"+a+"="+(8*a));
// // }
// // let num = +prompt("enter a number")
// // for(i=1;i<=10;i++){
// //   document.write(`${num} x ${i} = ${num*i}<br />`)
// // }
// // for (let i = 1; i <= 20; i++) {
// //   if (i % 2 === 0) {
// //     console.log(i+ " is even");
// //   }
// //   else{
// //     console.log(i+ " is odd");
// //   }
// // }
// // for (let i = 1; i <= 20; i++) {
// //   if (i % 2 !== 0) {
// //     console.log(i);
// //   }
// // }
// // let numbers =[70, 33, 79 ,99, 150, 44 ,23]
// // let largest = numbers[0]; 
// // for (let i = 1; i < numbers.length; i++) {
// //     if (numbers[i] > largest) {
// //         largest = numbers[i];
// //         console.log("Largest number is:", largest);
// //     }
// // }
// // let  sub1 =60
// // let  sub2 =70
// // let  sub3 =90
// // let  sub4 =94
// // let totalMarks=400
// // var obtained = sub1 + sub2 + sub3+sub4
// // var percentage = (obtained / totalMarks) * 100
// // for(percentage=1;percentage<=70;percentage++){
// // }
// //   if(percentage<=60){
// //     alert(pass)
// //   }
// //   else(
// //     alert(fali)
// //   )
// var numbers = [10, 20, 30, 40];
// var count = numbers.length;
// alert(count); 
// var flag = true;
// console.log(flag);
// for (let i = 0; i < 10; i++) {
// }
// for (let i = 1; i <= 12; i++) {
// }
// for(var i=0; i<=4; i++) {
//     console.log(i);
// }
// for (let j = 0; j < 100; j++) {
// }
// for (let i = 3; i > 0; i--) {
// }
// let length = arr.length;
// let flag = true;
// for (let i = 0; i < pets.length; i++) {
// }
// for (let i = 0; i < 10; i++) {
//     if (i === 1) {
//         alert(i);
//         break;
//     }
// }
// const userNames = ["saqib", "safdar", "abdullah", "rayan", "atif"];
// const firstName = prompt("Enter first name");
// for (let i = 0; i < userNames.length; i++) {
//     if (userNames[i] === firstName) {
//         alert("Enter");
//         break;
//     } else {
//         alert("Please write correct user name");
//     }
// }
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//     if (userInput === list[i]) {
//         alert("Match found");
//         matchFound = true;
//         break;
//     }
// }
// if (!matchFound) {
//     alert("No match found");
// }
// function table(a){
//     for( i = 1; i <= 10; i++){
//         console.log(a+"x"+i+"="+a * i);
//     }
// }
// table(5);
// function date(){
//     var hour = new Date().getHours()
//     if(hour<12){
//         console.log("morning");
//     }
//     else if(hour>12 && hour<18){
//         console.log("after noon");
//     }
//     else{
//         console.log("night");   
//     }
// }
// date()


// let day;
// let date = new Date().getDay()
// switch (date) {
//   case 0 ,2:
//     day = "start of day"
//     break;

//   case 3 ,5:
//     day = "mid of day"
//     break;
 

//   case  6:
//     day = "weakend"
// }
// console.log(day)

// function store(){
//     var cal = document.getElementById('product').value
//     var pr;
//     var ts;
//     var tp;
//  switch(cal){
//  case 'iphone':
//     pr=100000
//     ts=12
//     tp=pr*ts
//   break;
// }
// document.getElementById('price').value =pr
// document.getElementById('stock').value =ts
// document.getElementById('total').value =tp
// }


function quiz() {
    var score = 0;

    var q1 = prompt(" What does HTML stand for?")
    if (q1 === "hyper text markup language") score++
    var q2 = prompt("Choose the correct HTML element for the largest heading:?");
    if (q2 ==="h1") score++;
    var q3 = prompt("What is the correct HTML element for inserting a line break?");
    if (q3 ==="br") score++;
    var q4 = prompt("What device is called the brain of the computer?");
    if (q4 ==="cpu") score++;
     var q5 = prompt("Which language is mainly used for web pages?");
    if (q5 ==="html") score++;
     var q6 = prompt("What do we call physical parts of a computer?");
    if (q6 ==="hardware") score++;
     var q7 = prompt("What do we call a set of instructions for a computer?");
    if (q7 ==="program") score++;
     var q8 = prompt("Which device is used to type text?");
    if (q8 ==="keyboard") score++;
     var q9 = prompt("What type of memory is temporary?");
    if (q9 ==="ram") score++;
     var q10 = prompt("Which operating system is developed by Microsoft?");
    if (q10 ==="window") score++;
    alert("Your Score: " + score );
}


quiz();