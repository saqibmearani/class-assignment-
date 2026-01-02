function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

console.log(power(2, 5)); // 32

//
function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

console.log(LeapYear(2020));

//
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    let S = calculateS(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

console.log(triangleArea(5, 6, 7));

//
function customIndex(str, ch) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            return i;
        }
    }
    return -1;
}

console.log(customIndex("javascript", "s"));

//
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, "");
}

console.log(removeVowels("Hello JavaScript"));

//
function countDoubleVowels(text) {
    let count = 0;
    text = text.toLowerCase();

    for (let i = 0; i < text.length - 1; i++) {
        switch (text[i] + text[i + 1]) {
            case "aa":
            case "ee":
            case "ii":
            case "oo":
            case "uu":
            case "ae":
            case "ea":
            case "ui":
                count++;
        }
    }
    return count;
}

console.log(countDoubleVowels("Please read this application and give me gratuity"));

//
function overtime(hoursWorked) {
    if (hoursWorked > 40) {
        return (hoursWorked - 40) * 12;
    }
    return 0;
}

console.log(overtime(45));
