$("#numbar>div>div").on("click",addEvent.click.inputNumbar());
$("#button-cheak")  .on("click",addEvent.click.btncheak());
$("#button-start")  .on("click",addEvent.click.btnstart());
$("#button-auto")   .on("click",addEvent.click.btnauto());
$("#button-ptn")    .on("click",addEvent.click.btnptn());
$("li").on("click",addEvent.click.li())
$(window).keyup(addEvent.keyup());


// //マウスドラッグにて移動可能
// // jsDragDrop=function(){
// //   inputNumbarBox = document.querySelectorAll("#numbar>div>div");
// //   purotLi = document.querySelectorAll("li");
  
// //   for(let i =0;i<inputNumbarBox.length;i++){
// //     inputNumbarBox[i].addEventListener("dragstart",addEvent.dragstart());
// //   }
// //   for(let i =0;i<purotLi.length;i++){
// //     purotLi[i].addEventListener("dragover",addEvent.dragover());
// //     purotLi[i].addEventListener("drop",addEvent.drop())
// //   }
// // }
// // jsDragDrop();


// //タッチにて移動できない
// // jsTouch=function(){
// //   inputNumbarBox = document.querySelectorAll("#numbar>div>div");
// //   purotLi = document.querySelectorAll("li");
// //   moveMain = document.querySelector("main");
// //   pageX = 0;
// //   pageY = 0;
// //   moveMain.addEventListener("touchstart",function(event){
// //     input = false;
// //     hand = event.target.textContent;
// //     if(isNaN(hand)) hand = 0;
// //     for(i=0;i<inputNumbarBox.length;i++){
// //       if(event.target == inputNumbarBox[i])  input = true; 
// //     }    
// //   })
// //   moveMain.addEventListener("touchmove",function(event){
// //     pageX = event.touches[0].pageX;
// //     pageY = event.touches[0].pageY;
// //     event.preventDefault();
// //   })
// //   moveMain.addEventListener("touchend",function(event){
// //     event.preventDefault();
// //     table  = document.elementFromPoint(pageX,pageY);
// //     id = table.id;
// //     r = chengeId.row(id);
// //     c = chengeId.colmun(id);
// //     console.dir(table)
// //     div = table.children[0].outerHTML;
// //     if(!input||display.startNamber [c][r] != 0)  return;
    

    
// //     for(i=0;i<purotLi.length;i++){
// //       if(table === purotLi[i]){
// //         display.bord[c][r] = Number(hand);
// //         table.innerHTML = `${hand}${div}`;
// //       }
// //     }
// //     cheak.pattern();
// //   })

// }
// jsTouch();

// タッチパネルにて操作したい



