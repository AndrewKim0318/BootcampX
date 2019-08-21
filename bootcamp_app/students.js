const { Pool } = require('pg');
const text = `
SELECT students.id, students.name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;
const values = process.argv.slice(2);


const pool = new Pool({
  user: 'vagrant',
  password: 'password',
  host: 'localhost',
  database: 'bootcampx',
});

pool.query(text, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(err => console.error('query error', err.stack));