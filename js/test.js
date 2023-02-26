let array = [];
for(i =0;i<10;i++){
  array[i] = [];
  for(j = 0;j<10;j++){
    array[i][j] = i*10+j;
  }
}
newarray = copy(array);
array [0][0] = 100;
console.dir(array[0][0]);
console.dir(newarray[0][0]);
function copy (array){
  return  JSON.parse(JSON.stringify(array));
}