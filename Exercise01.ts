//Rectangle Area//
let _length : number = 5;
let _width : number = 3;
const _area = _length * _width
console.log(_area);

//Perimeter of Rectangle//
const _perimeter = (_length + _width)*2;
console.log(_perimeter);

//Diameter of Circle//
let _radius: number = 5;

const _diameter = 2 * _radius;
console.log(_diameter);

//Circumference of Circle //
const _phi = 3.1415926535897

const _circumference = 2 * _phi * _radius;
console.log(_circumference);
console.log(_circumference.toFixed(4));

const _circlearea = _phi * _radius * _radius;
console.log(_circlearea);
console.log(_circlearea.toPrecision(5));


//Angle of Triangle//
let a : number = 80;
let b : number = 65;

const _triangle = (180-a-b);
console.log(_triangle);


//Days Conversion//

let _Day1 : number = 400;
let _Day2 : number = 366;

let _Oneyear : number = 365;
let _OneMonth : number = 30; 


const _year1 : number = Math.floor(_Day1/_Oneyear);
console.log(_year1);


const _month1: number = Math.floor(_Day1%_Oneyear)/30;
console.log(_month1);


const _remainingday1: number = Math.floor(_Day1%_Oneyear%_OneMonth);
console.log(_remainingday1);


const _year2 : number = Math.floor(_Day2/_Oneyear);
console.log(_year2);


const _month2 : number = Math.floor(_Day2%365)/30;
console.log(_month2);

const _remainingday2 : number = Math.floor(_Day2%_Oneyear%_OneMonth);
console.log(_remainingday2);


console.log(`${_year1}` "Year" , `${_month1.toFixed()}` "Month" , `${_remainingday1}` "Days";

console.log(`${_year2}` "Year" , `${_month2.toFixed(0)}` "Month" , `${_remainingday2}` "Day");













































