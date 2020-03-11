console.log('hello');
//alert('yooo');

//var age = prompt('how old are you');

//document.getElementById('some').innerHTML=age;


//NUMBERS
var num = 10;
// addition, subtraction

var num1 = num +1;
var num2 = num -2;
console.log(num, num1, num2);

//increment, decrement
var num3 = num++;
console.log(num3,num4);
var num4 = num--;


//increment, decrement by any number
var num5 = num += 20;
var num6 = num -=5;
console.log(num6);

//modulo
var num7 = num %4;
console.log(num7);

/*FUNCTIONS
1. create a fxn
2. call a fxn (invoking, )
*/

function dog(){
    console.log('bark, bark')
}
dog();

//# 2 how to write clean code
function hello(thatName){
    var result = ('Hello' + ' ' + thatName);//string concatenation
    console.log(result);
}
// var name = prompt('What is your name?');
// hello(name);
//how do arguments work?

function sum(numOne, numTwo){
    var result = numOne + numTwo;
    console.log(result);
}
sum(20,30);

//WHILE LOOPS,,,easy peasy
// var number = 0;

//  while(number < 20){
//     number +=1;
//      console.log(number);
//  }


 //FOR LOOP
 //var forNum = 0;

 for(let i=0; i<=20; i++){
    console.log(i);
 }


 //DATATYPES
 let herAge = 23; //number
 let herName = 'Tracy'; //string
 let name = {
     first: 'Tracy',
     last: 'Chapman'
 }//object
 let truth = false; //boolean
 let snakes= ['cobra', 'python','mamba']; //array
 let random; //undefined
 let nada = null; //value null

 //string methods
 let dogs = 'chihuahua';
 let anotherDog = 'shepherd/npuppy'; //next line backward slash and n
 console.log(anotherDog);
 console.log(dogs.length);           //length of the string
 console.log(dogs.indexOf('a'))      //
 console.log(dogs.slice(2,4));       //including and then upto
 console.log(dogs.replace('chi', 'dog'));
 console.log(dogs.toUpperCase());
 console.log(dogs.toLowerCase());
 console.log(dogs.charAt(5)); //also same as
 console.log(dogs[5]);
 console.log(dogs.split('')); //splits characters of a word into an array. 
 console.log(dogs.split(',')) //split splits them into single items. splits by a comma



 //ARRAYS IN JS

let names = ['Florence', 'Margaret', 'Lucinda', 'Penelope'];              //
let otherNames = new Array('Florence', 'Margaret', 'Lucinda', 'Penelope');//declaration using the Array Keyword
 console.log(names[2]);
 //changing the value
 names[1] = 'Elizabeth';
 console.log(names);
 //looping through arrays
 for(i=0;i<names.length;i++){
     console.log(names[i]);
 }
//ARRAY METHODS
console.log('to string', names.toString());
console.log(names.join('*'));
console.log(names, names.pop(), names); //pop removes last item from the array/list
console.log(names.push('AnnaBelle'), names); //appends something adds to the end of the array
console.log(names[4]);
names[4] = 'MaryAnne';
console.log(names);
console.log(names.shift()); //removes first element fro the array
console.log(names);
names.unshift('AnnaLiese'); //adds first element to an array
console.log(names);

let cities = ['Bangkok', 'Berlin', 'Wuhan'];

//combine two arrays
let whatever = names.concat(cities);
console.log(whatever);
console.log(whatever.slice(1,4));
console.log(whatever.reverse());
console.log(whatever.sort());

let randomNumbers = [23,5,68,10,85,21,77,1,5,4,63];
console.log(randomNumbers.sort(function(a,b){
    return b-a;//sorts in descending order
}));
//aadding items to an array
let emptyArray = new Array();
for (let num = 0; num <10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

//OBJECTS IN JAVASCRIPT called dictionaries in python
let color = {
    name: 'red',
    code: 5888
}

let person = {
    name: 'Vanessa',
    city: 'Frankfurt',
    age:25,
    height: 148,
    personInfo: function(){
        return this.name + this.city;
    }
};
//changing value
// person.name = 'Atem';
// console.log(person.name);
// console.log(person.personInfo);


//conditionals, control flows(if else)
//&& AND
//|| OR

let age = 68;
if ((age>= 18) && (age<=35)){
    status = 'drunks';
    console.log(status)
} else{
    status = 'go home'
    console.log(status)
}

//switch statements
//diff btn weekday vs weekend
switch (6){
    case 0:
        text= 'weekend';
        case 5:
            text: 'weekend';
            case 6:
                text:'weekend';
                default:
                    text = 'weekday';
}