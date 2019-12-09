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
    if (sum == 'lar')
        //return Math.max(num1, num2);
        if (num1 > num2)
            return num1;
        else if (num2 > num1)
            return num2;
}

var operation = function (sum) {
    x = getInputs(number1);
    y = getInputs(number2);
    output = calculate(sum, x, y);
    showOutput(output);
    console.log(x + " " + sum + " " + y + " = " + output)
    console.log(this)
}