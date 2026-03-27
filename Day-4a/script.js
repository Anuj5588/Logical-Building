let num = prompt("Enter the number",Number())
//1. **Split Number into Digits**

// function reverse(num){
//  let rev = 0;
//     while(num>0){
   
//     let digits = []

//     let digit = num%10
//     rev = rev*10+digit
//     num = (num-digit)/10
//     }

//     return rev

// }

// let digits = [];
//  digits.push(reverse(rev))
//  console.log(digits)

//2. **Remove the Decimal Point Mathematically**
// let removeDecimal
// let findIndex = num.toString()
// let position= findIndex.indexOf(".")
// let i =1;
// while(i<= position){
//     num = num*10
//      removeDecimal = num;
//     i++
// }

// console.log(removeDecimal)

//3. **Separate Whole and Fractional Parts of a Number**

function seprateNum(num){
    let whole =0;
    while(num>=1){
        num = num-1;
        whole++
    }

    let fractional = num
    return{whole, fractional}
}
let count =0;
let fCount =0;
let wholeCount= seprateNum(num).whole
let fractional= seprateNum(num).fractional
while(wholeCount>0){
 let lastDigit = wholeCount % 10;
    wholeCount = (wholeCount - lastDigit) / 10;
    count = count +1

}


while(!Number.isInteger(fractional) && fCount < 10){
    fractional = fractional * 10;
    fCount++;
}

console.log(count)
console.log(fCount)