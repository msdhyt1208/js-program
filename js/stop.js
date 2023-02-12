function resolveAfterSeconds(sec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, sec*1000);
  });
}


