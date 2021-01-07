var person = {
    firstName : "Nilesh",
    lastName : "Amte",
    age : 23
};

function printFullName()
{
    document.write(this.firstName + " " + this.lastName);
    document.write("<br>");
}

function printDetails()
{
    document.write(this.firstName + " is " + this.age + " years old");
}

var boundPrintFullName = printFullName.bind(person);
var boundPrintDetails = printDetails.bind(person);

boundPrintFullName();
boundPrintDetails();