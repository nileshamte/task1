var Person = function(name, age){
    this.name=name;
    this.age=age;
    this.describe = function(){
        return this.name + ", " + this.age + " years old";
    }
}
var nilesh = new Person("nilesh", 25);
var john = new Person("john", 24);
document.write(nilesh.describe());
document.write("<br>");
document.write(john.describe());