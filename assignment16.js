//
var matrix =[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
console.log(matrix)
//
 for(let i =1; i<=10; i++){
  console.log(i);
}
//
let num = +prompt("enter a number")
let len =+prompt("enter a length")
for(i=1;i<=len;i++){
  document.write(`${num} x ${i} = ${num*i}<br />`)
}
//
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i])
}
//
for(let i =1; i<=20; i++){
    document.write(i)
}

for(let i=10; i>=1;i--){
     document.write(i)
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(i );
  }
 
}
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
   document.write( i);
  }
}
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}
//
let numbers =[70, 33, 79 ,99, 150, 44 ,23]
let largest = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
        console.log("Largest number is:", largest);
    }
    
}
//
var a = [24, 53, 78, 91, 12];
var smallest = a[0]; 

for (var i = 1; i < a.length; i++) {
    if (a[i] < smallest) {
        smallest = a[i];
    }
}

alert("The smallest number is: " + smallest);

//
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}