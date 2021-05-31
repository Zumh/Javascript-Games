// 4 variables imported from HTML
var grades = document.getElementById("grades");
var Average = document.getElementById("avggrades");
var Final = document.getElementById("finalgrade");
var IGrade = document.getElementById('yourgrades');

// Making an output so something would happen when you would input something to the textbox and press calculate
function outputData(allGrades, averageGrades, finalGrade){
    // Converting everything into HTML text
    grades.innerHTML = allGrades;
    Average.innerHTML = averageGrades.toFixed(1);
    Final.innerHTML = finalGrade;
}

// Saving your "progress"
function saveGradeAsCookie(averageGrades, finalGrade){
    console.log("Cookie will be saved.");
}

// Calculating all of the variables so that you get the total grades from high to low, your average grade and your final grade
function calculateGrade(allGrades){
    // making local variables for total grades, average grades and final grade
    var totalGrades = 0;
    var averageGrades = 0;
    var finalGrade = 0;
    var finalGrades = ["A", "B", "C", "D", "F"];
    // Calculating the average grade
    for(var Index = 0; Index < allGrades.length; Index++){
        totalGrades += parseInt(allGrades[Index]);
        averageGrades = totalGrades / allGrades.length; 
    }

    // Ranking the average grade from A to F, just like in school!
    if(averageGrades >= 90){
            finalGrade = finalGrades[0];
            Final.className = "green";
    } else if(averageGrades >= 80 && averageGrades < 90){
            finalGrade = finalGrades[1];
            Final.className = "teal";
    } else if(averageGrades >= 70 && averageGrades < 80){
            finalGrade = finalGrades[2];
            Final.className = "blue";
    } else if(averageGrades >= 60 && averageGrades < 70){
            finalGrade = finalGrades[3];
            Final.className = "orange";
    } else{
        finalGrade = finalGrades[4];
        Final.className = "red";
    }

    // Creating a signal whenever you input something
    outputData(allGrades, averageGrades, finalGrade);
    // Saves your "progress" on your average and final grade
    saveGradeAsCookie(averageGrades, finalGrade);
}

// Sorts the grades from high to low, and is the catalyst to the whoel calculation
function parseData(Input){
    // 90, 80, 90
    // 90 80 90
    var grades = Input.split(",");
    grades = grades.sort(function(a,b){ return  b-a });
    calculateGrade(grades);
}

// Whenever you press submit, 2 things will happen
function submit(){
    
    // You input nothing, you get an alert saying you did not enter anything
    if(IGrade.value === ''){
      alert("You did not enter any grades"); 
      // If you inputed something, then it would calculate the average, all grades and the final grade 
    } else{
        parseData(IGrade.value);
    }
}