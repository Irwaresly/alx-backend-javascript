const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = [];
    const fields = {};

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        const [firstname, , , field] = line.split(',');

        if (firstname && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
          students.push(firstname);
        }
      }
    }

    console.log(`Number of students: ${students.length}`);

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    console.error('Error: Cannot load the database');
    process.exit(1); // Exit the process with an error status code
  }
}

module.exports = countStudents;
