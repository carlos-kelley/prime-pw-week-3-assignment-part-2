console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {  
  console.log(i);
}
//Needed to change the amount of times to iterate the loop by looping as long as i<6.

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++) {  
  console.log(i);
}
//Needed to change the amount of times to iterate the loop by looping as long as i<6 AND set i to 3 initial so it starts at 3.

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=2; i<11; i++){
  if (i % 2 === 0){
    console.log(i);
    }
  }
  //Had to add a loop to check if x had a remainder if divided by two. If it doesn't, it must be even. 

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (i = 5; i >=0; i--){
  console.log(i);
}


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (star of stars){
  console.log(star);
}


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let starsIndex = 0;
while (starsIndex < stars.length){
  console.log(stars[starsIndex]);
  starsIndex++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let numbersIndex = 0;
let numbersMax = 5;
while (numbersIndex <= numbersMax){
  console.log(numbersIndex);
  numbersIndex++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let countdownIndex = 10;
let countdownMin = 4;
while (countdownIndex > countdownMin){
  console.log(countdownIndex);
  countdownIndex--;
}