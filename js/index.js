window.onload=function(){
	var as=getClass("banner-img")[0].getElementsByTagName('a');
	
	//alert(as.length);
	var lis=getClass("btn")[0].getElementsByTagName("li");
	//alert(lis.length);
	var index=0;
	var t=setInterval(wheel,2000);
	function wheel(){
		index++;
		//console.log(index)
		if(index>as.length-1){
          index=0;

		}
		for(var i=0;i<as.length;i++){
			//console.log(i)
			animate(as[i],{opacity:0})
			lis[i].style.background=
			"rgba(0,0,0,0.4)";
		}
		animate(as[index],{opacity:1})
		lis[index].style.background="rgba(255,255,255,0.4)";

	}
	 for (var i = 0; i < lis.length; i++) {
	 	lis[i].index=i;
	 	lis[i].onclick=function(){
         //console.log(this.index)
         for (var j = 0; j < as.length; j++) {
         	animate(as[j],{opacity:0})
         	lis[j].style.background="rgba(0,0,0,0.4)"
         };
            animate(as[this.index],{opacity:1})
            this.style.background="rgba(255,255,255,0.4)";
            index=this.index;
	 	}
	 };

	 var banners=getClass("banner")[0];

	 //console.log(banners);
	 banners.onmouseover=function(){
       clearInterval(t);
	 };

     banners.onmouseout=function(){
        t=setInterval(wheel,2000);
	 }
	 var LeftBtn=getClass("btnLeft")[0];
	 //console.log(LeftBtn);
	 var RightBtn=getClass("btnRight")[0];
	 //console.log(RightBtn);
	 RightBtn.onclick=function(){
	 	wheel();
	 }
     LeftBtn.onclick=function(){
     	index--;
		//console.log(index)
		if(index==-1){
          index=as.length-1;

		}
		for(var i=0;i<as.length;i++){
			
			animate(as[i],{opacity:0})
			lis[i].style.background=
			"rgba(0,0,0,0.4)";
		}
		animate(as[index],{opacity:1})
		lis[index].style.background="rgba(255,255,255,0.4)";
     }


     //搭配  选项卡效果
     var links=getClass("dp-r");
     //console.log(links.length)
     var divs=getClass("zhineng");
     //console.log(divs.length)
     var ass,dss;
     for (var i = 0; i < links.length; i++) {
           ass=links[i].getElementsByTagName("a");
           dss=divs[i].getElementsByClassName("zhineng-right");
          // console.log(as.length)
           tab(ass,dss)
     };

     function tab(btns,imgs){

    for (var i = 0; i < btns.length; i++) {
            btns[i].index=i;
            btns[i].onmouseover=function(){
                //console.log(this.index);
                  for (var j = 0; j < imgs.length; j++) {
                      imgs[j].style.display="none";
                      btns[j].style.color="#424242";
                      btns[j].style.borderBottom="0";

                  };
                       imgs[this.index].style.display="block";
                       this.style.color="#fe6731";
                       this.style.borderBottom="2px solid #fe6731"
            }
     }
     
    };	
      //小米明星单品
    var Mx1=getClass("mx-1")[0];
    //console.log(Mx1);
    var Mx=getClass("mx",Mx1);
    //console.log(Mx.length);
    
    var wMx=parseInt(getStyle(Mx[0],"width"))
    //console.log(wMx);
    var dpBtn=getClass("danpin1")[0].getElementsByTagName("a");
    //console.log(dpBtn);

    var index1=0;
    var t1=setInterval(yidong,4000)
    var flag=true;
    function yidong(){
      index1++;
      //console.log(index1)
      if(index1>Mx.length-1){
        index1=0;
      }
      for (var i = 0; i < dpBtn.length; i++) {
         dpBtn[i].style.color="";//176
       }
       if(index1==0){
          dpBtn[0].style.color="#e0e0e0";
       }else if(index1==Mx.length-1){
         dpBtn[1].style.color="#e0e0e0";
         }; 
        //dpBtn[index1].style.color="#b0b0b0";
        animate(Mx1,{marginLeft:-index1*wMx})
    }
    var danpin1=getClass("danpin1")[0]
    //console.log(danpin1)
    var danpin2=getClass("danpin2",danpin1)[0];
    //console.log(danpin2);
    var danpin3=getClass("danpin3",danpin1)[0];
   // console.log(danpin3);
   danpin3.onclick=function(){
        index1++;
       if(index1==Mx.length){
         index1=Mx.length-1;     
       }
      
       if(index1==0){
          dpBtn[1].style.color="#b0b0b0";
       }else if(index1==Mx.length-1){
         dpBtn[0].style.color="#b0b0b0";
       }; 
       
       animate(Mx1,{marginLeft:-index1*wMx})
   }
    danpin2.onclick=function(){
        index1--;
       if(index1==-1){
         index1=0;
       }
       animate(Mx1,{marginLeft:-index1*wMx})
       
   }
  danpin1.onmouseover=function(){
      clearInterval(t1)  
  }
  danpin1.onmouseout=function(){
      t1=setInterval(yidong,2000)
  }

 //为你推荐
// var tui1=getClass("tui1")[0];
//   //console.log(tui1)
// var tui2=getClass("tui2",tui1);
//   //console.log(tui2)
// var tui3=getClass("tui3",tui1);
//   //console.log(tui3)
// var tuijian=getClass("tuijian")[0];
// console.log(tuijian);
// var tj=getClass("tj",tuijian);
// //console.log(tj.length) 2
// var Wtj=parseInt(getStyle(tj[0],"width"));
// //console.log(Wtj)
// var bbb=0;
// console.dir(tui3)
// tui3.onclick=function(){
//   bbb++;
//   console.log(bbb)
//   if(bbb==tj.length){
//       bbb=tj.length-1;
//   }
//   for (var i = 0; i < tui1.length; i++){
//     tui1[i].style.color="#333";
//   };
//   tui1[bbb].style.color="#ff6700";
//    animate(tuijian,{marginLeft:-bbb*Wtj})
// }

// tui2.onclick=function(){
//   bbb--;
//   if(bbb==-1){
//       bbb=tj.length-1;
//   }
//    animate(tuijian,{marginLeft:-bbb*Wtj})
// }



//按需加载
var ax=$(".ax");
var windowH=document.documentElement.clientHeight;
//console.log(ax.length);
var tops=[];
for (var i = 0; i < ax.length; i++) {
  tops.push(ax[i].offsetTop);
};
//console.log(tops);
window.onscroll=function(){
  var st=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
  //console.log(st)
   for (var i = 0; i < tops.length; i++) { 
   var imgS=$("img",ax[i]);
          //console.log(imgS); 
  if(st+windowH>=tops[i]){  
      for (var j = 0; j < imgS.length; j++){
         imgS[j].src=imgS[j].getAttribute("asrc");
      };
  }
}; 
};
window.onscroll();
//


//内容专区
var nrBox=$(".nr-box");
//console.log(nrBox);
var nrNr=$(".nr-nr",nrBox[0]) ;
//console.log(nrNr);
var nrNrW=parseInt(getStyle(nrNr[0],"width"));
//console.log(nrNrW);
// var btn2=$(".btn2")[0];
// //console.log(btn2);
// var btn2Left=$(".btn2-Left",btn2)[0];
// //console.log(btn2Left);
// var btn2Right=$(".btn2-Right",btn2)[0];
// //console.log(btn2Right);
var nrBtnBox=$(".btn1");
//console.log(nrBtnBox)
//var nrBtns=$("li",nrBtnBox);
//console.log(nrBtns);
var nrbox=$(".nr1");
var nIndex=0;
var btn2Right,btn2Left,nrBtns;

for (var i = 0; i < nrbox.length; i++) {
  btn2Right=$(".btn2-Right",nrbox[i])[0];
  console.log(btn2Right);
   btn2Left=$(".btn2-Left",nrbox[i])[0];
  console.log(btn2Left);
   nrBtns=$("li",nrBtnBox[i]);
console.log(nrBtns);
  console.log(nrbox[i]);
 console.log(nrBox[i])
   
   nrWheel(btn2Right,btn2Left,nrBtns,nrbox[i],nrBox[i])


};
function nrWheel(btn2Right,btn2Left,nrBtns,nrbox,nrBox){
   //右按钮单击
btn2Right.onclick=function(){
  nrmove(1);
};
//左按钮单击
btn2Left.onclick=function(){
  nrmove(2);
}
function nrmove(type){
  if(type=="1"){
      nIndex++;
    if(nIndex>nrNr.length-1){
      nIndex=nrNr.length-1
    };
  }else{
      nIndex--;
    if(nIndex==-1){
      nIndex=0;
    };
  };
  for (var i = 0; i <nrBtns.length; i++) {
   nrBtns[i].className="";
  };
  
  animate(nrBox,{marginLeft:-nIndex*nrNrW},300);
  nrBtns[nIndex].className="btn1-1";

};
//点击相应按钮出现该图  选项卡
for (var i = 0; i < nrBtns.length; i++) {
  nrBtns[i].nr=i;
  nrBtns[i].onclick=function(){
  //console.log(this.nr);
  for (var i = 0; i < nrBtns.length; i++) {
    nrBtns[i].className="";
  };
  animate(nrBox,{marginLeft:-this.nr*nrNrW},300);
  this.className="btn1-1";
  }
};
//鼠标移上 左右按钮出现
nrbox.onmouseover=function(){
    btn2Left.style.display="block";
    btn2Right.style.display="block";
};
//鼠标离开  左右按钮消失
nrbox.onmouseout=function(){
    btn2Left.style.display="none";
    btn2Right.style.display="none";
};

}





}