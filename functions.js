// Schedule Requirements
let req = ["Personal Hygiene", "Meal", "Snack", "Relaxation", "Exercise", "Brain Work",
    "Chores", "Social Leisure", "Personal Leisure", "Wake Up", "Bedtime"];
let reqElements = [];

document.getElementById("check").addEventListener("click", checkSchedule);

// let sel6 = document.getElementById("6");
// let sel630 = document.getElementById("630");
// let sel7 = document.getElementById("7");
// let sel730 = document.getElementById("730");
// let sel8 = document.getElementById("8");
// let sel830 = document.getElementById("830");
// let sel9 = document.getElementById("9");
// let sel930 = document.getElementById("930");
// let sel10 = document.getElementById("10");
// let sel1030 = document.getElementById("1030");
// let sel11 = document.getElementById("11");
// let sel1130 = document.getElementById("1130");
// let sel12p = document.getElementById("12p");
// let sel1230p = document.getElementById("1230p");
// let sel1p = document.getElementById("1p");
// let sel130p = document.getElementById("130p");
// let sel2p = document.getElementById("2p");
// let sel230p = document.getElementById("230p");
// let sel3p = document.getElementById("3p");
// let sel330p = document.getElementById("330p");
// let sel4p = document.getElementById("4p");
// let sel430p = document.getElementById("430p");
// let sel5p = document.getElementById("5p");
// let sel530p = document.getElementById("530p");
// let sel6p = document.getElementById("6p");
// let sel630p = document.getElementById("630p");
// let sel7p = document.getElementById("7p");
// let sel730p = document.getElementById("730p");
// let sel8p = document.getElementById("8p");
// let sel830p = document.getElementById("830p");
// let sel9p = document.getElementById("9p");
// let sel930p = document.getElementById("930p");
// let sel10p = document.getElementById("10p");
// let sel1030p = document.getElementById("1030p");
// let sel11p = document.getElementById("11p");
// let sel1130p = document.getElementById("1130p");

let selectElements = document.getElementsByClassName("dropdowns");
    
populateDropdowns();

function populateDropdowns() {
    for (let i = 0; i < req.length; i++) {
        let value = req[i];
        for (let i = 0; i < selectElements.length; i++) {
            let element = document.createElement("option");
            element.text = value;
            element.value = value;
            selectElements[i].appendChild(element);
        }
    }
}

function checkSchedule() {
    let selectedValues = [];
    let output = document.getElementById("feedback");

    for (let i = 0; i < selectElements.length; i++) {
        selectedValues.push(selectElements[i].value);
    }

    //check if each value of req array is in the selected values
    let requirements = checkReqs(selectedValues);
    if (requirements == false) {
        output.textContent = "Your schedule does not have all the requirements for a healthy and balanced weekened.";
    }
    else {
        output.textContent = "Great job creating a healthy and balanced schedule! Make sure to stick to it this weekend. You can print it here: ";
    }
}

function checkReqs(values) {
    for (let i = 0; i < req.length; i++) {
        let requirement = req[i];
        let workingValues = values;
        console.log(workingValues);

        let index = workingValues.indexOf(requirement);
        console.log(index);
        if (index == -1) {
            console.log(requirement + " not included");
            return false;
        }
        workingValues.splice(index, 1);
        if (requirement == "Snack" | requirement == "Personal Leisure") {
            if (workingValues.includes(requirement)) {
                console.log(requirement + " good :)");
                return true;
            }
        }
        if (requirement == "Meal" | requirement == "Relaxation" | requirement == "Brain Work") {
            index = workingValues.indexOf(requirement);
            console.log(index);
            if (index == -1) {
                console.log(requirement + " not included 2x");
                return false;
            }
            workingValues.splice(index, 1);
            index = workingValues.indexOf(requirement);
            console.log(index);
            if (index == -1) {
                console.log(requirement + " not included 3x");
                return false;
            }
            workingValues.splice(index, 1);
            index = workingValues.indexOf(requirement);
            console.log(index);
            if (requirement == "Brain Work" && index == -1) {
                console.log(requirement + " not included 4x");
                return false;
            }
        }
        console.log(requirement + " good :)");
    }
    return true;
}