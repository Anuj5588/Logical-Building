const num1 = Number(prompt("Enter the number"))
const num2 = Number(prompt("Enter the number"))

// let factor=[];

// for (i=1; i<=num; i++){

//     if(num%i === 0){
// factor.push(i)
//     }

// }
// console.log(factor.join(","))

// 2. **Print All Multiples of a Number up to N**

//    * **Input:** `Number = 4, Limit = 30`
//    * **Output:** `[4, 8, 12, 16, 20, 24, 28]`



// let multiple=[];
// const limit = 30;
// for (i=1; i<=limit; i++){
// let temp= num*i
// multiple.push(temp)
//     }
// console.log(multiple.join(","))

// 3. **Find the HCF (Highest Common Factor) or GCD of Two Numbers**

//    * **Input:** `12, 18`
//    * **Output:** `HCF = 6`

let a= num1;
let b = num2
while(b!==0){
    let temp = b;
    b = a%b
    a = temp
}

console.log(a)