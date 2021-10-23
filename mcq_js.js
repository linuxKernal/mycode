var list=["2.)carbohydrate are stored in plants as :","3.)one gram of protein provides energy equivalent to"];
var options=[['cellulose','fructose','starch','glycogen',0],['4 cal','2 cal','3 cal','5 cal',0]];
var turn=0;
var hey_one=0;
function change(){
    var paste=document.getElementById("this_q");

    var o1=document.getElementById("opt_1");
    var o2=document.getElementById("opt_2");
    var o3=document.getElementById("opt_3");
    var o4=document.getElementById("opt_4");
   
   for(var i=0;i<list.length;i++){
       paste.innerHTML=list[turn];
       turn++;
       if (turn==(list.length)){
           turn=turn-turn;
       }
       break;
   }
  for(hey_one;hey_one<hey_one+1;hey_one++){
      o1.innerHTML=options[hey_one][0];
      o2.innerHTML=options[hey_one][1];
      o3.innerHTML=options[hey_one][2];
      o4.innerHTML=options[hey_one][3];
      break;
  }
  if (hey_one==options.length){
      hey_one=hey_one-hey_one;
  }
  else{
      hey_one++;
  }
  window.open("","windows 8",'toolbar=true,contentmenu=false')
}

function config(){
    var data=document.getElementsByName("Q1");
    for(var i=0;i<data.length;i++){
        if(data[i].checked && data[i].value==4){
            alert("correct answer");
            return 0;
        }
    }
   alert("worng answer");
}