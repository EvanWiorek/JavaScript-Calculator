var displayDiv = document.querySelector("#display");
var num1 = "";
var num2 = "";

function press(num) {
    var numString = num1.toString()
    if (numString.length < 9) {
        num1 += num;
        var numString = Array.from(String(num1));
        if (numString.includes(".")) {
            display.innerHTML = num1;
        }
        else display.innerHTML = num1 + ".";
    }
}

function operatorSelect(key) {
    operatorKey = key;
    num2 = num1;
    num1 = "";
}

function clr() {
    num1 = "";
    num2 = "";
    operatorKey = "";
    display.innerHTML = "0.";
}

function calculate() {
    var a = parseFloat(num2);
    var b = parseFloat(num1);
    var res = 0;
    if (operatorKey == "+") {
        res = a + b;
    }
    else if (operatorKey == "-") {
        res = a - b;
    }
    else if (operatorKey == "*") {
        res = a * b;
    }
    else if (operatorKey == "/") {
        res = a / b;
    }
    num1 = res;
    operatorKey = "";
    var resString = Array.from(String(res));
    var numLeftDecimal = Math.trunc(res);
    var spaceLeft = Array.from(String(numLeftDecimal)).length;
    if (resString.includes(".") == false) {
        if (spaceLeft > 9) {
            display.innerHTML = "Too long!"
        }
        else display.innerHTML = res + ".";
    }
    var truncNum = Number(res.toFixed((9 - spaceLeft)));
    console.log(resString);
    console.log(spaceLeft);
    if (resString.includes(".")) {
        if (resString.length > 9) {
            display.innerHTML = truncNum;
        }
        else if (resString.length > 9 && spaceLeft > 9) {
            display.innerHTML = "Too long!"
        }
        else display.innerHTML = res;
    }
}


//The coding below provided by: https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement(document.getElementById("myCalculator"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "main")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "main").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//using switch
// function calculate() {
//     var a = num2;
//     var b = num1;
//     var res = 0;
//     switch (op) {
//         case "+":
//             res = a + b;
//             break;
//         case "-":
//             res = a - b;
//             break;
//         case "*":
//             res = a * b;
//             break;
//         case "/":
//             res = a / b;
//             break;
//     }
//     num1 = res;
//     op = "";
//     display.innerHTML = res + ".";
// }