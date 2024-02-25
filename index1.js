/*const asgardianBrothers1 = [
    {
      firstName: "OS",
      familyName: "Basha"
    },
    {
      firstName: "Nodzawy",
      familyName: "Nawy"
    }
  ]

const asgardianBrothers = [
    {
      firstName: "Thor",
      familyName: "Odinsson"
    },
    {
      firstName: "Loki",
      familyName: "Laufeysson-Odinsson"
    }
  ]
  const phrase = "I like this brown drink very much, bring me another!"

function introWithContext(line){
    console.log("This is the value of the keyword: " , this);
    return `${this.firstName} ${this.familyName} says: ${line}`
  }
  
  console.log (introWithContext.call(asgardianBrothers1[1], phrase));*/
  //=> Thor Odinsson says: I like this brown drink very much, bring me another!

  /*const person ={
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person1 ={
    firstName:"John",
    lastName:"Doe"
}

const person2 ={
    firstName:"Mary",
    lastName:"Doe"
}

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));






const obj = {name: "John"};

let greeting = function(a,b){
    return `${a} ${this.name}. ${b}`;
};
console.log(greeting.call(obj, "Hello", "How are you?"));

let greeting1 = function(a,b){
    return `${a} ${this.name}. ${b}`;
};
console.log(greeting1.apply(obj, ["Hello", "How are you?"]));

let greeting2 = function(a,b){
    return `${a} ${this.name}. ${b}`;
};
let bound = greeting.bind(obj);
console.log(bound("Hello", "How are you?"));*/

const book = {
    title: "HTIPNMF",
    author: "AC"
}
function info(a){
    return `${this.title} ${a} ${this.author}`;
}

function info(a){
    return `${this.title} ${a} ${this.author}`;
}
console.log(info.apply(book, ["was writtin by"] ));

