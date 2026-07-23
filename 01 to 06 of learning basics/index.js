//Variables//
const name = "mahdi";
let age = 20;
const city = "NYC";
let height = 188;

age = 21;
height = 190;

console.log(name, age, city);
console.log(age + 1);
console.log(height - 2)


//DataTypes//
const me = 'Me';
const weight = 80;
const isadmin = true;
const x =  null; // we use this intentionally like we want this to be 0 value //
const y = undefined; // we use this when we don't have any value for the moment and we're going to add velue later
let z; // defined value //



// Strings and they way it works //
       // Template string or Syntax //
       console.log(`Hi my name is ${name} and Im ${age} years old`);

// String methods //
const s = 'Hello Jack';
const ARs = 'Jack Martineli Martinez Becham Kaka';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.startsWith('Hello'));
console.log(s.endsWith('Hello'));
console.log(ARs.trim().toUpperCase());
console.log(ARs.includes('Jack')) // IMPORTANT //
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(ARs.split( ));



//Arrays//
const fruits = ['Banana', 'Orange', 'Apple'];
console.log(fruits);
console.log(fruits[1]);


fruits.push('Mango');
console.log(fruits);


fruits.unshift('Jovana');
console.log(fruits);


fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));



//objects//
const phone = {
       Brand : 'Iphone',
       Model : '2006',
       Owner : 'APPcompany'
}
console.log(phone.Brand);



//Object to Array//
const family = [
       {
              ID : 1, Fname : 'jack'
       },
       {
              ID : 2, Fname : 'Hamilton'
       },
       {
              ID : 3, Fname : 'Sebas'
       }
];

console.log(family[0].ID);
console.log(family[1].Fname);
