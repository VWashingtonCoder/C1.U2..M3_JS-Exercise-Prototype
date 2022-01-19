/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

//MVP_Complete: Tests 9/22 Passed
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = []; 
}

Person.prototype.eat = function(edible){
  if (this.stomach.length < 10){
    this.stomach.push(edible)
  }
}

Person.prototype.poop = function (){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}

//create new Person
// const andre = new Person('Andre', 31);
// const mark = new Person('Mark', 24);
// const angel = new Person('Angel', 41);

//Checks Person.toString function
// console.log(andre.toString());
// console.log(mark.toString());
// console.log(angel.toString());

//Tests Person.eat function
// mark.eat('Pizza');
// mark.eat('Mozarella sticks');
// mark.eat('sandwich');
// mark.eat('french fries');
// mark.eat('sushi');
// mark.eat('Burger');
// mark.eat('Pasta');
// console.log(mark.stomach); //Checks food in Mark's stomach currently

// mark.poop(); // Empties Mark's stomach

// console.log(mark.stomach); //Output_[]:empty array

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

//MVP_Complete: Tests 15/22 Passed
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){ 
  return this.tank =  this.tank + gallons;
}

// //Stretch functions_Need help returning strings
// Car.prototype.drive = function(distance){
//   let odometerRaise = this.odometer + distance;
//   let tankUsed = this.tank - (distance/this.milesPerGallon);
//   if (odometerRaise > 0){
//     if(tankUsed < this.tank){
//       if (this.tank = 0){
//         return `I ran out of fuel at ${odometerRaise} miles!`
//       }else if(this.tank > 0){
//         return `I've still got ${tankUsed} gallons left. Let's drive`
//       }
//       return this.tank = tankUsed
//     }
//     return this.odometer = odometerRaise;
//   }
// }

// //Car object/instance
// const car1 = new Car('Pontiac Sunfire', 20);

// //function calls
// car1.fill(15);

// console.log(car1.drive(200));
// //console test
// console.log(car1);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

//MVP_Complete: Tests 22/22 Passed
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
}

// // create new Baby
// const debbie = new Baby('Debbie', 3, 'triceracorn');

// //console.log Test
// console.log(debbie)

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  
  1. Window/Global Binding
    - When 'this' is in the global scope, it will reference the window/console object. 
  2. Implicit Binding
    - Whenever 'this' comes before a dot that calls a function, the value of 'this' is the object before the dot.
  3. New Binding
    - When we use constructor functions, 'this' has the value of the object instance created. I believe techinically it applies to the class of the 
    object as well but we haven't really covered that fully just yet.
  4. Explicit Binding
    - 'this' is explicitly implied when we use the Javascript methods .call() & .apply(). It doesn't need to be added to the code specifically 
    unlike in the other principles.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}