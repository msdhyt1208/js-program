

//マウスドラッグにて移動可能
// jsDragDrop=function(){
//   inputNumbarBox = document.querySelectorAll("#numbar>div>div");
//   purotLi = document.querySelectorAll("li");
  
//   for(let i =0;i<inputNumbarBox.length;i++){
//     inputNumbarBox[i].addEventListener("dragstart",addEvent.dragstart());
//   }
//   for(let i =0;i<purotLi.length;i++){
//     purotLi[i].addEventListener("dragover",addEvent.dragover());
//     purotLi[i].addEventListener("drop",addEvent.drop())
//   }
// }
// jsDragDrop();


//タッチにて移動できない
jsTouch=function(){
  inputNumbarBox = document.querySelectorAll("#numbar>div>div");
  purotLi = document.querySelectorAll("li");
  moveMain = document.querySelector("main");
  input = false;
  moveMain.addEventListener("touchstart",function(event){
    input = false;
    pageX = event.touches[0].pageX;
    pageY = event.touches[0].pageY;
    console.dir(document.elementFromPoint(pageX,pageY));
    if(isNaN(numbar)) numbar = "";
    hand = event.target;
    for(i=0;i<inputNumbarBox.length;i++){
      if(document.elementFromPoint(pageX,pageY) == inputNumbarBox[i])  input = true; 
    }
    
    
  })
  moveMain.addEventListener("touchmove",function(event){
    pageX = event.touches[0].pageX;
    pageY = event.touches[0].pageY;
    event.preventDefault();
  })
  moveMain.addEventListener("touchend",function(event){
    event.preventDefault();
    if(!input) return;
    table  = document.elementFromPoint(pageX,pageY);

    id = table.id;
    r = chengeId.row(id);
    c = chengeId.colmun(id);
    console.dir(id);
    
    if(display.startNamber [c][r] != 0)  return;
    for(i=0;i<purotLi.length;i++){
      if(table === purotLi[i])  table.textContent = hand.textContent;
    }
  })

}
jsTouch();

// タッチパネルにて操作したい

$("#numbar>div>div").on("click",addEvent.click.inputNumbar());
$("#button-cheak")  .on("click",addEvent.click.btncheak());
$("#button-start")  .on("click",addEvent.click.btnstart());
$("#button-auto")   .on("click",addEvent.click.btnauto());
$("#button-ptn")    .on("click",addEvent.click.btnptn());
$("li").on("click",addEvent.click.li())
$(window).keyup(addEvent.keyup());


