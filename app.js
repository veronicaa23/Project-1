//Step 1
const randomDecimal = Math.random();

//Step 2
const range = 33 - 3 + 1; //31

//Step 3
const randomInRange = randomDecimal * range; //Adjusting the range to get a number between 0 (inclusive) and and the value of 'range' (exclusve)

//Step 4
const randomInt = Math.floor(randomInRange); //Convert the decimal number to an integer to get values between 0 and (range -1)

//Step 5
const shiftValue = randomInt + 3; //shift the range to get an integer between 3 and 33


//Codde given from exercise 2
const friend = "BRUTUS"

//Code from Exercise 2
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Code from exercise 1
let partyLocation = "PALACE ROOF"; //String

//String
let encodedMessage = "soddfh ollc xq cfsb"; //Output: palace roof at five, this will change once we encode the message

//String
let decryptedMessage = "PALACE ROOF AT FIVE"; //Output: soddfh ollc xq cfsb, this will change when we decode the message

//Soolean
let partySafe = false; //hopefully, doesn't chnge

Number.isInteger(shiftValue);

//Code from Exercise 2
const firstLetter = friend [0];
const index = alphabet.indexOf(firstLetter.toLowerCase());


//Code from Exercise 2
const newIndex = index + shiftValue % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];


//Code from Exercise 2
const alphabetLength = alphabet.length;


//Code from Exercise 2
const encryptedMessage = "EUXWXV";
const partialMessage = encryptedMessage.slice(0,3);

//Question 1: Why did we add 1 to the difference between 33 and 3?
//Answer: Adding 1 ensures we include both endpoints of our range, 3 and 33, that makes it so that we have a total of 31 possible numbers from 3 to 33.

//Question 2: How does multiplying randomDecimal by range help us get a number within our desired range?
//Answer: By multipying the randomDecimal that's between 0 and 1, by the range you scale the output up to the size of the range.

//Question 3: Why do we use the Math.floor() function instead of other rounding methods like Math.round()?
//Answer: By using Math.floor() it always rounds downn to the nearest whole number, giving us an integer between 0 and range -1. Using Math.round could round up, causing us to exceed the number we wanted.

//Question 4: How does adding 3 to randomInt ensure that our final shiftValue is between 3 and 33?
//Answer: randomInt is set to a number between 0 and -1, adding 3 shifts this range up, which results in numbers between 3 and 33 and that's what we're trying to do in this code and keeping it inclusive.

