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
  if(!cheak.gemeClear()){
    display.start();
    auto();
  }
  
})
$("li").on("click",function(){
  const cell = $(this).attr("id");
  const r = chengeId.row(cell);
  const c = chengeId.colmun(cell);
  const selectOn = $(this).hasClass("select");
  $(".select").removeClass();
  $(".selectLine").removeClass();
  if(selectOn || display.startNamber [c][r] != 0)  return;
  $(this).addClass("select");
  display.line(r,c,chengeId.block(cell));     //横縦ブロックのライン変更
})
$(window).keyup(function(e){
  const key = e.key;
  const cell = $(".select").attr("id");
  if(!($.isNumeric(key))||key<1) key = ""; 
  $(".select").text(key);
  display.input(cell,key);
  $(".select").removeClass();
  $(".selectLine").removeClass();
});
async function auto(){
  let i = 0;
  while(display.possible.id.length > i){
    cell = display.possible.id[i];
    r    = chengeId.row(cell);
    c    = chengeId.colmun(cell);
    b    = chengeId.block(cell);
    while(display.bord[c][r] < 10){
      display.bord[c][r] ++;
      if(cheak.oneCellAll(r,c,b,true)) break;
    }
    (display.bord[c][r] >= 10) ? i--:i++;
    if(display.bord[c][r] >= 10)  display.bord[c][r] = "";
    $("#"+cell).text(display.bord[c][r]);

    const result = await resolveAfterSeconds(0.01);
  }
}