
var set=document.getElementById('homepage');
var log=document.getElementById('logout');
var setC=set.onmouseover=function () {  log.style.display='block'; };
set.onmouseout=function () {  log.style.display='none'; };
log.onmouseover=function (ev) { log.style.display='block'; };
log.onmouseout=function () {  log.style.display='none'; };