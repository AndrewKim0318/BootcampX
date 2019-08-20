SELECT
cohorts.name AS cohort,
SUM(assistance_requests.completed_at - assistance_requests.started_at) AS average_assistance_time
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.cohort_id
GROUP BY cohorts.name
ORDER BY SUM(assistance_requests.completed_at - assistance_requests.started_at)
