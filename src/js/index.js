const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const output = document.querySelector(".output");

function checkForBirthdayAndLuckyNumber() {
    const dob = dateOfBirth.value;

    if(dob ==="" && luckyNumber.value === "") {
        output.innerText = "You did not enter Birthdate or Lucky Number!!";
    } else {
        const sum = calculateSumOfBirthDate(dob);
        compareValues(sum, luckyNumber.value);
    }
}

function calculateSumOfBirthDate(dob) {
    dob = dob.replaceAll("-", "");
    var sum = 0;

    for(let idx = 0; idx<dob.length; idx++) {
        sum += Number(dob.charAt(idx));
    }
    return sum;
}

function compareValues(sum, luckyNumber) {
    if(sum % Number(luckyNumber) == 0) {
        output.innerText = "Your Birthday is lucky!!🎉🎊";
    } else {
        output.innerText = "You create your own luck!💪😤";
    }
}

checkButton.addEventListener("click", checkForBirthdayAndLuckyNumber);