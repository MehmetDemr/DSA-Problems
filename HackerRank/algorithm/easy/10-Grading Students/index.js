let arr1 = [73, 67, 38, 33];

function gradingStudents(grades = []) {
  let newGrades = [];

  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    const remainder = grade % 5;

    if (grade >= 38 && remainder >= 3) {
      newGrades.push(grade + (5 - remainder));
    } else {
      newGrades.push(grade);
    }
  }

  return newGrades;
}

console.log(gradingStudents(arr1));
