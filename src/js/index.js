const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const outputClass = document.querySelector(".output");
const output = document.querySelector(".output #output");
const outputImg = document.querySelector(".output #output-img");

function checkForBirthdayAndLuckyNumber() {
    const dob = dateOfBirth.value;

    if(dob ==="" && luckyNumber.value === "") {
        displayOutput("You did not enter Birthdate or Lucky Number!!");
    } else {
        const sum = calculateSumOfBirthDate(dob);
        if(Number(luckyNumber.value) > 0) {
            compareValues(sum, luckyNumber.value);
        } else {
            displayOutput("Lucky Number cannot be negative!!");
        }
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
        displayOutput("Your Birthday is lucky!!🎉🎊");
        displayImage("../assets/lucky.gif");
    } else {
        displayOutput("You create your own luck!💪😤");
        displayImage("../assets/luck.gif");
    }
}

function displayImage(img) {
    outputImg.style.display = "block";
    outputImg.src = img;
}

function displayOutput(msg) {
    outputClass.style.display = "block";
    output.innerText = msg;
}

checkButton.addEventListener("click", checkForBirthdayAndLuckyNumber);