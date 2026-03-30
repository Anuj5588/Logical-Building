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
// let rev = 0;
// let temp = num
// let count =0

// while (temp > 0) {

//  temp = (temp-(temp%10))/10
//   count++
// }
// temp = num
// console.log(temp)
// while (temp > 0) {
//   let digit = temp % 10;

 
//   rev = rev * 1 + Math.pow(digit,count);

//   temp = (temp-digit)/10
// }

// if(rev==num){
// console.log("Armstrong Number")
// }

// **Find the Sum of Digits**

// let sum =0

// while(num>0){
//   let temp = num%10
//   sum = sum + temp
//   num= (num-temp)/10

// }

// console.log(sum)

//  **Find the Average of Digits**

//  let avg = 0.0
//   let sum=0.0
//  while(num>0){
 
//   let temp = num%10
//   sum = sum + temp
//   num = (num-temp)/10
//    avg++


//  }

//  avg = sum/avg
// console.log(avg)

 //**Find the Largest and Smallest Digit in a Number**
//  let greatenum=0
//  let lownum=9;
//  while(num>0){
//     let temp = num%10
//     if(temp>greatenum){
//      greatenum = temp

//     }
    
//     if(temp<lownum){
//         lownum =temp
//     }
//     num = (num-temp)/10;
// }

 
// console.log(greatenum, "is greatest")
// console.log(lownum, "is smallest")

while(num>0){
  
     temp = 5
     while(temp>0){
     let fact = 1
     fact = fact*temp
     temp = temp-1
     let fact1 = fact
     console.log(fact1)
     num = num-1
     }


}

