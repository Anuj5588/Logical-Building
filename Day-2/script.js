//Solution-1


//Find the Maximum of Three Numbers

// const num1 = Number(prompt("Enter the first number"))
// const num2 = Number(prompt("Enter the first number"))
// const num3 = Number(prompt("Enter the first number"))

// if(num1==num2 && num2==num3){

//     console.log("All are equal")
// }

// else if(num1>num2 && num1>num3){
//     console.log(`${num1} is greater`)
// }

// else if(num1>num2 && num1>num3){
//     console.log(`${num2} is greater`)
// }



// else {
// console.log(`${num3} is greater`)
// }

//solution-2

//Check if a Number is Positive, Negative, or Zero
// const num = Number(prompt("Enter the  number"))

// if(num>0){
//     console.log("Postive")
// }

// else if(num<0){
//     console.log("Negative")
// }

// else{
//     console.log("Zero")
// }


//Calculate Electricity Bill
// const ch =(prompt("Plz Enter"))

// if(num >= 0 && num<=100 ){
//     console.log("Bill for rs 5 per unit:" + 5*num)
// }
// else if(num >= 101 && num<=200 ){
//     console.log("Bill for rs 7 per unit:" + 7*num)
// }
// else if(num >= 201 && num<=300 ){
//     console.log("Bill for rs 10 per unit:" + 10*num)
// }

// else{
//     console.log("Bill for rs 10 per unit:" + num*12)
// }


// if(num%400 == 0 &&(num%4 == 0 || num%100 !== 0)){
//     console.log("it is  a leap year")
// }
// else{
//     console.log("Not a Leap Year")
// }

//**Check if a Character is a Vowel or Consonant**

//solution-3
// if (
//     ch === "A" || ch === "a" ||
//     ch === "E" || ch === "e" ||
//     ch === "I" || ch === "i" ||
//     ch === "O" || ch === "o" ||
//     ch === "U" || ch === "u"
// ) {
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }

// if("AIEOUaieou".includes(ch)){
//     console.log("Vowel")
// }else {
//     console.log("Consonant");
// }

// HomeWork

//1.Check if a Character is Uppercase, Lowercase, Digit, or Special Character

// if(ch>='a' && ch<='z'){

//     console.log("It is  a lowercase character",   ch)

// }

// else if(ch>='A' && ch<='Z'){
//     console.log("It is  uppercase character",  ch)
    
// }

// else if(ch<= '0' && ch<= '9'){

//     console.log("It is  number",  ch)
    
// }else{
//     console.log("It is special character" ,  ch)
// }

//Check Triangle Type Using Sides and Angles

const a = Number(prompt("Enter the first number"))
const b = Number(prompt("Enter the first number"))
const c = Number(prompt("Enter the first number"))


console.log(a,b,c)
console.log(c*c , a*a ,b*b)
if(a==b && b==c){
    console.log("Equlateral Triangle")
}
else if(a==b || b==c || c==a){
    console.log("Isosseles Triangle")
}

else if(c*c == a*a + b*b ||  b*b == a*a + c*c ||  a*a == b*b + c*c ){
    

    console.log("Right Angle Triange")
}else{
    console.log("Scalen triangle")
}





