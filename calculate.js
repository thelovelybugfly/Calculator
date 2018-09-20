function clickbutton(str)
{
    var input=document.getElementById("middle");
    input.innerHTML=input.innerHTML+str;
}
function  calc(){
    var input =document.getElementById("middle");
    var result=eval(input.innerHTML);
    input.innerHTML=result;
}
function  delall() {
    var input=document.getElementById("middle");
    input.innerHTML="";

}
function back() {
    var  input=document.getElementById("middle");
    var old=input.innerHTML;
    input.innerHTML=old.substr(0,old.length-1);
}
