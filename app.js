//********asenkrom(setInterval), clearInterval */
// let count = 0;
// const sec1 = setInterval(() => {
//   console.log(++count);
//   if (count > 9) {
//     clearInterval(sec1);
//   }
// }, 1000);

//! Callback Hell
setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Sarah:Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

console.log("Promise");

const networkReq = new Promise((resolve, reject) => {
  const data = { a: 1, b: 2 };
  const success = Math.floor(Math.random() * 5); //? (0,1,2,3,4)
  if (success) {
    console.log("Data fetched");
    resolve(data);
  } else {
    reject("Ohh no there is network error");
  }
});

networkReq
  .then((response) => console.log(response))
  .then(() => console.log("2. then"))
  .catch((err) => document.write(err));
