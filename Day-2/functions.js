// Function in JavaScript
// If the return statement is not specified in the functon then by default the function returned the undefined value type.
// *
// **
// ***
// ****
// *****

console.log("Pattern printing");

function printPattern(rows)
{
    for(let i=1; i<=rows; i++)
    {
        for(j=1; j<=i; j++)
        {
            process.stdout.write("*");
        }
        console.log("");
    }
}

// function that returned the undefined
function printMyName()
{
    console.log("Hey! This is Jatin Munjal");
}

function calcGCD(x, y)
{
    var hcf = 1;
    for(let i=2; i<=(x<y?x:y); i++)
    {
        if(x%i === 0 && y%i === 0)
            hcf = i;
    }
    return hcf;
}

let num1 = 35;
let num2 = 42;

let answer = calcGCD(num1, num2);
console.log(answer);

var catchMyName = printMyName();
console.log(catchMyName);
printPattern(5);

console.log(typeof(typeof(calcGCD(num1, num2))));