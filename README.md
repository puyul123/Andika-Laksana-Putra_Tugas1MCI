# Tugas MySQL

## 1. Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal!

Pada soal ini, saya membuat dua penyelesaian yaitu
- Menampilkan nama mahasiswa dan UKT bagi yang memiliki nominal UKT paling mahal
- Menampilkan seluruh nama mahasiswa dari yang UKT tertinggi ke terendah
_____
### a. Menampilkan nama mahasiswa dan UKT bagi yang memiliki nominal UKT paling mahal

berikut adalah kode yang digunakan pada poin 1a :

```sql
SELECT nama, ukt FROM mahasiswa 
WHERE ukt = (SELECT MAX(ukt) FROM mahasiswa)
```

Hasilnya akan seperti dibawah ini :

![1a](https://user-images.githubusercontent.com/110555492/227275383-c27093e1-82ac-4343-a185-6b123a94512c.png)

### b. Menampilkan seluruh nama mahasiswa dari yang UKT tertinggi ke terendah

berikut adalah kode yang digunakan pada poin 1b :

```sql
SELECT nama, ukt FROM mahasiswa
ORDER BY ukt DESC 		
```

Hasilnya akan seperti dibawah ini :

![1b](https://user-images.githubusercontent.com/110555492/227275532-b53636f8-91b2-4bc1-99ca-19fff190188a.png)

## 2. Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal, jika ada ukt yang sama, urutkan berdasarkan nama mahasiswa secara alfabetikal.

Penyelesaian soal nomor 2 mirip seperti nomor 1, hanya saja kita perlu menambahkan fitur order by oleh nama.

### a. Menampilkan nama mahasiswa dan UKT bagi yang memiliki nominal UKT paling mahal

berikut adalah rincian kode pada soal poin 2a : 

```sql
SELECT nama, ukt FROM mahasiswa 
WHERE ukt = (SELECT MAX(ukt) FROM mahasiswa)
ORDER BY nama ASC
```

Sehingga hasilnya akan seperti dibawah ini :

![2a](https://user-images.githubusercontent.com/110555492/227275690-8a709c38-a28a-44b7-bd34-a23e8d021075.png)

### b. Menampilkan seluruh nama mahasiswa dari yang UKT tertinggi ke terendah

berikut adalah rincian kode pada soal poin 2b :

```sql
SELECT nama, ukt FROM mahasiswa	
ORDER BY ukt DESC, nama ASC
```

Sehingga hasilnya didapatkan seperti dibawah ini :

![2b](https://user-images.githubusercontent.com/110555492/227275797-0dc37093-bf11-4471-b7ef-ebf21a03177b.png)

## 3. Hitunglah jumlah mahasiswa yang memiliki ipk >= 3.5 dan berada di semester 8

Pada permasalahan ke-3 ini, kita hanya perlu memandaatkan fungsi agregat `Count()` untuk menghitung jumlah total mahasiswa

```sql
SELECT COUNT(nama) total FROM mahasiswa
WHERE ipk = 3.5 OR ipk > 3.5 AND semester = 8
```

sehingga hasilnya bisa dilihat dibawah ini :

![3](https://user-images.githubusercontent.com/110555492/227275950-f1978483-95d1-4731-8358-33c52119ad3f.png)

## Soal Tantangan
___

## 4. Tampilkan nama, ukt, dan golongan. Jika ukt mahasiswa kurang dari sama dengan 1 juta, maka masuk golongan "A". Jika ukt mahasiswa diatas 1 juta sampai denga 2 juta, maka masuk golongan "B" Jika ukt mahasiswa diatas 2 juta, maka masuk golongan "C".

Pada soal ini kita bisa memanfaatkan syntax `Case` sehingga bisa membuat beberapa kondisional sesuai dengan UKT yang diminta, rincian kodenya sebagai berikut :

```sql
SELECT nama, ukt,
CASE
	WHEN ukt <= 1000000 THEN 'A'
	WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
	WHEN ukt > 2000000 THEN 'C'
END AS golongan
FROM mahasiswa
```

sehingga didapatkan hasilnya sebagai berikut :

![4](https://user-images.githubusercontent.com/110555492/227276185-94c7dc1f-e8ac-49f1-a040-12b44f32104f.png)

## 5. Tampilkan daftar nama, semester dan ipk berdasarkan ipk tertinggi tiap semester. Diurutkan berdasarkan semesternya. Jika ada yang nilainya sama, maka diurutkan berdasarkan alfabet.

Berikut adalah rincian kode beserta penjelasannya :

```sql
SELECT DISTINCT m.nama, m.semester, m.ipk FROM mahasiswa m,
(SELECT semester, MAX(ipk) AS ipk FROM mahasiswa GROUP BY semester) mx
WHERE m.ipk = mx.ipk AND m.semester = mx.semester
ORDER BY m.semester, m.nama
```

Pada kode tersebut, saya membuat 2 table yaitu table `mahasiswa` dan table `mx`. table `mx` digunakan untuk mencari value ' _ukt_ ' maksimum pada setiap semester (GROUP BY semester). 

![image](https://user-images.githubusercontent.com/110555492/227278948-e82650c4-0a44-4018-9394-122dc74589d1.png)

Selanjutnya, value ' _ukt_ ' dan ' _semester_ ' pada table `mahasiswa` dan `mx` dicross sehingga kita dapat menampilkan record pada table `mahasiswa` sesuai dengan record pada table `mx`. Terakhir, kita memanfaatkan `DISTINCT` untuk menghilangkan record yang duplikat akibat cross kedua value. Hasil akhirnya dapat dilihat sebagai berikut :

![5](https://user-images.githubusercontent.com/110555492/227276392-cef6d6c6-0dab-4caa-a6fe-63b4479a24a7.png)
