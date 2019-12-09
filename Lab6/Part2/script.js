var num1;
var num2;
var oper;
var ans;

oper = prompt("Specify an operation. Type +, -, / or *");
num1 = prompt("Enter the first number");
num2 = prompt("Enter the second number");

if (oper == "+") {
    ans = Number(num1) + Number(num2);
} 
else if (oper == "/") {
    ans = Number(num1) / Number(num2);
} 
else if (oper == "*") {
    ans = Number(num1) * Number(num2);
} 
else if (oper == "-") {
    ans = Number(num1) - Number(num2);
} 
else if (oper = !null) {
    ans = "Error: Incorrect Operator"
} 
else if (num1 = !null) {
    ans = "Error: Incorrect First Number"
} 
else if (num2 = !null) {
    ans = "Error: Incorrect Second Number"
}
document.write("The result of the operation is" + " " + ans);