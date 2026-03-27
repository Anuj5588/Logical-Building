let num = Number(prompt("Enter the number"));

// 12. **Reverse a Number**
// let rev = 0;
// while (num > 0) {
//   let digit = num % 10;
//   rev = rev * 10 + digit;
//   num = (num-digit)/10
// }

// console.log(rev)


//2.**Check if a Number is a Palindrome**

// let rev = 0;
// let origNumber = num
// while (num > 0) {
//   let digit = num % 10;
//   rev = rev * 10 + digit;
//   num = (num-digit)/10
// }
// if(rev==origNumber){
//     console.log("palindrome number")
// }else{
//     console.log("not a palindrome")
// }

//**Check if a Number is an Armstrong Number (also called a Narcissistic Number)**
let rev = 0;
let temp = num
let count =0

while (temp > 0) {

 temp = (temp-(temp%10))/10
  count++
}
temp = num
console.log(temp)
while (temp > 0) {
  let digit = temp % 10;

 
  rev = rev * 1 + Math.pow(digit,count);

  temp = (temp-digit)/10
}

if(rev==num){
console.log("Armstrong Number")
}