#no1
SELECT nama, ukt FROM mahasiswa 
WHERE ukt = (SELECT MAX(ukt) FROM mahasiswa) 	#menampilkan anak2 untuk UKT yang paling mahal saja

SELECT nama, ukt FROM mahasiswa
ORDER BY ukt DESC 							#menampilkan semua anak2 dari ukt yang paling mahal

#no2
SELECT nama, ukt FROM mahasiswa 
WHERE ukt = (SELECT MAX(ukt) FROM mahasiswa)		#menampilkan anak2 untuk ukt yang paling mahal saja
ORDER BY nama ASC

SELECT nama, ukt FROM mahasiswa		#menampilkan semua anak2 dari ukt yang paling mahal
ORDER BY ukt DESC, nama ASC 

#no3
SELECT COUNT(nama) total FROM mahasiswa
WHERE ipk = 3.5 OR ipk > 3.5 AND semester = 8

#no4
SELECT nama, ukt,
CASE
	WHEN ukt <= 1000000 THEN 'A'
	WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
	WHEN ukt > 2000000 THEN 'C'
END AS golongan
FROM mahasiswa

#no5
SELECT DISTINCT m.nama, m.semester, m.ipk FROM mahasiswa m,
(SELECT semester, MAX(ipk) AS ipk FROM mahasiswa GROUP BY semester) mx
WHERE m.ipk = mx.ipk AND m.semester = mx.semester
ORDER BY m.semester, m.nama

 
 

