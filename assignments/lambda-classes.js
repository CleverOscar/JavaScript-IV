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
  graded(student,grade){

    if (grade >= 70) {
      return `Congrats ${student} you graduated!`
    } else {
        return `Sorry you have to retake this course.`
    }
  }
}

//  === Student CONSTRUCTOR ===
class Student extends Instructor {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
    this.grade = obj.grade;
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

const liz_B = new Projectm({
  name: "Lizzy B",
  age: 27,
  gender: "Female",
  location: "Portland, OR",
  previousBackground: "Biology/Health Science grad",
  className: "WEB12",
  favSubjects: ["CSS","React","Ternaries","SQL","Node"],
})

const christian_ipanaque = new Student({
  name: "Christian Ipanaque",
  age: 32,
  gender: "Male",
  location: "Seattle, WA",
  previousBackground: "Server Hardware Technician",
  className: "WEB18",
  favSubjects: ["Computer Science","Redux","Algorithms","Data Structures","Computer Architecture"],
})

const leslie_t = new Student({
  name: "Leslie Thompson",
  age: 31,
  location: "San Francisco, CA",
  gender: "F",
  previousBackground: "Retail Management",
  className: "Web18",
  favSubjects: ["CSS", "JavaScript", "Cooking", "Biology"]
});

const scubaSteve = new Projectm({
  name: "Steve Lanier",
  age: 29,
  gender: "Male",
  location: "Portland, OR",
  previousBackground: "Jack of all trades",
  className: "WEB18",
  favSubjects: ["The ladies",,"Barbershop Quartets","Sleeping","Weekend parties","Weekday parties","Saving the world before bedtime"],
  catchPhrase: "PC load-letter? The f*** does that mean?"
})


// checking objects, remove commets to check code
console.log(liz_B.graded('Oscar',80));
console.log(scubaSteve.PRAssignment('Javascript'))






//
