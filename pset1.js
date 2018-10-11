/******************
Calculate how old you will be in N years
This function will tell you your age in N years
takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

/*
const myAge = function(ageNow, numYears) {
    return ageNow + numYears;
}
console.log('myAge(28, 12)', myAge(28, 12));
*/

const myAge2 = (ageNow, numYears) => {
    return ageNow + numYears;
}
console.log('myAge2(28, 12)', myAge2(28, 12));

const myAge3 = (ageNow, numYears) => ageNow + numYears;
console.log('myAge3(28, 12)', myAge3(28, 12));



/******************
Concatenate Strings
Concatenating string variables
- Create a function called myConcatenate that takes 3 arguments
    * Create an argument called firstStr
    * Create a second argument called secondStr
    * Create a third argument called thridStr
- Concatenate all three arguments in a variable called mySentence
    * console out mySentence variable
- Call myConcatenate function
******************/

const myConcatenate2 = (firstStr, secondStr, thirdStr) => firstStr + " " + secondStr + " " + thirdStr;
console.log('myConcatenate', myConcatenate2('I', 'am', 'iron man')); // 'I am iron man'

const myConcatenate3 = (firstStr, secondStr, thirdStr) => {
    return firstStr + " " + secondStr + " " + thirdStr;
}
console.log('myConcatenate', myConcatenate3('I', 'am', 'iron man')); // 'I am iron man'

/******************
Subtract Function
Write a subtract function
This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/

function subtract(a,b) {
    
}

const subtract2 = (a, b) => a - b;
const subtract3 = (a, b) => {
    return a - b;
}

/******************
Area of A Circle
Write a function called areaOfaCircle()
The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/


function areaOfaCircle(radius){
    
    
}    

const areaOfaCircle2 = radius => {
    return Math.PI * radius ** 2;
}

const areaOfaCircle3 = (radius) => {
    return Math.PI * radius ** 2;
}

const areaOfaCircle4 = (radius) => Math.PI * radius ** 2;
const areaOfaCircle5 = radius => Math.PI * radius ** 2;

/******************
Temperature Converter Fahrenheit to Celsius
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
******************/

const fahrenheitToCelsius = (F) => `${F}°F is ${(F-32) * 5/9}°C.`;
const fahrenheitToCelsius2 = F => {
    const C = (F-32) * 5/9
    const message = `${F}°F is ${C}°C.`;

    return message;
}


/******************
Temperature Converter Celsius to Fahrenheit
Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
******************/


/******************
Is it the weekend?
Please write a function called "isItTheWeekend" that has two conditions:
If it is the weekend, return 'Yes, it's the weekend'
If it is not the weekend, return 'No, it's the weekday';
A working example would be:
var today = isItTheWeekend();
console.log(today); // No, it's the weekday
If you are having trouble, please note that Javascript has a helpful built-in function to help get the current day
******************/



/******************
Finding the absolute value of a number
write a function called absolute
The function takes one parameter which is a number
The function should return the absolute value of the number
The absolute value of a negative number is the positive version of that same number,
and the absolute value of a positive number (or zero) is that number itself.
******************/


/******************
Create a function that counts the number of characters in your name
Character counter
write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/
