/* https://academy.patika.dev/tr/courses/nodejs/odev3
Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.

module.exports yöntemi ile fonksiyonları oluştururken export ediniz.

require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
*/

function calcCircleArea(radius) {
  const AREA = Math.PI * Math.pow(radius, 2);
  const RESULT = parseFloat(AREA.toFixed(2));

  console.log(`The area of the circle with a radius of ${radius} is: ${RESULT}`);
}

function calcCircleCircumference(radius) {
  const AREA = 2 * Math.PI * radius;
  const RESULT = parseFloat(AREA.toFixed(2));

  console.log(`The circumference of the circle with a radius of ${radius} is: ${RESULT}`);
}

module.exports = {
  calcCircleArea,
  calcCircleCircumference,
};
