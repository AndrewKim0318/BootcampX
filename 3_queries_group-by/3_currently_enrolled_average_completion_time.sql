SELECT 
students.name AS student,
SUM(assignment_submissions.duration)::FLOAT /COUNT(assignment_submissions.*) AS average_assignment_duration
FROM students
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
WHERE students.end_date IS NULL
GROUP BY students.id
ORDER BY SUM(assignment_submissions.duration)::FLOAT /COUNT(assignment_submissions.*) DESC