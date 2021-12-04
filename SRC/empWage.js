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
console.log("\nUC 10 - Showing Daily Hours Worked and Wage Earned: " +empDailyHrsAndWageArr);

// UC 11A to 11D - Using Object Functions along with Arrow Functions
let totalWages = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHours = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("\nUC 11A - Total Hours: "+totalHours+" Total Wages: "+totalWages);

process.stdout.write("\nUC 11B - Logging Full WOrk Days")
let fullWorkingDayStrArr = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                        .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

process.stdout.write("\n\nUC 11C - Logging Full WOrk Days")                        
let partWorkingDayStrArr = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                        .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let nonWorkingDayNums = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("\n\nUC 11D - NonWorkingDayNums: "+nonWorkingDayNums);

