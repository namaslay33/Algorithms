/* Challenge: First Reverse

Description: have the function FirstReverse(str) take the str parameter being passed 
and return the string in reversed order*/

var string = "Hello World";

var FirstReverse = (str) => {

    var str = str.split("");
    var str = str.reverse("");
    var str = str.join("");

    console.log("Built in Functions: " + str)
}

FirstReverse(string);

/* If you are allowed to use built in functions, the problem is simple:
Split method: converts a string to an array
Reverse method: reverses the order of an array
Join method: converts array into a string
*/

// - - - - - - - - - - - - - - - - -  //

var string1 = "codebytes";

function FirstReverse1(str) {

    console.log("W/o built in functions: " + str)
}

FirstReverse1();