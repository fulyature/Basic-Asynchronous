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
