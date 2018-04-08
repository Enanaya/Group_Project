// method about show and hide of task_title and task_detail
var taskT=document.getElementById('title');
var taskD=document.getElementById('detail');
var hovertime;
taskT.onmouseover=function () {
    hovertime=setTimeout( "taskD.style.display='block'",500)
};

taskT.onmouseout=function () { clearTimeout(hovertime); taskD.style.display='none'; };



//show and hide of homepage and logout
var homeButton=document.getElementById('homepage');
var log=document.getElementById('logout');
var setC=homeButton.onmouseover=function () {  log.style.display='block'; };
homeButton.onmouseout=function () {  log.style.display='none'; };
log.onmouseover=function (ev) { log.style.display='block'; };
log.onmouseout=function () {  log.style.display='none'; };


var  TaskButton=document.getElementById("Task");
var  TimetableButton=document.getElementById("TimeTable");
var  GroupButton=document.getElementById("GroupInfo");
var Buttons=[TaskButton,TimetableButton,GroupButton];


var TaskL=document.getElementById("task_large");
var  TaskS=document.getElementById("task_small");
var  TaskI=document.getElementById("task_info");
var  TimeD=document.getElementById("timeDiv");
var  DetailD=document.getElementById("detailDiv");
var  GroupD=document.getElementById("GroupInfoDiv");
var Divs=[TaskL,TaskS,TaskI,TimeD,DetailD,GroupD];

function hideDiv(){
    for (var i=0;i<Divs.length;i++){
        Divs[i].style.display='none';
    }
}

function hideButton(){
    for (var i=0;i<Buttons.length;i++){
        Buttons[i].className="";
    }
}

homeButton.onclick=function () {
  hideDiv();
  hideButton();
  TaskL.style.display='block';
};


TaskButton.onclick=function () {
    hideDiv();
    hideButton();
    TaskS.style.display='block';
    TaskI.style.display='block';
    TaskButton.className="border2";
};

taskT.onclick=function () {
    TaskButton.click();
};

TimetableButton.onclick=function () {
    hideDiv();
    hideButton();
    TimeD.style.display='block';
    DetailD.style.display='block';
    TimetableButton.className="border2";
};

GroupButton.onclick=function () {
    hideDiv();
    hideButton();
    GroupD.style.display='block';
    GroupButton.className="border2";
};