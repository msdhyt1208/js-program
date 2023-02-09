async function myAsync() {
 
  const result = await myPromise(10);

  console.log(result);

}

myAsync();
function myPromise(num) {
  return new Promise(function(resolve) {
 
    setTimeout(function() { resolve(num * num) }, 3000)
 
  })
}