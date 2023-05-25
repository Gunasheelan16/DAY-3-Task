// 1.To Compare Two JSON have the same property without order

// let obj1 = {"name":"person1","age":5};
// let obj2 = {"age":5,"name":"person1"};

// var Json=true;
// if(Object.keys(obj1).length==Object.keys(obj2).length){
//     for(key in obj1) { 
//         if(obj1[key] == obj2[key]) {
//             continue;
//         }
//         else {
//             Json=false;
//             break;
//         }
//     }
// }
// else {
//     obje=false;
// }
// console.log("is object equal"+Json);



// let request = new XMLHttpRequest();
// request.addEventListener('load',printData);
// request.open("GET", "https://restcountries.com/v3.1/all");
// request.send();
// console.log(request);

// 1.Print flag
// function printData() {
//   const countries = JSON.parse(this.responseText);
//   countries.forEach((coun) => console.log(coun.flags.png) );
// }

// 2. To Print official name

// function printData() {
//   const countries = JSON.parse(this.responseText);
//   countries.forEach((coun) => console.log(coun.name.official) );
// }

// 3.To Print Region

// function printData() {
//     const countries = JSON.parse(this.responseText);
//     countries.forEach((coun) => console.log(coun.region) );
//   }

//4.To Print Subregion

// function printData() {
//     const countries = JSON.parse(this.responseText);
//     countries.forEach((coun) => console.log(coun.subregion) );
//   }

//5.To print all population 
 
// function printData() {
//     const countries = JSON.parse(this.responseText);
//     countries.forEach((coun) => console.log(coun.population) );
//   }
