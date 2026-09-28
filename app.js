// app.js
import StudentCollection from './StudentCollection.js';

// Initialize the collection with some students
const students = [
  { name: "John Doe", age: 18, grades: [88, 92, 76], isEnrolled: true },
  { name: "Jane Smith", age: 20, grades: [95, 85, 90], isEnrolled: true },
  { name: "Sam Green", age: 22, grades: [70, 75, 80], isEnrolled: false },
  { name: "Alice Brown", age: 19, grades: [90, 91, 89], isEnrolled: true },
];

// Create a new StudentCollection object
const studentCollection = new StudentCollection(students);

// Find a student by name and show it on the screen
const foundStudent = studentCollection.getStudentByName("Jane Smith");
console.log("Found student:", foundStudent);

// Add a new student
studentCollection.addStudent("Emily White", 21, [88, 90, 92], true);
console.log("After adding Emily White:", studentCollection.students);

// Find the top student based on grades
const topStudent = studentCollection.getTopStudent();
console.log("Top student:", topStudent);

// TASK: test all the methods you have created

// removeStudentByName
studentCollection.removeStudentByName("Sam Green");
console.log("After removing Sam Green:", studentCollection.students);

// updateStudentGrades
studentCollection.updateStudentGrades("John Doe", [100, 98, 95]);
console.log("Updated grades for John Doe:", studentCollection.getStudentByName("John Doe"));

// calculateAverageGrade
console.log("Average grade for John Doe:", studentCollection.calculateAverageGrade("John Doe"));

// getEnrolledStudents
console.log("Enrolled students:", studentCollection.getEnrolledStudents());

// getStudentsAboveAge
console.log("Students older than 19:", studentCollection.getStudentsAboveAge(19));

// getStudentSummaries
console.log("Student summaries:", studentCollection.getStudentSummaries());

// getTopStudents (threshold of 90)
console.log("Students with average >= 90:", studentCollection.getTopStudents(90));

// getEnrolledStudentNames
console.log("Names of enrolled students:", studentCollection.getEnrolledStudentNames());

// formatGrades
console.log("Formatted grades:", studentCollection.formatGrades());

// getHonorRollStudents
console.log("Honor roll students (average >= 90):", studentCollection.getHonorRollStudents());

// Serialize the students to JSON
const serializedData = studentCollection.serializeStudents();
console.log("Serialized Data:", serializedData);

// Deserialize the JSON back into the collection
studentCollection.deserializeStudents(serializedData);
console.log("Deserialized Data:", studentCollection.students);
