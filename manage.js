class Salaries{
    constructor(name,employeeType,target,actualAmountSold){
        this.name = name;
        this.employeeType = employeeType;
        this.target = target;
        this.actualAmountSold = actualAmountSold;
    }
}
class salariedEmployees extends Salaries{
    constructor(name,employeeType,salary,target,actualAmountSold){
        //salaried employees have an additional salary in the constructor
        super(name,employeeType,target,actualAmountSold); 
        this.salary = salary;
    }
    // method statement to get different salaries. used if statements so that if they have gone above target it will increase by 10%
    setSalary(){
        if(Number(this.actualAmountSold) > Number(this.target)){
            // use Number in if statement and formula so that it would work with numbers instead of strings
            console.log(`${this.name}, as a ${this.employeeType} your salary is £${this.salary}.
As you have exceeded your target for this month, your salary has been increased 10%. Using the formula £${this.salary} x 1.10 means you will recieve £${Number(this.salary) * 1.10} this month`)
        }
        else{
            console.log(`${this.name}, as a ${this.employeeType} your salary for this month is £${this.salary}`)
        }
    }
    }
    
class hourlyEmployees extends Salaries{
    // constructor has hours worked and hourly rate for this employee
    constructor(name,employeeType,target,actualAmountSold,hoursWorked,hourlyRate){
        super(name,employeeType,target,actualAmountSold); 
        this.hoursWorked = hoursWorked
        this.hourlyRate = hourlyRate
    }
    // method statement to get different salaries. used if statements so that if they have gone above target it will increase by 50%
    setSalary(){
        // use Number in if statement and formula so that it would work with numbers instead of strings
        if(Number(this.actualAmountSold) > Number(this.target)){
            console.log(`${this.name}, as a ${this.employeeType} your salary is £${this.hourlyRate} per hour.
You have worked ${this.hoursWorked} hours this month, but as you have exceeded your target for this month, your hourly rate has been increased by 50% which means your salary is now £${Number(this.hoursWorked) * (Number(this.hourlyRate) * 1.5)}, using the formula ${this.hoursWorked} hours x (£${this.hourlyRate} x 1.5).`)
        }
        // formula multiplies hours worked with hourly rate
        else{
            console.log(`${this.name}, as a ${this.employeeType} your salary is £${this.hourlyRate} per hour.
You have worked ${this.hoursWorked} hours this month, so your salary for this month will be ${this.hoursWorked} x £${this.hourlyRate} meaning you will take home £${Number(this.hoursWorked) * Number(this.hourlyRate)}`)
        }
    }

}
class hybridEmployees extends Salaries{
    //constructor includes additional hours worked
    constructor(name,employeeType,salary,target,actualAmountSold,additionalHours,hourlyRate){
        super(name,employeeType,salary,target,actualAmountSold);
        this.salary = salary
        this.additionalHours = additionalHours
        this.hourlyRate = hourlyRate
    }
    setSalary(){
        // use Number in if statement and formula so that it would work with numbers instead of strings - also checking if any additional hours to add to payout
        if(Number(this.actualAmountSold) > Number(this.target)&& ((Number(this.additionalHours) > 0))){
            console.log(`${this.name}, as a ${this.employeeType} your salary is £${this.salary}. Your pay for any additional hours worked is £${this.hourlyRate}.
As you have exceeded your target for this month, your salary for any additional hours will increase by 20%. 
You have worked ${this.additionalHours} additional hours this month, so using the formula £${this.salary} + (the hourly rate of £${this.hourlyRate} x 1.20) means you will recieve £${Number(this.salary) + (Number(this.hourlyRate) * 1.20)} this month`)
        }
        // extra if statement for those that haven't reached target so will not increase rate of hourly pay
        else if(Number(this.actualAmountSold) <= Number(this.target) && ((Number(this.additionalHours) > 0))){
            console.log(`${this.name}, as a ${this.employeeType} your salary is £${this.salary}. Your pay for any additional hours worked is £${this.hourlyRate}.
You have worked ${this.additionalHours} additional hours this month, so using the formula £${this.salary} + the hourly rate of £${this.hourlyRate} means you will recieve £${Number(this.salary) + (Number(this.hourlyRate))} this month`)
        }
        else{
            console.log(`${this.name}, as a ${this.employeeType} your salary for this month is £${this.salary}`)
        }
    }
}

//instances of differend classes
let employee1 = new salariedEmployees("Emily","Salaried Employee","500","300","600")
let employee2 = new salariedEmployees("Steve","Salaried Employee","500","300","200")
let employee3 = new hourlyEmployees("Bob","Hourly Employee","100","300","20","30")
let employee4 = new hourlyEmployees("Jenny","Hourly Employee","100","80","20","30")
let employee5 = new hybridEmployees("Elaine","Hybrid Employee","500","900","300","15","10")
let employee6 = new hybridEmployees("Robin","Hybrid Employee","500","500","100","5","10")
let employee7 = new hybridEmployees("Bill","Hybrid Employee","500","100","80","0","10")

/*calling the methods for the class to show payout. I also included console.table so it is easy to see exactly how they have performed in relation 
to their targets*/
console.table(employee1)
employee1.setSalary()

console.table(employee2)
employee2.setSalary()

console.table(employee3)
employee3.setSalary()

console.table(employee4)
employee4.setSalary()

console.table(employee5)
employee5.setSalary()

console.table(employee6)
employee6.setSalary()

console.table(employee7)
employee7.setSalary()

// mentor session helped me use Numbers if if statements