SELECT 
cohorts.name AS cohort_name,
COUNT(students.name) AS student_count
FROM students
JOIN cohorts
ON students.cohort_id = cohorts.id
GROUP BY cohorts.id
HAVING COUNT(students.name) >= 18
