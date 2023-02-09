const display={
  bord:[                      //変更中の盤面
      ["0","0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0","0"]
  ],
  startNamber:[                      //スタート時の盤面
    ["0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0"]
  ],
  possible:{
    id:[81],
    row:[81],
    colmun:[81],
    block:[81]
  },
  streat:                       //一列の配列
    ["0","0","0","0","0","0","0","0","0","0"
  ],

  start:function(){       //画面をデーター化
    n =0;
    for(let id=11;id<100;id++){
      if(id%10==0) continue;
      key = $("#"+id).text();
      r=chengeId.row(id);
      c=chengeId.colmun(id);
      this.bord [c][r] = key;
      this.startNamber [c][r] = key;
      if(key != 0) continue;
        this.possible.id[n] = id;
        this.possible.colmun[n] = c;
        this.possible.row[n] = r;
        this.possible.block[n] = chengeId.block(id);
        n++;
    }
  },
  input:function(id,key){       //画面をデーター化
    this.bord [chengeId.colmun(id)][chengeId.row(id)] = key;
  },

  check:function(){             //重複確認
    for(let i=1;i<10;i++){
      $("#r"+i).removeClass();
      $("#c"+i).removeClass();
      $("#block"+i).removeClass();
      if(cheak.row(i))    $("#c"+i).addClass("ok");
      if(cheak.colmun(i)) $("#r"+i).addClass("ok");
      if(cheak.block(i))  $("#block"+i).addClass("ok");

    }
    // if(cheak.gemeClear()){  $("main").addClass("end")}
  }
}
const cheak={
  oneCellAll:function(r,c,block,zero){             //重複確認
    if(this.row(r,zero)&&this.colmun(c,zero)&&this.block(block,zero)){
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

  row:function(r,zero){       //rowの確認
    this.rowOfStreat(r);
    return this.streat(zero);
  },
  colmun:function(c,zero){       //colmunの確認
    this.colmunOfStreat(c);
    return this.streat(zero);
  },
  block:function(b,zero){       //blockの確認
    this.blockOfStreat(b);
    return this.streat(zero);
  },
  rowOfStreat:function(r){    //row要素を一列の配列に
    for(let i=1;i<10;i++){
      display.streat[i] = display.bord[i][r];
    }
  },
  colmunOfStreat:function(c){    //colmun要素を一列の配列に
    for(let i=1;i<10;i++){
      display.streat[i] = display.bord[c][i];
    }
  },
  blockOfStreat:function(b){    //block要素を一列の配列に
    for(let i=1;i<10;i++){
      stR = ((b-1)%3)*3;            //ブロックの左端基準
      stC = Math.floor((b-1)/3)*3;  //ブロックの上端基準
      mvR = (i-1)%3+1;              //ブロック内移動右
      mvC = Math.floor((i+2)/3);    //ブロック内移動下
      display.streat[i] = display.bord[stC+mvC][stR+mvR];
    }
  },

  streat:function(zero){    
    for(let i=1;i<10;i++){
      for(let j=i+1;j<10;j++){
        if(display.streat[i] == 0){
          if(zero) break;
          else return false;
        } 
        if(display.streat[i] == display.streat[j]) return false;
      }
    }
    return true;
  },

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
        $("#"+id).text("");
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
    return  Math.floor((r-1)/3)+
            Math.floor((c-1)/3)*3+
            1;
  },
  


}