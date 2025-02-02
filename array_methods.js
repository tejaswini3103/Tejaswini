//LENGTH
const a_1=["a","b","c","d","e","f"];
let a_1_size=a_1.length;
console.log(a_1_size);
//TOSTRING
let str=a_1.toString();
console.log(str);
console.log(a_1);//Normal array printing
//AT()
console.log(a_1.at(2));
console.log(a_1[2]);//Index
console.log(a_1.join("+"));//like tostring()
console.log(a_1.join());//default
//pop()
console.log(a_1.pop());
console.log(a_1);
//push
console.log(a_1.push());
console.log(a_1);
console.log(a_1.push("f"));
console.log(a_1);