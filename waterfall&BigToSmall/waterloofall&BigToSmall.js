/**
 * Created by xin on 2016-01-23.
 */


window.onload=function(){

    var listBtn=document.getElementById("btn1");
    var carBtn=document.getElementById("btn2");
    var waterfallBtn=document.getElementById("btn3");
    var imgs=document.getElementsByTagName("img");
    listBtn.onclick=function (){
        listBtn.className = "btn_big_off";
        carBtn.className="btn_small_on";
        for(var i=0;i<imgs.length;i++)
        {
            imgs[i].src="./pic/"+(i+1)+"_s.jpg";
            imgs[i].parentNode.className="picBox small ";
        }
        console.log("to small");
    }

    carBtn.onclick=function(){
        listBtn.className="btn_big_on";
        carBtn.className="btn_small_off";
        for(var i=0;i<imgs.length;i++)
        {
            imgs[i].src="./pic/"+(i+1)+".jpg";
            imgs[i].parentNode.className="picBox";
        }
        console.log("to big");
    }

    waterfallBtn.onclick=function(){

        waterfallBtn.className="waterfall_on";

    }

}

function waterfall(parent,box) {
    var oParent = document.getElementById(parent);
    var oChild = document.getClassObj(oParent, box);
    var Boxw = oChild[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth / Boxw);
    oParent.style.cssText = 'width:' + Boxw * num + 'px:margin:0 auto';

    var boxHarr = [];
    for (var i = 0; i < oChild.length; i++) {
        var boxH = oChild[i].offsetHeight;
        if (i < num) {
            boxHarr[i] = boxH;
        }
        else {
            var minH = Math.min.apply(null, boxHarr);
            var minHIndex = getminHIndex(boxHarr, minH);
            oChild[i].style.position = "absolute";
            oChild[i].style.top = minH + 'px';
            oChild[i].style.left = oChild[i].offsetLeft + "px";
            boxHarr[minHIndex] += oChild[i].offsetHeight;
        }

    }
}


function getClassObj(parent,className) {
    var obj = parent.getElementsByTagName('*'); // get all subset from parent
    var pinS = [];                              // an array to collect all children element
    for (var i = 0; i < obj.length; i++) {      //traverse all children,push into array
        if (obj[i].className == className) {
            pinS.push(obj[i]);
        }
    }
    ;
    return pinS;
}

function getminHIndex(arr,minH){
    for(var i in arr){
        if(arr[i]==minH){
            return i;
        }
    }
}

//dynamic loading__ when moving down, the page will load new data
function checkscrollside(){
    var oParent=document.getElementById('main');
    var aPin=getClassObj(oParent,'pin');
    var lastPinH=aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var documentH=document.documentElement.clientHeight;
    return (lastPinH<scrollTop+documentH)?true:false;
}