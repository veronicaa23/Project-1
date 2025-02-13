//Code given for Exercise 4
const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

//Step 1
let locationStart = "";


if (emblemClue1 === "Eagle")
{
    locationStart = "Forum";
}
else if (emblemClue2 === "lion")
{
    locationStart = "Colosseum";
}
else 
{ 
    locationStart = "Villa"
}

//Step 2
if (emblemClue2 === "Laurel" && locationStart === "Forum")
{
    locationStart += " of Augustus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa")
{
    locationStart += " of Pompey"
}

//Step 3
switch (emblemClue3)
{
    case 7:
        locationStart += " North";
        break;
    case 3:
        locationStart += " South";
        break;
    case 9:
        locationStart += " East";
        break;
    case 4:
        locationStart += " West";
        break; 
}

//Question: Why is it important to be careful when using == (double equals) instead of === (triple equals) in our conditionals?
//Answer: Double equals (==), tries to convert the operands to the same type before making the comparison. While using triple equals (===) checks both the value and the type, ensuring a stricter equality check. Using double equals can lead to unexpected results in certain situations so that's why we 99.99% of the time only use triple equals (===).


//Code from Exercise 3
const randomDecimal = Math.random();

//Code from Exercise 3
const range = 33 - 3 + 1; //31

//Code from Exercise 3
const randomInRange = randomDecimal * range; //Adjusting the range to get a number between 0 (inclusive) and and the value of 'range' (exclusve)

//Code from Exercise 3
const randomInt = Math.floor(randomInRange); //Convert the decimal number to an integer to get values between 0 and (range -1)

//Code from Exercise 3
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
