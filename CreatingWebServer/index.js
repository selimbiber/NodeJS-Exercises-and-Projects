// Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

// createServer metodunu kullanacağız.

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  // index, hakkimda ve iletisim sayfaları oluşturalım.
  // Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to Index Page</h2>");
  } else if (url === "/hakkimda") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to About Page</h2>");
  } else if (url === "/iletisim") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to Contact Page</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>404 Not Found</h2>");
  }

  res.end();
});

// port numarası olarak 5000'i kullanalım.
const port = 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
