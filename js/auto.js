$("#numbar>div>div").on("click",addEvent.click.inputNumbar());
$("#button-cheak")  .on("click",addEvent.click.btncheak());
$("#button-start")  .on("click",addEvent.click.btnstart());
$("#button-auto")   .on("click",addEvent.click.btnauto());
$("#button-ptn")    .on("click",addEvent.click.btnptn());
// $("#numbar>div>div").draggable({
//     start:function(event,ui){
//       console.log("start");
//       console.log(event,ui);
//     },
//     drag:function(event,ui){
//       console.log("drag");
//       console.log(event,ui);
//     },
//     stop:function(event,ui){
//       console.log("stop");
//       console.log(event,ui);
//     }
// })

$("li").on("click",addEvent.click.li())
$(window).keyup(addEvent.keyup());






















//js
js=function(){
  inputNumbarBox = document.querySelectorAll("#numbar>div>div");
  purotLi = document.querySelectorAll("li");
  
  for(let i =0;i<inputNumbarBox.length;i++){
    inputNumbarBox[i].addEventListener("dragstart",addEvent.dragstart());
  }
  for(let i =0;i<purotLi.length;i++){
    purotLi[i].addEventListener("dragover",addEvent.dragover());
    purotLi[i].addEventListener("drop",addEvent.drop())
  }
}
js();