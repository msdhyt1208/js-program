// gaibu.input();
$(".numbar-colmun").on("click",function(){
  numbar = $(this).text();
  $(".select").text(numbar);
})
$("#button-cheak").on("click",function(){
  display.check();
})
$("#button-start").on("click",function(){
  gaibu.input();
})
$("#button-auto").on("click",function(){
  // gaibu.input();
  display.start();
  auto();
})
$("li").on("click",function(){
  id = Number($(this).attr("id"));
  $(".select").removeClass();
  $(this).addClass("select");
})
$(window).keyup(function(e){
  const key = e.key;
  const id = $(".select").attr("id");
  if($.isNumeric(key)){
    if(key<10){
      $(".select").text(key);
      display.input(id,key);
    }
  }
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