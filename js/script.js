


let x = 10;
x **= 5;
document.getElementById('demo').innerHTML= "Value of x is: " + x;


let m = 10;
m /= 5;
document.getElementById('demo2').innerHTML= "Value of x is: " + m;
let l = 10;
l += 5;
document.getElementById('demo3').innerHTML= "Value of x is: " + l;

let t = 10;
t -= 5;
document.getElementById('demo4').innerHTML= "Value of x is: " + t;
let i = 10;
i *= 5;
document.getElementById('demo5').innerHTML= "Value of x is: " + i;
let j = 10;
j %= 5;
document.getElementById('demo6').innerHTML= "Value of x is: " + j;
let p = 16 + " volvo";
document.getElementById('demo7').innerHTML= p;
let o = " volvo" + 17;
document.getElementById('demo8').innerHTML= o;

let x1 = BigInt("123456789012345678901234567890");
document.getElementById("demo9").innerHTML = x1; 

const cars = ["saab", "volvo", "bmw"];
document.getElementById("demo10").innerHTML = cars[1]; 

const person = {
	firstName : "jone",
	lastName : "Doe",
	age : "50",
	eyecolor : "Blue"
};
document.getElementById("demo11").innerHTML = person.firstName + " is " + person.age + " years old"; 

function myFunction(p1, p2){
	return p1 * p2;
}
let result = myFunction(4, 3);
document.getElementById('demo12').innerHTML= result;

function toCelcius(f){
	return (5/9) * (f-32);
}
let Value = toCelcius(77);
document.getElementById('demo13').innerHTML = Value;

let car = "bmw";
document.getElementById('demo14').innerHTML = "car " + car;

const gari = {
	type: "Fiat",
	model: "500",
	number: "231",
	color: "white" 

};
document.getElementById('demo15').innerHTML = "The car type is " + gari.type; 
const person1 = {};

person1.firstName = "Jone ";
person1.lastName = " Doe";
person1.age = "50";
person1.eyeColor = "white";
document.getElementById('demo16').innerHTML = "The name is " + person1.firstName + person1.lastName; 

const person2 = {
	firstName2: "Jone ",
	lastName2: " Doe ",
	age2: "50",

};
document.getElementById('demo17').innerHTML = "His name is " + person2.firstName2 + "" + person2.lastName2; 


const person3 = {
	firstName3: "Jone ",
	lastName3: " Doe ",
	age3: "50",
	fullName3: function(){
		return this.firstName3 + "" + this.lastName3;
	}

};
document.getElementById('demo18').innerHTML = person3.fullName3(); 


const person4 = {
	firstName4: "Jone ",
	lastName4: " Doe ",
	age4: "50"
};

const x3 = person4;

x3.age = 10;
document.getElementById('demo19').innerHTML = person4.firstName4 + person4.lastName4; 

const person5 = {
	firstName5: "Jone ",
	lastName5: " Doe ",
	age5: "50"
};
document.getElementById('demo20').innerHTML = person5.firstName5 + " is " + person5.age5 + " Years old "; 
const person6 = {
	firstName6: "Jone ",
	lastName6: " Doe ",
	age6: "50"
};
document.getElementById('demo21').innerHTML = person6["firstName6"] + " is " + person6["age6"] + " Years old "; 
const person7 = {
	firstName7: "Jone ",
	lastName7: " Doe ",
	age7: "50"
};
delete person7.age7;
document.getElementById('demo22').innerHTML = person7["firstName7"] + " is " + person7["age7"] + " Years old "; 
const myObj = {
	name8: "john",
	age8: 10,
	myCars: {
		car1: "Volvo",
		car2: "bmw",
		car3: "Ferari"

	} 
}
document.getElementById('demo23').innerHTML = myObj.myCars.car1 + " And " + myObj.myCars.car3  + " My choose"; 
const myObj1 = {
	name9: "john",
	age9: 10,
	myCars1: {
		car4: "Volvo",
		car5: "bmw",
		car6: "Ferari"

	} 
}
document.getElementById('demo24').innerHTML = myObj1.myCars1["car4"]; 
const myObj2 = {
	name10: "john",
	age10: 10,
	myCars2: {
		car7: "Volvo",
		car8: "bmw",
		car9: "Ferari"

	} 
}
let p1 = "myCars2";
let p2 = "car9";

document.getElementById('demo25').innerHTML =  myObj2['myCars2']["car9"]; 

const person8 = {
	firstName8: "Jone ",
	lastName8: " Doe ",
	age8: "50",
	fullName8: function(){
		return this.firstName8 + "" + this.lastName8;

	}
};
document.getElementById('demo26').innerHTML = person8.fullName8;

const person9 = {
	firstName9: "Jone ",
	lastName9: " Doe ",
	id: "123456",
};
person9.name = function(){
	return (this.firstName9 + "" + this.lastName9).toUpperCase();
};
document.getElementById('demo27').innerHTML = "Name is" + person9.name();
const person10 = {
  name10: "John",
  age10: 30,
  city10: "New York"
};
document.getElementById('demo28').innerHTML = person;
const person11 = {
  name11: "John",
  age11: 30,
  city11: "New York"
};
document.getElementById('demo29').innerHTML = person11.name11 + " is " + person11.age11 + " Years old";

const person12 = {
  name12: "John",
  age12: 30,
  city12: "New York"
};
let text = "";
for (let x5 in person12){
	text += person12[x5] + "";
}
document.getElementById('demo30').innerHTML = text;

const fruits = {apple: 300, komla: 200, anggur: 250};
let text2 = "";

for ( let[fruit, amount] of Object.entries(fruits)) { 
	text2 += fruit + ": " + amount + "<br>";

}
document.getElementById('demo31').innerHTML = text2;


function Person13(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create two Person objects
const myFather = new Person13("John", "Doe", 50, "blue");
const myMother = new Person13("Sally", "Rally", 48, "green");
document.getElementById("demo32").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + "."; 

function displayDate() {
  document.getElementById("demo35").innerHTML = Date();

  let text9 = "John Doe"; 
document.getElementById("demo36").innerHTML = text;
}
let carName11 = "Volvo XC60"; // Double quotes
let carName22 = 'Volvo XC60'; // Single quotes

document.getElementById("demo37").innerHTML =
carName11 + " " + carName22; 