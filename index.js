//ctrl + k + u => Uncomment lines
//Switch Statement :

var area="circle";
var PI=3.14, l = 10, b = 5, r = 3;

switch(area)
{
    case 'circle' : console.log("Area of circle is : "+ PI*r**2);
                    break;

    case 'triangle' : console.log("Area of triangle is : "+ (l*b)/2);
                    break;

    case 'rectangle' : console.log("Area of rectangle is : " + (l*b));
                    break;

    default: console.log("Enter Correct shape name ");
                    break;
}

//Functions :
//DRY => 
//block of a code, performs a specific task

var a=10,b=20;
var total = a + b;
//console.log("The sum is : "+total);

//Function Definition
function sum()
{
    var a=10,b=20;
    var total = a + b;
    console.log("The sum is : "+total);
}
//Calling a function
//sum();

//Parameters & Arguments :
//Parameters : Names listed in the function definition (placeholder)
function sum1(a,b)
{
    var total = a + b;
    console.log("The sum is : "+total);
}
//Arguments : Actual values passed to function
//sum1(50,60);

//Function expression :
//Creating a function and storing it into a variable
function sum2(a,b)
{
    return total = a + b;
}

var abc = sum2(50,60);
var xyz = sum2(100,50)

// console.log("The sum is : " + abc);
// console.log("The sum is : " + xyz);

//Anonymous Function
var funExpression = function (a,b)
{
    return total = a + b;
}
console.log(funExpression(40,40));

