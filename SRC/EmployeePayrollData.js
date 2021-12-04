class EmployeePayrollData
{
    // Property
    id;
    salary;

    // Constructor
    constructor(id, name, salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // getter and setter method
    get name() {return this._name;}
    set name(name) {this._name = name;}

    // method
    toString()
    {
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 0;
employeePayrollData.name = "Jeff";
console.log(employeePayrollData.toString());