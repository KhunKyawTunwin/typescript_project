"use strict";
const student = {
    name: "MrKhun",
    GPA: 3.5,
    classes: [200, 100],
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Studens ${key} : ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 200,
    sidehustle: 100,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
