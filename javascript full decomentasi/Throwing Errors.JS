// implementasi try-catch pada kasus yang lebih umum. 

const json = '{ "name": "Yoda", "age": 20 }';
 
try {
  const user = JSON.parse(json);
 
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}