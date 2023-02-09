// gaibu.input();
$(".numbar-colmun").on("click",function(){
  if(!isNaN($(this).text())) numbar = $(this).text();
  else numbar ="";
  $(".select").text(numbar);
})
$("#button-cheak").on("click",function(){
  display.check();
})
$("#button-start").on("click",function(){
  gaibu.input();
  display.start();
})
$("#button-auto").on("click",function(){
  // gaibu.input();
  display.start();
  auto();
})
$("li").on("click",function(){
  const selectPush = $(this).hasClass("select");
  const id = $(this).attr("id");
  const r=chengeId.row(id);
  const c=chengeId.colmun(id);
  $(".select").removeClass();
  if(display.startNamber [c][r] != 0) return;
  if(selectPush) return;
  $(this).addClass("select");
  
})
$(window).keyup(function(e){
  let key = e.key;
  const id = $(".select").attr("id");
  if(!($.isNumeric(key))||key<1) key = ""; 
  $(".select").text(key);
  display.input(id,key);
  $(".select").removeClass();
});
async  function auto(){
  let i = 0;
  while(display.possible.id.length>i){
    id =  display.possible.id[i];
    r =   display.possible.row[i];
    c =   display.possible.colmun[i];
    b =   display.possible.block[i];
    while(true){
      display.bord[c][r] ++;

      if(display.bord[c][r] >= 10){
        display.bord[c][r] = "";
        i--;
        break;
      }
      if(cheak.oneCellAll(r,c,b,true)){
        i++;
        break;
      }
    }
    $("#"+id).text("");
    $("#"+id).text(display.bord[c][r]);
    const result = await resolveAfter2Seconds(0.01);
  }
}