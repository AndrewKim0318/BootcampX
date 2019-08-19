SELECT day, count(content)
FROM assignments
GROUP BY day
ORDER BY day