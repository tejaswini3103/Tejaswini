//Loops
//sum of numbers from 1 to 100(for)
function sumofnumbers() {
    let s= 0;
    for (let i = 1; i <= 100; i++) {
        s=s+i;
    }
    console.log("Sum of numbers from 1 to 100:", s);
}

// Factorial(while)
function factorial(number) {
    let f= 1;
    let i = 1;
    while (i <= number) {
        f=f*i;
        i++;
    }
    console.log("Factorial of ",number,"is : ", f);
}
//Functions
// Fibonacci
function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

// counting vowels
function countVowels(str) {
    let c = 0;
    let vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            c++;
        }
    }
    console.log("Number of vowels in ",str,": ", c);
}

// A function to call all functions 
function main() {
    console.log("------------------------");
    sumofnumbers();
    console.log("------------------------");
    let number = 5;
    factorial(number);
    console.log("------------------------");
    let n = 5; 
    fibonacci(n);
    console.log("------------------------");
    let str = "hello world"; 
    countVowels(str);
    console.log("------------------------");
}
main();
// let r=0;
// r=4;
// console.log(r);