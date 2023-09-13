//Paradigra OOP mengandung dua hal yaitu atribut/properti dan method.

const car = {
  // properties
  brand: 'Ford',
  color: 'red',
  maxSpeed: 200,
  chassisNumber: 'f-1',
  // methods
  drive: () => {
    console.log('driving');
  },
  reverse: () => {
    console.log('reversing');
  },
  turn: () => {
    console.log('turning');
  }
}
 
console.log(car.brand); // Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn(); // turning


//contoh membuat object blueprint dari sebuah mobil
//kita  bisa membuat objek mobil--yang merupakan instance dari Car--dengan memanfaatkan constructor function Car.

function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}
 
Car.prototype.drive = function() {
  console.log(`${this.brand} ${this.color} is driving`);
}
 
Car.prototype.reverse = function() {
  console.log(`${this.brand} ${this.color} is reversing`);
}
 
Car.prototype.turn = function() {
  console.log(`${this.brand} ${this.color} is turning`);
}

function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}
 
Car.prototype.drive = function() {
  console.log(`${this.brand} ${this.color} is driving`);
}
 
Car.prototype.reverse = function() {
  console.log(`${this.brand} ${this.color} is reversing`);
}
 
Car.prototype.turn = function() {
  console.log(`${this.brand} ${this.color} is turning`);
}
 
// Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
 
console.log(car1);
console.log(car2);
console.log(car3);
 
car1.drive();
car2.drive();
car3.drive();
 
/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Su
zuki Red is driving
*/