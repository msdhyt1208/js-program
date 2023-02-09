gaibu.input();
bord.start();
// bord.display();
$("li").on("click",function(){
  id = Number($(this).attr("id"));
  r = id % 10;
  c = Math.floor(id/10);
  block = Math.floor((r-1)/3)+Math.floor((c-1)/3)*3+1;
  $(".select").removeClass();
  console.log("["+c+"]["+r+"]:"+bord.startNamber[c][r])
  if(bord.startNamber[c][r] == 0){
    
    $(this).addClass("select");
  }
  bord.check();       
  bord.display();                 

})
$(window).keyup(function(e){
  const key = e.key;
  const id = $(".select").attr("id");
  if($.isNumeric(key)){
    if(key<10){
      $(".select").text(key);
      bord.input(id,key);
    }
  }
  // bord.display();
  $(".select").removeClass();
  bord.check();
});