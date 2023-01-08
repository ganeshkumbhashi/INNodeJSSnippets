//(function (exports,require,module,__filename,__dirname) {

// })

console.log(__dirname,__filename);


class Employee{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greeting(){
        console.log(`My name is ${this.name} and Iam ${this.age}`)
    }
}

module.exports = Employee;