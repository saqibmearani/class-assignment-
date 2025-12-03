var firstName =prompt("Enter your first name")
var lastName  =prompt("Enter your last name")
var fullName = firstName + lastName
alert(fullName)


//

var mobileModel = prompt("Enter your favorite mobile phone model")
var length = mobileModel.length
alert("my favorite phone is " +  mobileModel   + "  length of string " +  length)


//

var x = "Pakistani"
var index = x.indexOf("n")
alert("The index of 'n' in 'Pakistani' is " + index)

//

var a = "Hello World"
var lastIndex = a.lastIndexOf("l")
alert("The last index of 'l' in 'Hello World' is: " + lastIndex)

//

var b = "Pakistani"
var character = b.charAt(3)
alert("The character at index 3 is: " + character)


//

var firstName = prompt("Enter your first name:")
var lastName = prompt("Enter your last name:")
var fullName = firstName.concat(" ", lastName)
alert(fullName )


//
var city = "Hyderabad"
var newCity = city.replace("Hyderabad", "Islamabad")
alert(newCity)

//

var message =prompt("enter the massage")
var updatedMessage = message.replace(/and/g, "&")
alert(updatedMessage)

//

var str = "472"
var num = Number(str)
document.write("Value: " + str + "  Type: " + typeof str + "<br>")
document.write("Value: " + num + "  Type: " + typeof num)


//
var y = prompt("Enter any text")
var uppercase = y.toUpperCase()
alert("CAPITAL LETTERS: " + uppercase)

//
var y = prompt("Enter any text")
var lowercase = y.toLowerCase()
alert("lowercase : " + lowercase)

//


var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("Enter the item you want to search:")
var searchItem = userInput.toLowerCase()
var found = false
for (var i = 0; i < A.length; i++) {
    if (A[i] === searchItem) {
        found = true
         alert(userInput + " is available ")
        break   
    }
else {
    alert(userInput + " is not available ")
    break
}
}