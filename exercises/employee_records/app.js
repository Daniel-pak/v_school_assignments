var employees = [];

function Employee (name, job_title, salary, status) { 
    this.name = name; 
    this.job_title = job_title; 
    this.salary = salary; 
    this.status = status || "Full Time",
    this.printEmployeeForm = function() {
        console.log("Name: " + this.name + " " +  " Job Title: " +  this.job_title + "Salary: " + this.salary + " Status: " + this.status);
    }
}

var gabe = new Employee("Gabe", "Computer Tech", "1000/min");
gabe.status = "Part Time"; 

gabe.printEmployeeForm(); 
employees.push(gabe);

var daniel = new Employee("Daniel", "Software Head Engineer", "40000000/min");
daniel.status = "contract";
daniel.printEmployeeForm();
employees.push(daniel);

var morgan = new Employee("Morgan", "IT Management", "200/hr"); 
morgan.status = "Part time";
morgan.printEmployeeForm();
employees.push(morgan);

console.log(employees);