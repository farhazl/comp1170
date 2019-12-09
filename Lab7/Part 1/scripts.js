/*
Farhaz Ladha
Lab 7 - Part 1
*/

var number1 = "num1"
var number2 = "num2"
var answer = "ans";

var getInputs = function (id) {
    return parseInt(document.getElementById(id).value);
}

var showOutput = function (outputValue, answerAsArg) {
    document.getElementById("ans").value = outputValue;
}

var calculate = function (sum, num1, num2) {
    if (sum == 'add')
        return num1 + num2;
    else if (sum == 'sub')
        return num1 - num2;
    else if (sum == 'mul')
        return num1 * num2;
    else if (sum == 'div')
        return num1 / num2;
}

var operation = function (sum) {
    x = getInputs(number1);
    y = getInputs(number2);
    output = calculate(sum, x, y);
    showOutput(output);
    console.log(x + " " + sum + " " + y + " = " + output)
    console.log(this)
}