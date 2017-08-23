var nowdate=new Date();
var startdate=new Date("8 23,2017 15:50:00");
var finishdate=new Date("8 30,2017 15:27:00");
if(startdate>nowdate){
    alert("未到")
}
if(finishdate<nowdate){
    alert("结束")
}
