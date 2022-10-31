let userInput: unknown; // use to force us to recheck the type
let userName : string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
} 


function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}
// this () return 'never' types
generateError("An error occured!",500)