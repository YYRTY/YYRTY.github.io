/**
 * 轮播图
 * 
 */
var abanner=document.getElementsByClassName('g-banner-content')[0];
var aLi=abanner.getElementsByTagName('li');
var lef=document.getElementsByClassName('banner-anchors-l')[0];
var rig=document.getElementsByClassName('banner-anchors-r')[0];
var abannerc=document.getElementsByClassName('g-banner-content-t')[0];
var bli=abannerc.getElementsByTagName('li');

var num=0,len=aLi.length,cooltimer=null;

    rig.onclick=function  () {
    	num++
    	if (num===len) {
    		num=0
    	}
    	move(abanner,{
    		marginLeft:-1200*num})
    	//abanner.style.marginLeft=-1200*num+'px'
    	addR()
    }
    
   lef.onclick=function  () {
    	num--
    	if (num===-1) {
    		num=len-1
    	}
    	move(abanner,{
    		marginLeft:-1200*num})
    	//abanner.style.marginLeft=-1200*num+'px'
    	addR()
    }
    

    for (var i=0;i<len;i++) {
    	bli[i].index=i
    	bli[i].onmouseenter=function  () {
    		num=this.index
    		move(abanner,{
    		marginLeft:-1200*num})
    		addR()
    	}
    }
    
    
    cooltimer=setInterval(function  () {
    	num++
    	if (num===len) {
    		num=0
    	}
    	move(abanner,{
    		marginLeft:-1200*num})
    	addR()
    },3000)




    abanner.onmouseenter=function  () {
    	clearInterval(cooltimer)
    }
    abanner.onmouseleave=function  () {
    	cooltimer=setInterval(function  () {
    	num++
    	if (num===len) {
    		num=0
    	}
    	move(abanner,{
    		marginLeft:-1200*num})
    	addR()
    },3000)
    }
    
    
function addR () {
	for (j=0;j<len;j++) {
    		bli[j].className=''
    		}
    		bli[num].className='active'
}

/**
 * 二级菜单
 * 
 */
var  abbanner=document.getElementsByClassName('b-banner')[0]
     cli=abbanner.getElementsByTagName('li')
    
for (h=0;h<cli.length;h++) {
	cli[h].onmousemove=function  () {
		var _bbannerh=this.getElementsByTagName('div')[0];
		 _bbannerh.style.display='block'
	}
	   
	    cli[h].onmouseout=function  () {
	    	var _bbannerh=this.getElementsByTagName('div')[0];
	    	_bbannerh.style.display='none'
	    }
}
    
    //微信
    var   weixin=document.getElementsByClassName('weixinxx')[0];
          imasd=weixin.getElementsByTagName('img')[0];
          weixin.onmouseover=function  () {
          	imasd.style.display='block'
          }
          weixin.onmouseout=function  () {
          	imasd.style.display='none'
          }
    //固定菜单
    var elev=document.getElementsByClassName('elevator')[0]
        mli=elev.getElementsByTagName('li')
        
     for (q=0;q<mli.length;q++) {
	    mli[q].onmouseover=function  () {
	    	var _superb=this.getElementsByTagName('div')[0]
	    	    _iccc=this.getElementsByTagName('i')[0]
	    	    _iccc.style.display='none'
	    	    _superb.style.display='block'
	    }
	     mli[q].onmouseout=function  () {
	    	var _superb=this.getElementsByTagName('div')[0]
	    	    _iccc=this.getElementsByTagName('i')[0]
	    	    _iccc.style.display='block'
	    	    _superb.style.display='none'
	    }
}
     
    //登录界面
    var headert=document.getElementsByClassName('header-ta')[0]
        signins=document.getElementsByClassName('signin')[0]
        backdrop=document.getElementsByClassName('modal-backdrop')[0]
        backdrops=document.getElementsByClassName('modal-backdrops')[0]
        headert.onclick=function  () {
        	signins.style.display='block'
        	backdrop.style.display='block'
        }
        backdrops.onclick=function  () {
        	signins.style.display='none'
        	backdrop.style.display='none'
        }
        //滚动监听
    var elevator=document.getElementsByClassName('elevator')[0]
        superc=document.getElementsByClassName('super-c')[0]
    window.onscroll=function  () {
    	var scrollT=document.documentElement.scrollTop || document.body.scrollTop
    	if (scrollT>600) {
    		elevator.style.display='block'
    	}else{
    		elevator.style.display='none'
    	}
    }   
    
    superc.onclick=function  () {
    	document.documentElement.scrollTop=0
    	document.body.scrollTop=0
    }


    //获取cookie
    var rlll=document.getElementsByClassName('rlll')[0]
        username = rlll.getElementsByTagName('input')[0],
        slll=document.getElementsByClassName('slll')[0]
        password = document.getElementsByTagName('input')[0],
        form = document.getElementsByClassName('rl-modal-a')[0];
        rooo =document.getElementsByClassName('rooo')[0]
        subbb=rooo.getElementsByTagName('input')
        
        var reg=/[a-zA-Z0-9]/g
        username.oninput=function  () {
        	var str=username.value
        	if (!reg.test(str)) {
        		alert('只能输入字母或数字')
        	}
        }
    var paul=document.getElementsByClassName('paul')[0]
     paul.innerText=getCookie('username')
     
        
        
    form.onsubmit = function (e) {
        e.preventDefault()  //
        setCookie('username', username.value, 30)
        setCookie('password', password.value, 30) 
    }
    
     function cools () {
     	window.location.href='http://127.0.0.1:8020/dsa/%E6%85%95%E8%AF%BE.html'
     }
    function looks () {
    	window.location.href='http://127.0.0.1:8020/dsa/shop.html'
    }