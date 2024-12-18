// var students = [
//     {name: 'Bob', grade: 85},
//     {name: 'Ali', grade: 80},
//     {name: 'Jaxon', grade: 78},
//     {name: 'Guli', grade: 85},
//     {name: 'Vali', grade: 87},
//     {name: 'Aziz', grade: 90},
//     {name: 'Bobur', grade: 88}
// ];

// function add(name, grade){
//     students.push({name, grade});
//     console.log(students);
// }
// add("Ali", 90)

// function averageGrade(){
//     let count = 0;
//     let sum = 0;
//    for(const student of students){
//     sum += student.grade;
//     count++;
//    }
//    return Math.round(sum / count);
// }
// console.log(averageGrade());

// function studentGrade(name){
//     const nameLower = name.toLowerCase();
//      let student =  students.find(student =>student.name.toLowerCase() === nameLower);
//      return student ? student.grade : null;
// }
// console.log(studentGrade('Aziz'));

// function displayStudents(){
//     let studentsHighGrades = students.filter(student => student.grade > 80);
//     return studentsHighGrades;
// }
// console.log(displayStudents());

const app = Vue.createApp({
    data(){
        return {
            students: [
                {name: 'Bob', grade: 85},
                {name: 'Ali', grade: 80},
                {name: 'Jaxon', grade: 78},
                {name: 'Guli', grade: 85},
                {name: 'Vali', grade: 87},
                {name: 'Aziz', grade: 90},
                {name: 'Bobur', grade: 88}
            ], 
            studentName: '', 
            studentGrade: 0,
            average: 0,
            AmountOfStudents: 0, 

        }
    },
    methods: {
        addStudent() {
            if (this.studentName && this.studentGrade) {
              this.students.push({
                name: this.studentName,
                grade: this.studentGrade
              });
              // Reset input fields after adding student
              this.studentName = '';
              this.studentGrade = '';
            } else {
              alert('Please provide both name and grade!');
            }
          }, 

        averageGrade(){
            let count = 0;
            let sum = 0;
           for(const student of this.students){
            sum += student.grade;
            count++;
           }
           this.average = Math.floor(sum / count);
           this.AmountOfStudents = count;
        }
    }
});
app.mount("#students")