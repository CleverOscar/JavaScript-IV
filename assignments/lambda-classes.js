// CODE here for your Lambda Classes

//  === Person CONSTRUCTOR ===
class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
  }
  //  === Methods ===
  speak(){
    return `Hello my name is ${this.name}, and I am from ${this.location}`
  }
}

//  === Instructor CONSTRUCTOR ===
class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  // Methods
  demo(subject){
    return `Today we are going to learn about ${subject}`
  };
  grade(student,subject){
    return `${student} receives a perfect score on ${subject}`
  };
}

//  === Student CONSTRUCTOR ===
class Student extends Instructor {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }
  // Methods
  listsSubjects(){
    return this.favSubjects;
  };
  PRAssignment(subject){
    return `${this.name} has submittd a PR for ${subject}`
  };
  sprintChallenge(subject){
    return `${this.name} has begun sprint sprint chellenge on ${subject}`
  };
}

//  === Project Manager CONSTRUCTOR ===
class Projectm extends Student {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  // Methods
  standUp(name, channel){
    return `${name} announces to ${channel}, @channel standy times! `
  };
  debugCode(name, subject){
    return `${name} debugs ${this.name}'s code on ${subject}'`
  }

}



// New objects created
const fred = new Person({
  name: 'Fred',
  location: 'Bedrock',
  gender: 'Male',
  age: 30
})

const liz_B = new Projectm({
  name: "Lizzy B",
  age: 27,
  gender: "Female",
  location: "Portland, OR",
  previousBackground: "Biology/Health Science grad",
  className: "WEB12",
  favSubjects: ["CSS","React","Ternaries","SQL","Node"],
})


// checking objects, remove commets to check code
// console.log(fred.speak());
console.log(liz_B.debugCode('Oscar','Python'));






//
