console.log('Hello, Krishna!');

a = 10
var a = 10
// let a = 10

let b = 20
b= 100
b = "Hello"

// var b = 

//Object Literal
var student = {
    100: 'Hundreds',
    "student Id": 1,
    studentName: "John",
    studentAge: 20,
    city: "New York"
}
console.log(student)
console.log(student.studentName)
console.log(student[100])
console.log(student["student Id"])
console.log(typeof student)

for(let key in student){
    console.log(`${key} -> ${student[key]}`)
}


var emp = {
    empId: 1,
    empName: "Krishna",
    empAge: 20,
    empCity: "New York"
}
 var {empId,empName,empAge,empCity} = emp
 var result = "Pass"
 console.log(empId)

 var newemp ={
    empId,
    empName,
    empAge,
    empCity,
    result
}
console.log(newemp)

var emp1 ={
    ...emp,
    result
}