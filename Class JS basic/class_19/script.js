//objects
const personal = {
  name: "vitor",
  lastName: "Mateus",
  age: 23,

  introduce() {
    console.log(
      ` Hi I´m ${this.name} ${this.lastName} and I am ${this.age} Years old`
    );
  },
};

/*function createPerson(name, lastname, age) {
  return {
    name,
    lastname,
    age,
  };
}
const vitor = createPerson("Vitor", "Mateus", 23);*/
personal.introduce();
