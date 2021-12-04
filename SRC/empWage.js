// UC 10 - Objects
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

function getWorkingHours(empCheck) 
{
    switch (empCheck) 
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs)
{
    return empHrs * WAGE_PER_HOUR;
}

let empCheck;
let empHrs;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();

while (totalWorkingDays <= NUM_OF_WORKING_DAYS && totalEmpHrs <= MAX_HRS_IN_MONTH)
{
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalWorkingDays++;
    totalEmpHrs += empHrs;
    if(totalWorkingDays <= NUM_OF_WORKING_DAYS && totalEmpHrs <= MAX_HRS_IN_MONTH)
    {
        empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return '\nDay-' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                       ' And Wage Earned = ' + this.dailyWage
            },
        });
    }
}
totalWorkingDays-=1;
totalEmpHrs -= empHrs;
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days: "+totalWorkingDays+" Total Hours: "+totalEmpHrs+" Emp Wage: " + empWage);

// UC 10 - Objects OUTPUT
console.log("UC 10 - Showing Daily Hours Worked and Wage Earned: " +empDailyHrsAndWageArr);