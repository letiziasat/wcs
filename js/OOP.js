class Person {
  
    constructor(age, name){
      this.age = age;
      this.name = name;
    }
    
    tellMyAge(){
      return this.age;
    }
    tellMyname(){
  return this.name;
  }
  }
  
  
  console.log(new Person(40, 'john').tellMyAge());
  console.log(new Person(35, 'Mary').tellMyAge());
  console.log(new Person(40, 'john').tellMyname());
  console.log(new Person(35, 'Mary').tellMyname());