const row = Number(prompt("Enter the  number of rows"))

// 1. **Print Right-Angled Star Triangle**

// var i;
// var j;

// for(i=1; i<=row; i++){
//     let line = ""

//     for(j=1; j<=i; j++){
       
//         line = line + "*"

//      
//     }
  // console.log(line)
// }


//1. **Print Right-Angled Star Triangle**
// for(i=1; i<=row; i++){
//     let line = ""

//     for(j=i; j<=row; j++){
       
//         line = line + "*"

      
//     }
//       console.log(line)
// }



//3. **Print Pyramid Pattern**

// for (let i = 1; i<=row; i++) {
//     let line = "";

//     for(k=1; k<=row-i; k++){
//       line = line +"."

//     }

//     for (let j=1; j<=(2*i)-1; j++) {
//     line = line + "*"

//     }
//     console.log(line);
// }


 //**Print Hollow Square Pattern**

// for (let i = 1; i <= row; i++) {
//     let line = "";5

//     for (let j = 1; j <= row; j++) {

//         if (i == 1 || i == row || j == 1 || j == row) {
        
//             line += "*";
//         } else {
//             line += " ";
//         }

//     }

//     console.log(line);
// }


  

//6. **Print Hollow Pyramid Pattern**

// for (let i = row; i>=1; i--) {
//     let line = "";

//     for(k=1; k<=row-i; k++){
//       line = line +" "
//     }

//     for (let j=(2*i)-1; j>=1; j--) {
//       if(j==1 || j==(2*i-1) || i==row ){        
//     line = line + "*"
//       }else{
//         line = line + " "
//       }



//     }
//     console.log(line);
// }


//2. **Print Butterfly Pattern**

//upper

// for (let i =1; i<=row; i++) {
//     let line = "";
//     for (let j=1;  j<=i; j++) {
//     line = line + "*"

//     }

//     for(let j=1; j<=2*(row-i); j++){
//       line = line + " "
//     }
//      for (let j=1;  j<=i; j++) {
//     line = line + "*"

//     }

//     console.log(line)
  
//     }

    
// //bottom

//   for (let i =row-1; i>=1; i--) {
//     let line = "";
//     for (let j=1;  j<=i; j++) {
//     line = line + "*"

//     }

//        for (let j=1;  j<=2*(row-i); j++) {
//     line = line + " "

//     }

//       for (let j=1;  j<=i; j++) {
//     line = line + "*"

//     }

    
//     console.log(line);
//     }

// //3. **Print Diamond Pattern**
// for (let i =1; i<=row; i++) {
//     let line = "";

//         for (let j=1;  j<=row-i+1; j++) {
//     line = line + " "

//     }

//     for (let j=1;  j<=(2*i)-1; j++) {
//     line = line + "*"
    
//     }
//     console.log(line)
//   }

//   for (let i=row-1; i>=1; i--) {
//     let line = "";
    
//         for (let j=1;  j<=row-i+1; j++) {
//          line = line + " "

//     }
//     for (let j=1;  j<=(2*i)-1; j++) {
//     line = line + "*"
    
//     }
//     console.log(line)
//   }


// 4. **Print Hourglass Pattern**



// for(let i=1; i<=row; i++){
//   let line = ""

//   for(let k=1; k<=i-1; k++)
// {
//   line = line + " "
// }
//   for(let j=1; j<=2*(row-i)+1; j++){
//     line = line + "*"
//   }
//   console.log(line)
// }

// for(let i=2; i<=row; i++){
//   let line = ""

//   for(let k=1; k<=row-i; k++)
// {
//   line = line + " "
// }
//   for(let j=1; j<=2*i-1; j++){
//     line = line + "*"
//   }
//   console.log(line)
// }


// 5. **Print Hollow Diamond Pattern**

// for (let i = 1; i <= row; i++) {
//     let line = "";

//     // spaces
//     for (let s = 1; s <= row - i; s++) {
//         line += " ";
//     }

//     // stars
//     for (let j = 1; j <= (2 * i - 1); j++) {
//         if (j == 1 || j == (2 * i - 1)) {
//             line += "*";
//         } else {
//             line += " ";
//         }

      
//     }

//       console.log(line)
//   }

//     for (let i = row-1; i>=1; i--) {
//     let line = "";

//     // spaces
//     for (let s = 1; s <=row-i ; s++) {
//         line += " ";
//     }

//     // stars
//     for (let j = 1; j <= (2 * i - 1); j++) {
//         if (j == 1 || j == (2 * i - 1)) {
//             line += "*";
//         } else {
//             line += " ";
//         }
//     }

//     console.log(line)

//   }


// 6. **Print Rhombus Pattern**


// for(let i = 1; i<=row; i++){
//   let line = ""
   
//   for(let s=1; s<=row-i; s++){
//     line = line + " "
//   }

//   for(let j=1; j<=row; j++){
//     line = line + "*"
//   }
//   console.log(line)
// }


//7.**Print Multiplication Table (Single and Upto N)**



