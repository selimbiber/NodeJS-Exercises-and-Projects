// https://academy.patika.dev/tr/courses/nodejs/odev4
// Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

//! Kodları çalıştırmaya çalışmadan önce yorum satırından çıkarmayı unutmayın.

//? employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)

fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (error) => {
    if (error) console.log(error);
    console.log("Employee 1 Created");
  }
);

//? Bu veriyi okuyalım. (READ)

// fs.readFile("employees.json", "utf8", (error, data) => {
//   if (error) console.log(error);
//   console.log(data); // {"name": "Employee 1 Name", "salary": 2000}
// });

//? Bu dosyayı güncelleyelim.

// fs.appendFile(
//   "employees.json",
//   '\n{"name": "Employee 2 Name", "salary": 4000}',
//   "utf8",
//   (error) => {
//     if (error) console.log(error);
//     console.log("Employees File Updated");
//   }
// );

//? Dosyayı silelim.

// fs.unlink("employees.json", (error) => {
//   if (error) console.log(error);
//   console.log("Employees File Deleted");
// });
