let num = 3
if (num % 3 == 0 && num % 5 == 0){
    console.log ("fizz buzz")
}
else if (num % 5 == 0){
    console.log ("buzz")
}
else if(num % 3 == 0){
    console.log ("fizz")
}
else if (num % 3 != 0 && num % 5 != 0){
    console.log ("num")
}