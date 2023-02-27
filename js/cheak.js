
ptn = 0;
end =false;

let display={
  bord:[  //変更中の盤面

  ],
  possible:{
    id:[]
  }
}
const game={
  start:function(){       //画面をデーター化
    console.dir(display.bord);
    display.possible.id.length = 0;
    display.bord.length = 0;
    bord=[]
    bord[0] =[0,0,0,0,0,0,0,0,0,0];
    li = $("main>div>ul>li");
    for(i=0;i<$("main>div>ul>li").length;i++){
      key = Number($("main>div>ul>li")[i].textContent);
      id =  $("main>div>ul>li")[i].id;
      if(key == "") key = 0;
      r = chengeId.row(id);
      c = chengeId.colmun(id);
      if(r ==1){
        bord[c] = new Array(10);
        bord[c][0] = 0;
      }
      bord [c][r] = key;
      if(key != 0) continue;
        $(".colmun>ul>li>div").addClass("possible");
        display.possible.id.push(id);
    }
    display.bord.push(copy(bord));
    display.bord.push(copy(bord));
    console.dir(display.bord);
  },
  inputBord:function(){       //画面をデーター化
    for(i=0;i<$("main>div>ul>li").length;i++){
      id = $("main>div>ul>li")[i].id;
      display.bord [1][chengeId.colmun(id)][chengeId.row(id)] = $("main>div>ul>li")[i].textContent;
    }
  },

  check:function(){             //重複確認
    this.inputBord();
    for(let i=1;i<10;i++){
      $my("#r"+i).removeClass();
      $my("#c"+i).removeClass();
      $my("#block"+i).removeClass();
      if(cheak.all("row",i,false))    $my("#r"+i).addClass("ok");
      if(cheak.all("colmun",i,false)) $my("#c"+i).addClass("ok");
      if(cheak.all("block",i,false))  $my("#block"+i).addClass("ok");

    }
    if(cheak.gemeClear()){  $my("main").addClass("end")}
  },
  line:function(r,c,b){             //重複確認
    stR = ((b-1)%3)*3;            //ブロックの左端基準
    stC = Math.floor((b-1)/3)*3;  //ブロックの上端基準
    for(let i=1;i<10;i++){
      mvR = (i-1)%3+1;              //ブロック内移動右
      mvC = Math.floor((i+2)/3);    //ブロック内移動下
      if(i != c)   $my("#"+((i*10)+r)).addClass("selectLine");
      if(i != r)   $my("#"+((c*10)+i)).addClass("selectLine");
      if(i!=(c-stC-1)*3+r-stR)
                   $my("#"+(mvR+stR+(mvC+stC)*10)).addClass("selectLine");
    }
  },
  inputNumbar(numbar){
    $my("#numbar").addClass("inputOff");
    $(".select").text(numbar) ;
    $my(".select").removeClass();
    $my(".selectLine").removeClass();
    // cheak.pattern();
  }
}
const cheak={
  oneCellAll:function(r,c,block,zero){             //重複確認
    if(this.all("row",r,zero)&&this.all("colmun",c,zero)&&this.all("block",block,zero)){
       return true;
    }
    else return false;
  },
  gemeClear:function(){             //重複確認
    for(let i=1;i<10;i++){
      if(!this.oneCellAll(i,i,i)) return false;
    }
    return true;
  },
  all:function(select,th,zero){
    streat=[0,0,0,0,0,0,0,0,0,0];
    
    switch(select){
      case "row":
        for(let i=0;i<10;i++){
          streat[i] = display.bord[1][i][th];
        }
        break;
      case "colmun":
        for(let i=0;i<10;i++){
          streat[i] = display.bord[1][th][i];
        }
        break;
      case "block":
        stR = ((th-1)%3)*3;            //ブロックの左端基準
        stC = Math.floor((th-1)/3)*3;  //ブロックの上端基準
        streat.length = 0; 
        streat[0] = 0;
        for(let i=1;i<10;i++){
          mvR = (i-1)%3+1;              //ブロック内移動右
          mvC = Math.floor((i+2)/3);    //ブロック内移動下
          streat[i] = display.bord[1][stC+mvC][stR+mvR];
        }
        break;
      default:
        alert("error");
    }
    return this.streat(streat,zero);
  },
  streat:function(streat,zero){    
    for(let i=1;i<10;i++){
      for(let j=i+1;j<10;j++){
        if(streat[i] == 0){
          if(zero) break;
          else return false;
        } 
        if(streat[i] == streat[j]) return false;
      }
    }
    return true;
  },
  pattern:function(){
    ptn = 0;
    end = false;
    position = 0;
    game.inputBord()
    while(ptn<10){
      if(cheak.gemeClear())   position=display.possible.id.length-1;
      if(end)return;
      if(!autoNotDisplay(position)) {
        end = true;
        setTimeout(function(){$("#button-ptn").text(ptn)},1000)
        return;
      }
      $("#button-ptn").text("思考中");
      ptn ++;
      setTimeout(function(){$("#button-ptn").text(ptn)},1000)
    }
  }

}
const gaibu={
  deta:[
  //   ["0","0","0","0","0","0","0","0","0","0"],
  //   ["0","6","4","0","7","8","5","9","2","3"],
  //   ["0","7","3","8","2","9","6","1","5","4"],
  //   ["0","2","5","0","3","1","4","6","7","8"],
  //   ["0","9","6","4","8","2","1","5","3","7"],
  //   ["0","5","1","7","4","6","3","8","9","2"],
  //   ["0","8","2","3","9","0","7","4","6","1"],
  //   ["0","3","7","6","1","4","9","2","8","5"],
  //   ["0","1","8","5","6","3","2","7","4","9"],
  //   ["0","4","9","2","5","7","8","3","1","0"]
  // ],
    ["0","0","0","0","0","0","0","0","0","0"],
    ["0","6","0","1","7","8","5","0","2","3"],
    ["0","7","3","8","0","9","0","1","0","4"],
    ["0","2","5","0","0","1","4","0","7","0"],
    ["0","0","0","4","0","0","1","0","0","0"],
    ["0","0","1","7","0","6","3","8","9","0"],
    ["0","0","0","3","9","0","0","0","0","1"],
    ["0","0","7","0","0","0","0","2","8","0"],
    ["0","0","0","5","6","0","0","7","4","0"],
    ["0","4","0","0","5","7","0","3","1","6"]
  ],
  input:function(){
    for(let i=1;i<10;i++){
      for(let j=1;j<10;j++){
        const id =i*10+j; 
        if(this.deta[i][j]!=0) $("#"+id).text(this.deta[i][j]);
      }
    }
  }
}
const chengeId ={
  row:function(id){
    return id%10;
  },
  colmun:function(id){
    return Math.floor(id/10);
  },
  block:function(id){
    return  Math.floor((this.row(id)-1)/3)+
            Math.floor((this.colmun(id)-1)/3)*3+
            1;
  }
}

