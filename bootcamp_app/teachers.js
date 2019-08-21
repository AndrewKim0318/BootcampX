const { Pool } = require('pg');
const text = `
SELECT cohorts.name as cohort, teachers.name
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id
JOIN assistance_requests ON students.id = assistance_requests.student_id
JOIN teachers ON assistance_requests.teacher_id = teachers.id
WHERE cohorts.name LIKE $1
GROUP BY cohorts.name, teachers.name
ORDER BY teachers.name
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
      console.log(`${user.cohort}: ${user.name}`);
    });
  })
  .catch(err => console.error('query error', err.stack));


