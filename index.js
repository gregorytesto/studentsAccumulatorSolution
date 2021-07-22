const studentsArr = [
  {
    name: "Leanne Graham",
    GPA: 3.7,
    role: "Student",
  },
  {
    name: "Ervin Howell",
    GPA: 2.9,
    role: "Hall Monitor",
  },
  {
    name: "Clementine Bauch",
    GPA: 3.4,
    role: "Teacher's Assistant",
  },
  {
    name: "Patricia Lebsack",
    GPA: 4.0,
    role: "Student",
  },
  {
    name: "John Dietrich",
    GPA: 3.7,
    role: "Hall Monitor",
  },
  {
    name: "Dennis Schulist",
    GPA: 3.0,
    role: "Teacher's Assistant",
  },
];

/**
 * Returns the names of each student in the class.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {String} A string containing the names of all the students from the `students` array.
 */
function stringNames(students) {
  let string = "";
  for(let i=0;i<students.length;i++){
    string+=students[i].name;
    if(i < students.length-1){
      string+=", ";
    }
  }
  return string;
}

// console.log(stringNames(studentsArr));
//> "Leanne Graham, Ervin Howell, Clementine Bauch, Patricia Lebsack, John Dietrich, Dennis Schulist"

/**
 * Returns the names of each student in the class in an array.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {String[]} An array of the names of all the students from the `students` array.
 */
function arrayNames(students) {
  let studentStrArr = [];
  for(let i=0;i<students.length;i++){
    studentStrArr.push(students[i].name);
  }
  return studentStrArr;
}

// console.log(arrayNames(studentsArr));
//> ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack', 'John Dietrich', 'Dennis Schulist']

/**
 * Searches for a student by name.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @param {String} name - The name of the student to find.
 * @returns {Object} The student in the class whose name matches.
 */
function findByName(students, name) {
  let student = {};
  for(let i=0;i<students.length;i++){
    if(students[i].name === name){
      student = students[i];
    }
  }
  return student;
}

// console.log(findByName(studentsArr, "Clementine Bauch"));
//> { "name": "Clementine Bauch", "GPA": 3.4, "role": "Teacher's Assistant" }

// console.log(findByName(studentsArr, "John Dietrich"));
// //> { "name": "John Dietrich", "GPA": 3.7, "role": "Hall Monitor" }

/**
 * Returns the average (also known as the mean average) GPA for the class.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {Number} The average GPA for the class.
 */
function findAverageGPA(students) {
  let total = students[0].GPA;
  for(let i=1;i<students.length;i++){
    total += students[i].GPA;
  }
  return (total/students.length).toFixed(2);
}

// console.log(findAverageGPA(studentsArr));
//> 3.45

/**
 * Returns the highest GPA for the class.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {Number} The highest GPA for the class.
 */
function findHighestGPA(students) {
  let highestGPA = students[0].GPA;
  for(let i=0;i<students.length;i++){
    if(students[i].GPA > highestGPA){
      highestGPA = students[i].GPA.toFixed(1);
    }
  }
  return highestGPA;
}

// console.log(findHighestGPA(studentsArr));
//> 4.0

/**
 * Returns the lowest GPA for the class.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {Number} The lowest GPA for the class.
 */
function findLowestGPA(students) {
  let lowestGPA = students[0].GPA;
  for(let i=1;i<students.length;i++){
    if(students[i].GPA < lowestGPA){
      lowestGPA = students[i].GPA.toFixed(1);
    }
  }
  return lowestGPA;
}

// console.log(findLowestGPA(studentsArr));
//> 2.9

/**
 * Returns only the students who have a specific role.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @param {String} role - The role of the desired students.
 * @returns {Object[]} The students who have the role.
 */
function filterByRole(students, role) {
  let studentsWithSpecificRole = [];
  for(let i=0;i<students.length;i++){
    if(students[i].role === role){
      studentsWithSpecificRole.push(students[i]);
    }
  }
  return studentsWithSpecificRole;
}

// console.log(filterByRole(studentsArr, "Hall Monitor"));
// //> [
// //     {
// //         "name": "Ervin Howell",
// //         "GPA": 2.9,
// //         "role": "Hall Monitor"
// //     },
// //     {
// //         "name": "John Dietrich",
// //         "GPA": 3.7,
// //         "role": "Hall Monitor"
// //     }
// // ]

// console.log(filterByRole(studentsArr, "Teacher's Assistant"));
// //> [
// //     {
// //         "name": "Clementine Bauch",
// //         "GPA": 3.4,
// //         "role": "Teacher's Assistant",
// //     },
// //     {
// //         "name": "Dennis Schulist",
// //         "GPA": 3.0,
// //         "role": "Teacher's Assistant",
// //     }
// // ]
