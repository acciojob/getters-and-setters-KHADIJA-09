//complete this code
class Person {
	constructor(name,age)
	{
		this._name = name
		this._age = age
	}
	get  fname()
	{
		console.log(this.name)
	}
	set  fage(age)
	{
		
	if (value < 0) {
      throw new Error("Age cannot be negative.");
    }
    this._age = value;
  }
	}
}

class Student extends Person {
	study()
	{
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
  teach()
	{
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
