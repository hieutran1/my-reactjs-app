import { observable, autorun, action } from "mobx";

var person = observable({
  // observable properties
  name: "John",
  age: 21,
  showAge: false,

  // computed property
  get labelText() {
    return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
  },

  // action:
  setAge: action(function(age){
    this.age = age;
  })
});

// object properties don't expose an 'observe' method,
// but don't worry, 'mobx.autorun' is even more powerful
autorun(() => console.log(person.labelText))

person.name = "Dave";
// prints: 'Dave'

person.setAge(54);
