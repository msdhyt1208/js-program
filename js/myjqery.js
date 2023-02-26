$my = function(e){
  return{
    addClass(t){
      $(e).removeClass();
      $(e).addClass(t);
    },
    removeClass(){
      $(e).removeClass();
    },
    text(t){
      if(t != undefined)
      $(e)[0].innerHTML = `${t}${$(e)[0].firstElementChild.outerHTML}`;
      return $(e).text();
    },
    attr(t){
      $(e).attr(t);
      return $(e).attr(t);
    }
  }
}

        
// $(".select")[0].innerHTML = `${t}${$(".select")[0].firstElementChild.outerHTML}`;