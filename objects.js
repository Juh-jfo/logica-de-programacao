const person = {
  name: "Juliana",
  age: 30,
  student: true,
sayHello: function() {
  console.log (`Oi, o meu nome é ${this.name} e eu tenho ${this.age} anos`)
}
}

Object.keys(person).map(key => console.log(`${key}: ${person[key]}`));