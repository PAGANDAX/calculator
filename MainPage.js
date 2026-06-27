// for simple / complex calculators

//constants / vars

const display = document.getElementById("display");
let isBracketOpen = true;



//display values

function whatWillDisplay(input){
    display.value += input;
}

//clear

function ClearDisplay(){
    display.value = ``;
    isBracketOpen = true; 
}

//brackets

function toggleBracket(){
    if (isBracketOpen) {
        display.value += "(";
        isBracketOpen = false;  
    } 

    else if (!isBracketOpen) {
        display.value += ")";
        isBracketOpen = true;
    }
}

//delete

function deleteLastDigit() {
    display.value = display.value.slice(0, -1);
}

// factorial logic
function factorial(n) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) 
    return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

// sqrt func
function SquareRoot(number) {
    return Math.sqrt(number);
}


// cubrt func
function CubicRoot(number) {
    return Math.cbrt(number);
}


// var root functions
function cstmROOT(number, root, power) {
    return number ** (power / root);
}



//main calulation

function calculate(){
    try{
        let expr = display.value;

        // 1. Custom root:

        expr = expr.replace(/(\d+(\.\d+)?)ʸ√x(\d+(\.\d+)?)/g, (_, root, _2, num) => {
            return `cstmROOT(${num}, ${root}, 1)`;
        });
        expr = expr.replace(/(\d+(\.\d+)?)ʸ√x\(([^)]+)\)/g, (_, root, _2, inner) => {
            return `cstmROOT(${inner}, ${root}, 1)`;
        });

        // 2. Square root & Cubic root
        expr = expr.replace(/²√(\d+(\.\d+)?)/g, "SquareRoot($1)");
        expr = expr.replace(/²√\(([^)]+)\)/g, "SquareRoot($1)");
        expr = expr.replace(/³√(\d+(\.\d+)?)/g, "CubicRoot($1)");
        expr = expr.replace(/³√\(([^)]+)\)/g, "CubicRoot($1)");
        expr = expr.replace(/√(\d+(\.\d+)?)/g, "SquareRoot($1)");
        expr = expr.replace(/√\(([^)]+)\)/g, "SquareRoot($1)");

        // 3. Powers
        expr = expr.replaceAll("²", "**2");
        expr = expr.replaceAll("³", "**3");
        expr = expr.replaceAll("^", "**");

        // 4. Basic operators
        expr = expr.replaceAll("X", "*");
        expr = expr.replaceAll("÷", "/");
        expr = expr.replaceAll("%", "/100");
        

        // 5. Constants (e before e^ to avoid double-replace)
        expr = expr.replaceAll("e^", "Math.E**");
        expr = expr.replaceAll("π", "Math.PI");
        expr = expr.replace(/(?<![a-zA-Z])e(?!\^)/g, "Math.E"); 
        // 6. Factorial
        expr = expr.replace(/(\d+)!/g, "factorial($1)");
        expr = expr.replace(/\(([^)]+)\)!/g, "factorial($1)");

// 7. Trig & log (Order matters again: hyperbolic MUST come first)
expr = expr.replaceAll("sinh", "Math.sinh((Math.PI/180)*");
expr = expr.replaceAll("cosh", "Math.cosh((Math.PI/180)*");   
expr = expr.replaceAll("tanh", "Math.tanh((Math.PI/180)*");

// Only replace if NOT preceded by "Math."
expr = expr.replaceAll(/(?<!Math\.)sin/g, "Math.sin((Math.PI/180)*");
expr = expr.replaceAll(/(?<!Math\.)cos/g, "Math.cos((Math.PI/180)*");
expr = expr.replaceAll(/(?<!Math\.)tan/g, "Math.tan((Math.PI/180)*");

expr = expr.replaceAll("log₁₀", "Math.log10(");
expr = expr.replaceAll("ln", "Math.log(");

// 8. Auto-close brackets
let open  = (expr.match(/\(/g) || []).length;
let close = (expr.match(/\)/g) || []).length;
if (open > close) expr += ")".repeat(open - close);

        // 9. Evaluate
        display.value = eval(expr);
        isBracketOpen = true;

    } catch(error){
        display.value = "error";
    }
}