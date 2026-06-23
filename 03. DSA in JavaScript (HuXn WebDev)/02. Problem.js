// Problem : Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents & studentName) iterate over all students and find that specific user "studentName".

const StudentDatabase = ['Raj', 'Ram', 'Gwen', 'Rom', 'Vin']; // This is Data Structure

// Algorithm to solve this problem
const findStudent = (allStudents, StudentName) => {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents [i] == StudentName) {
            console.log (`Found ${StudentName}`);
        }
    }
};
findStudent(StudentDatabase, 'Ram');


// Create an array called StudentDatabase that stores 5 student names.
// Create a function called findStudent that accepts two parameters:
// allStudents → the array to search in.
// StudentName → the name to search for.
// Use an arrow function (=>) to define the function.
// Use a for loop to iterate through each element of the array.
// Initialize i to 0 and continue looping while i < allStudents.length.
// .length returns the total number of elements in the array.
// i++ increases the value of i by 1 after each iteration, moving to the next element.
// allStudents[i] accesses the student at the current index.
// The if statement checks whether the current student name is equal to StudentName.
// If a match is found, console.log() prints "Found <student name>".
// findStudent(StudentDatabase, 'Ram') calls the function and searches for "Ram" in the array.