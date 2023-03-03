//GCD => Greatest Common divisor

let a = 35;
let b = 28;

function gcd(x,y)
{
    for(let i=1; i<(x<y?x:y); i++)
    {
        if(x%i===0 && y%i===0)
        {
            var pAnswer = i;
            if(i > pAnswer)
                pAnswer = i;
        }
    }
    return pAnswer
}

let hcf = gcd(a,b);
console.log(hcf);