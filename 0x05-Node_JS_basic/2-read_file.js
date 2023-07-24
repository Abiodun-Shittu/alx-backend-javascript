const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1);

    const studentData = {};

    headers.forEach((header) => {
      studentData[header] = [];
    });

    students.forEach((student) => {
      const values = student.split(',');
      values.forEach((value, index) => {
        studentData[headers[index]].push(value);
      });
    });

    console.log(`Number of students: ${students.length}`);

    for (const field in studentData) {
      const uniqueValues = [...new Set(studentData[field])];
      console.log(
        `Number of students in ${field}: ${
          uniqueValues.length
        }. List: ${uniqueValues.join(', ')}`,
      );
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
