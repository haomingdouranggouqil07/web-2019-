
var lunbo = document.getElementById("lunbo");//轮播图的ul
var lunboList = lunbo.getElementsByTagName("li");
var lunboBtn = document.getElementById("change-btn").getElementsByTagName("span");//轮播图的点
var nowLeft = 0;//运动距离
var listLength = lunboList.length;
var lunboIndex = 0;//第几张图片
var lunboIndexNew = 0;

lunbo.innerHTML += lunbo.innerHTML;


// 计算折返点
var turnBackPoint = lunboList[listLength].offsetLeft;


//轮播动画
// function move(){
//     nowLeft -= 10;
//     if (nowLeft <= -turnBackPoint){
//         nowLeft = 0;
//     }
//     lunbo.style.left = nowLeft + "px";
// }
function move(){
    var timer = setInterval(function(){
        nowLeft -= 40;
        if (nowLeft <= -turnBackPoint){
            nowLeft = 0;
        }
        lunbo.style.left = nowLeft + "px";
        lunboIndexNew = parseInt(-nowLeft/440);
        if(lunboIndexNew != lunboIndex){
            lunboIndex = lunboIndexNew;
            for(var i = 0; i <listLength; i++){
                lunboBtn[i].className = "";
            }
            lunboBtn[lunboIndex].className += "change-btn-active";
            clearInterval(timer);
        }
    }, 100)
}
timerCtrol = setInterval(function(){ move();}, 5000);

for (var i = 0; i<listLength ; i++){
    lunboBtn[i].index = i;

    // // 轮播btn控制
    lunboBtn[i].onclick = function(){
        clearInterval(timerCtrol);
        for(var m = 0; m <listLength; m++){
            lunboBtn[m].className = "";
        }
        this.className += " change-btn-active";
        // // lunboBtn[lunboList[i].index].className += " change-btn-active";
        nowLeft = -440 * this.index;
        lunboIndex = this.index;
        lunbo.style.left = nowLeft + "px";
        timerCtrol = setInterval(function(){ move();}, 5000);
    }

    // 轮播事件控制
    lunboList[i].onmouseover = function(){
        clearInterval(timerCtrol);
    }
    lunboList[i].onmouseout = function(){
        timerCtrol = setInterval(function(){ move();}, 5000);
    }
}

// var timer = setInterval(function(){move();pause();lunbo.style.left = nowLeft + "px";}, 100);

// //轮播动画
// function move(){
//     nowLeft -= 10;
//     if (nowLeft <= -turnBackPoint){
//         nowLeft = 0;
//     }
// }
// //悬浮暂停
// function pause(){
//     for(var i = 0; i <= listLength; i++){
//         lunboList[i].onmouseover = function(){
//             lunboIndex = parseInt(nowLeft/400);
//             nowLfet = -400*lunboIndex;
//             console.log(1);
//         }
//     console.log(nowLeft);
//     //     // lunboList[i].onmouseout = function(){
//     //     //     timer();
//     //     // }
//     }
// }