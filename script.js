// a. let obj1 = { name:"Person 1", age:5 };
// b. let obj2 = { age:5, name:"Person 1" };

let obj1 = { name:"Person 1", age:5 };
let obj2 = { age:5, name:"Person 1" };

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

if (str1 === str2) {
    console.log("Objects are equal");
} 
else {
    console.log("Objects are not equal");
}