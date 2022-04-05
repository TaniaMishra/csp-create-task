// Schedule Requirements
let req = ["Personal Hygiene", "Meal", "Snack", "Relaxation", "Exercise", "Brain Work",
    "Chores", "Social Leisure", "Personal Leisure", "Wake Up", "Bedtime"];
let reqElements = [];
let selectElements = document.getElementsByClassName("dropdowns");

document.getElementById("check").addEventListener("click", checkSchedule);
    
// populate dropdowns immediately on load
populateDropdowns();

// populate dropdowns with requirements
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

// check the schedule on click
function checkSchedule() {
    let selectedValues = [];
    let output = document.getElementById("feedback");

    // get the selected values from the dropdowns
    for (let i = 0; i < selectElements.length; i++) {
        selectedValues.push(selectElements[i].value);
    }

    if (checkReqs(selectedValues) == false) {
        output.textContent = "Your schedule does not have all the requirements for a healthy and balanced weekened.";
    }
    else {
        if (checkBedtime(selectedValues) == false) {
            output.textContent = "Great job including everything you need! However, your bedtime routine needs work. Make sure to relax before bed and go to bed before 11 p.m.";
        }
        else {
            output.textContent = "Great job creating a healthy and balanced schedule! Make sure to stick to it this weekend. You can print it here: ";
        }
    }
}

//check if each value of req array is in the selected values
function checkReqs(values) {
    for (let i = 0; i < req.length; i++) {
        let requirement = req[i];
        let workingValues = values;

        // return false if the requirement is not included at least once
        let index = workingValues.indexOf(requirement);
        if (index == -1) {
            return false;
        }
        workingValues.splice(index, 1);

        // return true if snack & personal leisure are included at least twice
        if (requirement == "Snack" | requirement == "Personal Leisure") {
            if (workingValues.includes(requirement)) {
                return true;
            }
        }

        // check meals, relaxations, & brain work sessions
        if (requirement == "Meal" | requirement == "Relaxation" | requirement == "Brain Work") {
            // return false if meal, relaxation, or brain work is not included at least twice
            index = workingValues.indexOf(requirement);
            if (index == -1) {
                return false;
            }
            workingValues.splice(index, 1);
            // return false if meal, relaxation, or brain work is not included at least three times
            index = workingValues.indexOf(requirement);
            if (index == -1) {
                return false;
            }
            workingValues.splice(index, 1);
            // return false if brain work is not included at least four times
            index = workingValues.indexOf(requirement);
            if (requirement == "Brain Work" && index == -1) {
                return false;
            }
        }
    }
    return true;
}

// check if the bedtime routine follows requirements
function checkBedtime(values) {
    let bedtimeIndex = values.indexOf("Bedtime");

    // return false if bedtime is at 11 or 11:30 pm
    if (bedtimeIndex == values.length-3 | bedtimeIndex == values.length-1) {
        return false;
    }

    // return false if relaxation is not scheduled right before bedtime
    if (values[bedtimeIndex-2] != "Relaxation") {
        return false;
    }

    return true;
}