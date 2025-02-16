//Code given for Exercise 5
const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"]; //Guest List

//Step 1
guests.unshift("BRUTUS"); //Adding a guest to the beginning of the list.

//Question 1: How can you verify that "BRUTUS" was added to the beginning of the array?
//Answer: You can verify by using indexOf or first element of guests to locate and verify that in the array using guests[0] to check.

//Step 2
guests.push["AUGUSTUS", "LUCIA"]; //Adding 2 guests to the end of the list

//Step 3
const spartacusIndex = guests.indexOf("SPARTACUS"); //Checking if "SPARTACUS" is on the list.

//Questiom 2: What would the value of spartacusIndex be if "SPARTACUS" wasn't invited?
//Answer: The value of spartacusIndex would be if he wasn't invited when using the indexOf method would return -1.

//Step 4
const indexToRemove = guests.indexOf("CASSIUS"); //Removing "CASSIUS" due to not being able to attend.
guests.splice(indexToRemove, 1); //(startIndx, deleteCount, itemsToInsert)

//Step 5 
const specialGuests = guests.slice (0,3); //Sending a special invite to the first 3 guests so I'm excluding them from the list.

//Step 6
const honoredGuests = guests.slice (0,1); //Extracting honored guests
const otherGuests = guests.slice (1) //Extracting the rest of the guests.
otherGuests.sort(); //Sorts the other guests
const sortedGuests = honoredGuests.concat(otherGuests); //Combines both arrays, keeping the honored guests at the top and placing the rest in alphabetical order.

//Below is the codes from previous exercises:

//Code given for Exercise 4
const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

//Exercise 4
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

//Exercise 4
if (emblemClue2 === "Laurel" && locationStart === "Forum")
{
    locationStart += " of Augustus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa")
{
    locationStart += " of Pompey"
}

//Exercise 4
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
