/* Multiples of 3 and 5 

Description: If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/ 

/*Purpose of For Loops: iterate over an object or array

for loop has 3 conditions: 
    1. Initialization: where you start
    2. Condition: as long as the condition is met, the loop continues
    3. Increment/Decrement: increases or decreases the iterator (or i variable in line 16)
*/


 var pe1 = () => {
    var num = []; // empty array; needs to be outside for loop or it will only hold 1 number

    for (var i = 1; i < 1000; i++){
        if (i % 3 == 0) {
            num.push(i);
        }
        else if (i % 5 == 0) {
            num.push(i);
        }
    }
    console.log(num);
 }

 pe1();

 /*
 1. Created an empty array to house the #s. 
 2. Then used a for loop
 3. Used an if-else statement
    Second block only exectuers if the first one doesn't. 
    If I had use two if statements a value might print twice in my array. 
    Example: 15 it's a multiple of both 3 and 5.
 4. Used the modulos to make sure numbers were multiples of 3 and 5
 5. Used the push method: adds new items to the end of an array, and returns the new length
 */