async function auto(cellPozition){
  let i = cellPozition;

  while(display.possible.id.length > i){
    cell = display.possible.id[i];
    r    = chengeId.row(cell);
    c    = chengeId.colmun(cell);
    b    = chengeId.block(cell);

    while(display.bord[1][c][r] < 10){
      display.bord[1][c][r] ++;
      if(cheak.oneCellAll(r,c,b,true)) break;
    }
    (display.bord[1][c][r] >= 10) ? i--:i++;
    if(display.bord[1][c][r] >= 10)  display.bord[1][c][r] = "";
    
    $my("#"+cell).text(display.bord[1][c][r]);
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
addEvent={
  keyup: function(){
    return function(e){
      let key = e.key;
      if(!($.isNumeric(key))||key<1) key = ""; 
      game.inputNumbar(key);
    };
  },
  click:{
    li:function(){
      return function(){
        const cell = $(this).attr("id");
        const r = chengeId.row(cell);
        const c = chengeId.colmun(cell);
        $my("#numbar").addClass("inputOn");
        $my(".select").removeClass();
        $my(".selectLine").removeClass();
        if($(this).hasClass("select") || display.bord[0][c][r] != 0)  return;
        $my(this).addClass("select");
        game.line(r,c,chengeId.block(cell));     //横縦ブロックのライン変更
      }
    },
    numbar:function(){
      return function(){
        if(!isNaN($(this).text())) numbar = $(this).text();
        else numbar ="";
        game.inputNumbar(numbar);
      }
    },
    btncheak:function(){
      return function(){
        game.check();
      }
    },
    btnstart:function(){
      return function(){
        gaibu.input();
        game.start();
      }
    },
    btnauto:function(){
      return function(){
        game.start();
        position = 0;
        if(!cheak.gemeClear())  game.start();
        else  position=display.possible.id.length-1;
        auto(position);
      }
    },
    btnptn:function(){
      return function(){

      }
    }
  }
  // dragstart:function(){
  //   return function(){
  //     inputNumbar = this.textContent;
  //   }
  // },
  // dragover:function(){
  //   return function(event){
  //     event.preventDefault();
  //   }
  // },
  // drop:function(){
  //   return function(event){
  //     if(isNaN(inputNumbar)) inputNumbar ="";
  //     console.log(`drop`);
  //     event.preventDefault();
  //     this.textContent = inputNumbar;
  //   }
  // },
  // touchstart:function(){
  //   return function(){
  //     inputNumbar = this.textContent;
  //     console.log(`touchstart${inputNumbar}`);

  //   }
  // },
  // touchmove:function(){
  //   return function(event){
  //     event.preventDefault();
  //     console.log(`touchmove`);
  //   }
  // },
  // touchend:function(){
  //   return function(event){
  //     if(isNaN(inputNumbar)) inputNumbar ="";
  //     console.log(`touchend`);
  //     event.preventDefault();
  //     this.textContent = inputNumbar;
  //   }
  // }

}