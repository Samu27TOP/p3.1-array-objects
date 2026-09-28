// StudentCollection.js
export default class StudentCollection {
  constructor(students = []) {
    this.students = students;
  }

  // 1. Adds a new student to the collection 
  addStudent(name, age, grades, isEnrolled) {
    this.students.push({ name: name, age: age, grades: grades, isEnrolled: isEnrolled });
  }

  // 2. Returns a student by searching for their name 
  getStudentByName(name) {
    for (const student of this.students) {
      if (student.name === name) {
        return student;
      }
    }
    return undefined;
  }

  // 3. Removes a student by filtering out their name 
  removeStudentByName(name) {
    this.students = this.students.filter((student) => student.name !== name);
  }

  // 4. Finds a student by name and updates their grades 
  updateStudentGrades(name, newGrades) {
    const student = this.getStudentByName(name);
    if (student) {
      student.grades = newGrades;
    }
    return student;
  }

  // 5. Returns the average of a student's grades with a given name 
  calculateAverageGrade(name) {
    const student = this.getStudentByName(name);
    if (!student || student.grades.length === 0) {
      return 0;
    }
    const sum = student.grades.reduce(function (accumulator, grade) {
      return accumulator + grade;
    }, 0);
    return sum / student.grades.length;
  }

  // 6. Returns an array of students who are enrolled 
  getEnrolledStudents() {
    return this.students.filter((student) => student.isEnrolled);
  }

  // 7. Returns students older than a given age 
  getStudentsAboveAge(age) {
    return this.students.filter((student) => student.age > age);
  }

  // 8. Finds the student with the highest average grade 
  getTopStudent() {
    if (this.students.length === 0) {
      return null;
    }
    return this.students.reduce((top, student) => {
      const topAverage = this.calculateAverageGrade(top.name);
      const studentAverage = this.calculateAverageGrade(student.name);
      if (studentAverage > topAverage) {
        return student;
      } else {
        return top;
      }
    }, this.students[0]);
  }

  // 9. Maps the students into a summary object with name and average grade
  getStudentSummaries() {
    return this.students.map((student) => {
      return { name: student.name, averageGrade: this.calculateAverageGrade(student.name) };
    });
  }

  // 10. Filters students by a grade threshold 
  getTopStudents(threshold) {
    return this.students.filter(
      (student) => this.calculateAverageGrade(student.name) >= threshold
    );
  }

  // 11. Filters enrolled students and returns an array of their names
  getEnrolledStudentNames() {
    return this.getEnrolledStudents().map((student) => student.name);
  }

  // 12. Returns an array of strings formatting each student's grades
  formatGrades() {
    return this.students.map((student) => {
      const gradesText = student.grades.reduce(function (accumulator, grade, index) {
        if (index === 0) {
          return `${grade}`;
        } else {
          return `${accumulator}, ${grade}`;
        }
      }, "");
      return `${student.name}: ${gradesText}`;
    });
  }

  // 13. Filters students whose average grade is 90 or above 
  getHonorRollStudents() {
    return this.getTopStudents(90);
  }

  // 14. Converts the students array to a JSON string
  serializeStudents() {
    return JSON.stringify(this.students);
  }

  // 15. Converts a JSON string back into the students array
  deserializeStudents(jsonString) {
    this.students = JSON.parse(jsonString);
    return this.students;
  }
}