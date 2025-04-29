let n= 6;
console.log("guess the no. between 1 to 10");
let num=Math.floor(Math.random()*10);
if(n>num)
{
    console.log("number is greater");    
}
else if(n<num)
{
    console.log("number is smaller");   
}
else if(n>10)
{
    console.log("please enter the number between 1 to 10");   
}
else{
    console.log("you won");
    console.log("number is",num);   
}