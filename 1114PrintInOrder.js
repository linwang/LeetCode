//input: a function with three sub-functions
//output: [first, second, third] guarantee the three functions always run in
//order even when they're invoked on different threads

//how do I write javascript concurency functions?
//declare each function async
// then the return automatically turns into a promise

const sleep = function(milliseconds) {
  let p = new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log(`Waited ${milliseconds} milliseconds`);
      resolve();
    }, milliseconds);
  })
  return p;
}
async function printFirst(){
  await sleep(2000);
  return 'First';
}
async function printSecond() {
  await sleep(1000);
  return 'Second';
}
async function printThird() {
  await sleep(3000);
  return 'Third';
}
async function printInOrder() {
  console.time('printInOrder');
  let a = await printFirst();
  console.log(a);
  a = await printSecond();
  console.log(a);
  a = await printThird();
  console.log(a);
  console.timeEnd('printInOrder');
}

printInOrder();

/*
function printAll() {
  console.time('printAll');
  Promise.all([printFirst(), printSecond(), printThird()]).then((results) => {
    console.log(`Output for all are: ${results}`);
    console.timeEnd('printAll');
  })
}
printInOrder().then(
  () => {
  printAll();
  });
*/
