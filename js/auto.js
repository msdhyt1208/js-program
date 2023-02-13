ptn = 0;
end =false;
// gaibu.input();
$(".numbar-colmun").on("click",function(){
  if(!isNaN($(this).text())) numbar = $(this).text();
  else numbar ="";
  $(".select").text(numbar);
  cheak.pattern();
  display.reset();
})
$("#button-cheak").on("click",function(){
  display.check();
})
$("#button-start").on("click",function(){
  display.start();
})
$("#button-auto").on("click",function(){
  position = 0;
  if(!cheak.gemeClear())  display.start();
  else  position=display.possible.id.length-1;
  auto(position);
})
$("#button-ptn").on("click",function(){
  cheak.pattern();
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
  let key = e.key;
  const cell = $(".select").attr("id");
  if(!($.isNumeric(key))||key<1) key = ""; 
  $(".select").text(key);
  display.input(cell,key);
  $(".select").removeClass();
  $(".selectLine").removeClass();
  cheak.pattern();
  display.reset();
});
async function auto(cellPozition){
  let i = cellPozition;

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
    console.log(i);
    if(i<0)return false;
    const result = await resolveAfterSeconds(0.01);
  }
}
function autoNotDisplay(cellPozition){
  let i = cellPozition;
  for(let i=1;i<10;i++){
    if(!cheak.oneCellAll(i,i,i,true))  return false;
  }
  while(display.possible.id.length > i){
    cell = display.possible.id[i];
    r    = chengeId.row(cell);
    c    = chengeId.colmun(cell);
    b    = chengeId.block(cell);

    while(display.bord[c][r] < 10){
      // console.log(`${i}:${cell}:${r}:${c}:${b}`);
      display.bord[c][r] ++;
      if(cheak.oneCellAll(r,c,b,true)) break;
    }
    (display.bord[c][r] >= 10) ? i--:i++;
    if(display.bord[c][r] >= 10)  display.bord[c][r] = "";

    if(i<0)return false;
  }
  return true;
}
