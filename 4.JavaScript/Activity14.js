let numbers = [];
let count = 1;

function fizzBuzz()
{
    if(count%3==0&&count%5==0)
    {
        numbers.push("fizzbuzz");
    }
    else if(count%5==0)
    {
        numbers.push("buzz");
    }
    else if(count%3==0)
    {
        numbers.push("fizz");
    }
    else
    {
        numbers.push(count);
    }
    count++;

    console.log(numbers);
}
