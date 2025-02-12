const friend = "BRUTUS"
const shiftValue = 3;

//Step 1
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Code from last exercise
let partyLocation = "PALACE ROOF"; //String

//String
let encodedMessage = "soddfh ollc xq cfsb"; //Output: palace roof at five, this will change once we encode the message

//String
let decryptedMessage = "PALACE ROOF AT FIVE"; //Output: soddfh ollc xq cfsb, this will change when we decode the message

//Soolean
let partySafe = false; //hopefully, doesn't chnge

Number.isInteger(shiftValue);

//Step 2
const firstLetter = friend [0];
const index = alphabet.indexOf(firstLetter.toLowerCase());

//Question 1: Oh, I know B is the 2nd letter of the alphabet. Then, why the result is 1 instead of 2?
//Answer: JavaScript starts at 0 when indexing, which means the first letter of a string is 0.

//Step 3 and Step 5
const newIndex = index + shiftValue % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];

//Question 2:If we continue shifting letters and go beyond the last letter, "z", which operator could help us to wrap around and continue from the beginning of the alphabet?
//Answer: The modulus operator (%), helps wrap around the alphabet, it ensures that the result wraps around staring from zero. This operator ensures we always get a valid index within the bounds of the aphabet.

//Step 4
const alphabetLength = alphabet.length;



//Step 6
const encryptedMessage = "EUXWXV";
const partialMessage = encryptedMessage.slice(0,3);

