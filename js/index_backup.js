var taskT=document.getElementById('task_title');
var taskD=document.getElementById('task_detail');
var hovertime;
taskT.onmouseover=function () {
    hovertime=setTimeout( "taskD.style.display='block'",500)
};

taskT.onmouseout=function () { clearTimeout(hovertime); taskD.style.display='none'; };



var taskButton=document.getElementById('Task');
taskButton.onclick=function (ev) {
    var  taskL=document.getElementById('task_large');
    taskL.style.display='none';
    var taskS=document.getElementById('task_small');
    var taskI=document.getElementById('task_info');
    taskS.style.display='block';
    taskI.style.display='block';
};


var  GroupButton=document.getElementById('GroupInfo');
var  GroupDiv=document.getElementById('GroupInfoDiv');
GroupButton.onclick=function (ev) {
    var  taskL=document.getElementById('task_large');
    taskL.style.display='none';
    GroupDiv.style.display='block';

};

