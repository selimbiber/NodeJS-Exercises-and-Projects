// https://academy.patika.dev/tr/courses/nodejs/odev6
// Koa.js ile web sunucumuzu yazalım.

// koa paketini indirelim.
const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// index, hakkimda ve iletisim sayfaları oluşturalım ve sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.

router.get("/", (ctx) => {
  ctx.body = "<h1>Welcome to index page!</h1>";
});

router.get("/hakkimda", (ctx) => {
  ctx.body = "<h1>Welcome to about page!</h1>";
});

router.get("/iletisim", (ctx) => {
  ctx.body = "<h1>Welcome to contact page!</h1>";
});

app.use(router.routes());
app.use(router.allowedMethods());

// port numarası olarak 3000'i kullanalım.
const port = 3000;

app.listen(port, () => {
  console.log("listening on port 3000");
});
