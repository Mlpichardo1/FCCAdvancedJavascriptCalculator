  var showInput = document.getElementById("textbox");
var isClear = false;
var tempStr = "";
var clacType = "";
var isContinue = true;

function display(clickValue) {
	switch (clickValue) {
		case "=":
			if (tempStr != "" && clacType != "") {
				showInput.value = clac(tempStr, showInput.value, clacType);
				isContinue = false;
				clacType = "";
			}
			break;
		case "+": // plus symbol
		case "-": // minus symbol 
		case "*": // times symbol
		case "/": // divide symbol
			// If the stored operator is not empty   Represents continuous operation 
			if (clacType != "" && !isContinue) { // Perform calculations first 
				tempStr = clac(tempStr, showInput.value, clacType);
				isClear = true;
				clacType = clickValue;
			} else {
				tempStr = showInput.value; // After clicking the operator   Pre stored character 
				isClear = true; // Represents the click operator 
				clacType = clickValue; // Stored operator 
			}
			isContinue = true;
			break;
		case "CE":
			showInput.value = "0";
			isClear = false;
			tempStr = "";
			clacType = "";
			break;
		default: // The regular numeric button hits 
			showInput.value = showInput.value == "0" ? "" : showInput.value;
			isContinue = false;
			if (isClear) {
				showInput.value = "";
				showInput.value += clickValue;
				isClear = false;
			} else {
				showInput.value += clickValue;
			}
			break;
	}
}

function clac(num1, num2, type) {
	switch (type) {
		case "+":
			return Number(num1) + Number(num2);
		case "-":
			return Number(num1) - Number(num2);
		case "*":
			return Number(num1) * Number(num2);
		case "/":
			return Number(num1) / Number(num2);
		default:
			break;
	}
}
var box = document.getElementById('textbox');

function backSpace() {
	var number = box.value;
	var len = number.length - 1;
	var newNumber = number.substring(0, len);
	box.value = newNumber;
}