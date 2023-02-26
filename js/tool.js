function resolveAfterSeconds(sec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, sec*1000);
  });
}
function copy(array){
  return JSON.parse(JSON.stringify(array));
}

