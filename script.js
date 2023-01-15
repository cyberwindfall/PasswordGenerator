

let generateBtn = document.querySelector("#generate");
let specialChar = "!@#$%^&*()-=_+";
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '1234567890';

function CheckPassLen() {
    let passwordLen = parseInt(prompt('How long should we make password? (10-64 characters'));
    confirm('You have selected ' + passwordLen + ' characters.');
    if (passwordLen > 64) {
        alert('Too many characters selected. Please select a number between 10 and 64.');
        CheckPassLen();
    } else if (passwordLen < 10) {
        alert('Too few characters selected. Please select a number betweeen 10 and 64.');
        CheckPassLen();
    } else if (isNaN(passwordLen)) {
        alert('Please enter a numerical value between 8 and 128.')
        CheckPassLen();
    }
    return passwordLen;
}


function CheckSpecChar() {
    let specialChar = prompt('Would you like to include special characters? Type y or n.');
    confirm("You have selected " + specialChar + " for special characters.");
    if (specialChar === 'y') {
        console.log('Special characters selected.');
    } else if (specialChar === 'n') {
        console.log('No special characters included.');
    } else {
        alert('Please enter y or n to choose.');
        CheckSpecChar();
    }
    return specialChar;
}

function CheckNumber() {
    let numbers = prompt('Would you like to include numbers? Type y or n.');
    confirm("You have selected " + numbers + " for numbers.");
    if (numbers === 'y') {
        console.log('Numbers selected.');
    } else if (numbers === 'n') {
        console.log('No numbers selected.');
    } else {
        alert('Please enter y or n to choose.');
        CheckNumber();
    }
    return numbers;
}

function CheckCaseLow() {
    let lowerCase = prompt('Do you want to include lower case letters? Type y or n.');
    confirm("You have selected " + lowerCase + " lower case letters.");
    if (lowerCase === 'y') {
        console.log('Lower case letters selected.');
    } else if (lowerCase === 'n') {
        console.log('Lower case letters not selected.');
    } else {
        alert('Please enter y or n to choose.');
        CheckCaseLow();
    }
    return lowerCase;
}

function CheckCaseUpper() {
    let upperCase = prompt('Do you want to include upper case letters? Type y or n');
    confirm("You have selected " + upperCase + " lower case letters.");
    if (upperCase === 'y') {
        console.log('Upper case letters selected.');
    } else if (upperCase === 'n') {
        console.log('Upper case letters not selected.');
    } else {
        alert('Please enter y or n to choose.');
        CheckCaseUpper();
    }
    return upperCase;
}

// Write password to the #password input
function WritePassword() {
    let password = GeneratePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function GeneratePassword() {
    let choiceIndex = [CheckPassLen(), CheckSpecChar(), CheckCaseUpper(), CheckCaseLow(), CheckNumber()];
    let characters = "";
    let password = "";
    if (choiceIndex[1] === 'y') {
        characters = characters + specialChar;
    }
    if (choiceIndex[2] === 'y') {
        characters = characters + upperCase;
    }
    if (choiceIndex[3] === 'y') {
        characters = characters + lowerCase;
    }
    if (choiceIndex[4] === 'y') {
        characters = characters + numbers;
    }

    for (let i = 0; i < choiceIndex[0]; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password = password + characters[randomIndex];
    }
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", WritePassword);