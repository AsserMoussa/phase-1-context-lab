function createEmployeeRecord([fN, faN, ti, pay]){
    const emp = {
        firstName: fN,
        familyName: faN,
        title: ti,
        payPerHour: pay,
        timeInEvents: [],
        timeOutEvents: []
      };
      
      return emp;
}

function createEmployeeRecords(emps){
    let newArr = [];
    emps.forEach(element => {
        newArr.push(createEmployeeRecord(element))  
});
return newArr;
}

function createTimeInEvent(stamp){
let splitStamp = stamp.split(" ");
    let timeInObj = {
    type: "TimeIn",
    hour: parseInt(splitStamp[1]),
    date: splitStamp[0]
}
this.timeInEvents.push(timeInObj);
return this;
}

function createTimeOutEvent(stamp){

let splitStamp = stamp.split(" ");
    let timeOutObj = {
    type: "TimeOut",
    hour: parseInt(splitStamp[1]),
    date: splitStamp[0]
}
this.timeOutEvents.push(timeOutObj);
return this;

}

function hoursWorkedOnDate(stamp){
    let timeInEvent = this.timeInEvents.find(function(element){
        return element.date== stamp;
    
    })
    let timeOutEvent = this.timeOutEvents.find(function(element){
        return element.date== stamp;
    })
    return (timeOutEvent.hour - timeInEvent.hour)/100;
    }

function wagesEarnedOnDate(stamp){
        return this.payPerHour*(hoursWorkedOnDate.call(this, stamp));
        }

        const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)
    return payable;
}

function findEmployeeByFirstName(arrEmp, fName){
for(let i = 0; i<arrEmp.length; i++){
    if(fName==arrEmp[i].firstName){
        return arrEmp[i];
    }
}
}
function calculatePayroll(empRec){
let payable = 0;
    for (let i=0;i<empRec.length;i++){
payable= payable + allWagesFor.call(empRec[i]); 
    }
    return payable;
}







































/*function createEmployeeRecord([fN, faN, ti, pay]){
    const emp = {
        firstName: fN,
        familyName: faN,
        title: ti,
        payPerHour: pay,
        timeInEvents: [],
        timeOutEvents: []
      };
      
      return emp;
}

function createEmployeeRecords(emps){
    let newArr = [];
    emps.forEach(element => {
        newArr.push(createEmployeeRecord(element))  
});
return newArr;
}

function createTimeInEvent(stamp){
let splitStamp = stamp.split(" ");
    let timeInObj = {
    type: "TimeIn",
    hour: parseInt(splitStamp[1]),
    date: splitStamp[0]
}
emp.timeInEvents.push(timeInObj);
return emp;
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}*/