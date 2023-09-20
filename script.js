// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    let expression = document.getElementById("result").value;
    let answer = eval(expression);
    document.getElementById("result").value = answer;
}