function displayName(name = null) {
    return name;
}

function ComputeTwoNumbers(num1,num2)
{
    return num1 + num2
}

function confirmSubmission() {
    if(confirm("Are you Really Sure?"));
        alert(ComputeTwoNumbers(12,3));
}

function computeGrade() {
    var name = prompt("Enter Your Name: ");
    document.write("Name entered: " + name + "<br>");
    console.log("Name entered: " + name);
    document.write("<br>");
    

    var totalItem = parseInt(prompt("Enter total Item:"));
    document.write("Total Item entered: " + totalItem + "<br>");
    console.log("Total Item entered: " + totalItem);
    document.write("<br>");

    var totalScore = parseInt(prompt("Enter total Score:"));
    document.write("Total Score entered: " + totalScore + "<br>");
    console.log("Total Score entered: " + totalScore);
    document.write("<br>");

    var grade = formula(totalItem, totalScore).toFixed(2);
    document.write("Calculated Grade: " + grade + "<br>");
    console.log("Calculated Grade: " + grade);
    document.write("<br>");

    var result = checkResult(grade);
    document.write("Result: " + result + "<br>");
    console.log("Result: " + result);
    document.write("<br>");

    alert("Your name is: " + name + "\nYour Grade: " + grade + "\nResult: " + result);
}


function checkResult(grade) {
    if (grade <=3.00 ) {
       return "You Passed";
    } else {
        return "You Failed";
    }
}
function formula(totalItem, totalScore){
    return -4* (totalScore/totalItem) + 5;
}
computeGrade()


