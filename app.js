//Code given for Exercise 8
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Step 1: Create a function named encryptLetter that takes a letter and a shift value as parameters. This function should return the encrypted version of the letter.
function encryptLetter(letter, shift)
{
    const index = alphabet.indexOf(letter.toLowerCase()); //The indexOf method is used to find the index of the letter in the alphabet.
    const newIndex = (index + shift) % alphabet.length; //The modulo operator is used to wrap around the alphabet if the shift value is greater than the length of the alphabet.
    return alphabet[newIndex]; //The new index is used to find the new letter in the alphabet.
}

//Step 2: Create a function named encryptMessage that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.
function encryptMessage(word,shift)
{
    let encryptMessage = ""; //An empty string is created to store the encrypted message.
    for (let i = 0; i < word.length; i++) //A loop is used to iterate through each letter of the word.
    {
        encryptMessage += encryptLetter(word[i], shift); //The encryptLetter function is called for each letter of the word and the encrypted letter is added to the encrypted message.
    }
    return encryptMessage;
}

//Step 3: Create a function named decryptLetter that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.
function decryptLetter (letter,shift)
{
    const index = alphabet.indexOf(letter.toLowerCase()); 
    const newIndex = (index - shift + aphabet.length) %alphabet.length; //The shift value is subtracted from the index to get the new index.
    return alphabet[newIndex];
}

//Step 4: Create a function named decryptMessage that takes an encrypted word and a shift value as parameters. This function should return the decrypted version of the entire word.
function decryptMessage (word, shift)
{
    let decryptMessage = "";
    for (let i = 0; i < word.length; i++) //A loop is used to iterate through each letter of the word.
    {
        decryptMessage += decryptLetter(word[i], shift); //The decryptLetter function is called for each letter of the word and the decrypted letter is added to the decrypted message.
    }
    return decryptMessage;
}


//Question: If Caesar encrypts the word "BRUTUS" using our encryptMessage function and then decrypts the result using our decryptMessage function, will he get "BRUTUS" back? Why or why not?
//Answer: Yes, what will return back to Caesar is "BRUTUS" since the shift value is 3 and the alphabet is 26 letters long. The shift value is less than the length of the alphabet so the word will return back to its original form. The decryption function is the inverse of the encryption function so the word will return back to its original form and cancel each other out.


//Code given for Exercise 7
//const friend = "BRUTUS"
//const shiftValue = 3;

//Recall the Latin alphabet variable from the previous exercise.
//const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Use a loop to iterate through each letter of "BRUTUS". Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable.
let encryptedFriend = "";
for (let i = 0; i < friend.length; i++) //Iterating through each letter of "BRUTUS"
{
    const letter = friend[i];
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index + shiftValue) % alphabet.length;
    encryptedFriend += alphabet[newIndex].toUpperCase();
}

//Code given for Exercise 6
const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }
  };
  
//Adding BRUTUS to the guest directory

guests.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
}

//Updating CICERO's past gifts

guests.CICERO.pastGifts.push("Golden Lyre"); //updating gift to the end of the pastGifts list for CICERO

//Retrieving the region of "ANTHONY"

const antonyRegion = guests.ANTONY.region; //Using dot notations to grab references


//Due to unforeseen political events, "CICERO" needs to be discreetly removed from the guest list.

delete guests.CICERO; //the "delete" keyword to remove properties from an object


//Assign ANTONY's profile to a new variable named generalProfile. Then, using this new variable, change the region of ANTONY to "Egypt".

const generalProfile = guests.ANTONY; // Assigning to new variable
generalProfile.region = "Egypt"; //changing region to Egypt

//Code given for Exercise 5
//const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"]; Guest list from previous exercise but since we're using objects now i'm commenting this code out.

//Exercise 5
guests.unshift("BRUTUS"); //Adding a guest to the beginning of the list.

//Exercise 5
guests.push["AUGUSTUS", "LUCIA"]; //Adding 2 guests to the end of the list

//Exercise 5
const spartacusIndex = guests.indexOf("SPARTACUS"); //Checking if "SPARTACUS" is on the list.

//Exercise 5
const indexToRemove = guests.indexOf("CASSIUS"); //Removing "CASSIUS" due to not being able to attend.
guests.splice(indexToRemove, 1); //(startIndx, deleteCount, itemsToInsert)

//Exercise 5
const specialGuests = guests.slice (0,3); //Sending a special invite to the first 3 guests so I'm excluding them from the list.

//Exercise 5
const honoredGuests = guests.slice (0,1); //Extracting honored guests
const otherGuests = guests.slice (1) //Extracting the rest of the guests.
otherGuests.sort(); //Sorts the other guests
const sortedGuests = honoredGuests.concat(otherGuests); //Combines both arrays, keeping the honored guests at the top and placing the rest in alphabetical order.


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
//const shiftValue = randomInt + 3; //shift the range to get an integer between 3 and 33
//commenting out the code above since it's already at the top of the page


//Codde given from exercise 2
//const friend = "BRUTUS"
//commenting out the code above since it's already at the top of the page

//Code from Exercise 2
//const alphabet = "abcdefghijklmnopqrstuvwxyz";
//commenting out the code above since it's already at the top of the page

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
