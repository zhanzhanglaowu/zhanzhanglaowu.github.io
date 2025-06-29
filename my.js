window.onload = function() {
	//$("#sousuo li").click(function() {
		//$(this).siblings('li').removeClass('active');
		//$(this).addClass('active');
	//});
	shouye();
	//denglu();
	//zhuce();
	huiche();
}

function huiche(){
$("#huiche").keydown(function () {
    var theEvent = window.event || event;
    var code = theEvent.keyCode || theEvent.which;
    if (code == 13) {
        xuanze();
    }
});
}

function shouye(){
	var xx = document.getElementById("sousuo");
	var d = xx.getElementsByTagName('li');
	
	for(var i = 0; i < d.length; i++) {
		d[i].index = i;
		d[i].addEventListener('click', function() {
			qiehuan(this);
		})
	}
	var xx2 = document.getElementById("sousuo2");
	var d2 = xx2.getElementsByTagName('li');
	
	for(var i = 0; i < d2.length; i++) {
		d2[i].index = i;
		d2[i].addEventListener('click', function() {
			qiehuan2(this);
		})
	}
	//------------------站长平台----------------
	var xx3 = document.getElementById("pingtai");
	var d3 = xx3.getElementsByTagName('li');
	
	for(var i = 0; i < d3.length; i++) {
		d3[i].index = i;
		d3[i].addEventListener('click', function() {
			qiehuan3(this);
		})
	}
	//------------------自媒体平台----------------
	var xx3 = document.getElementById("pingtai2");
	var d3 = xx3.getElementsByTagName('li');
	
	for(var i = 0; i < d3.length; i++) {
		d3[i].index = i;
		d3[i].addEventListener('click', function() {
			qiehuan4(this);
		})
	}
}

function qiehuan(self){   
   var p = self.parentNode.children;
    for (var i = 0, pl = p.length; i < pl; i++) {
        p[i].classList.remove("active");
    }
    self.classList.add("active");
	//var img = document.getElementById("img");
	var mm=document.getElementById("mm");
	var bb = self.getElementsByTagName('a');
	var cc = bb[0].innerText;
	if(cc == "百度") {
		//img.src = "images/baidu.jpg";
		mm.innerHTML="百度搜索";
	}
	if(cc == "谷歌") {
		//img.src = "images/baidu.jpg";
		mm.innerHTML="谷歌搜索";
	}
	if(cc == "必应") {
		//img.src = "images/bing.jpg";
		mm.innerHTML="必应搜索";
	}
	if(cc == "360") {
		//img.src = "images/360.jpg";
		mm.innerHTML="360搜索";
	}
	if(cc == "搜狗") {
		//img.src = "images/sogou.jpg";
		mm.innerHTML="搜狗搜索";
	}
	if(cc == "头条") {
		//img.src = "images/toutiao.jpg";
		mm.innerHTML="头条搜索";
	}
	if(cc == "神马") {
		//img.src = "images/shenma.jpg";
		mm.innerHTML="神马搜索";
	}
	if(cc == "谷歌") {
		//img.src = "images/google.jpg";
		mm.innerHTML="谷歌搜索";
	}
}

function qiehuan2(self){   
   var p = self.parentNode.children;
    for (var i = 0, pl = p.length; i < pl; i++) {
        p[i].classList.remove("active");
    }
    self.classList.add("active");
    xuanze2();
}

function qiehuan3(self){   
   var p = self.parentNode.children;
    for (var i = 0, pl = p.length; i < pl; i++) {
        p[i].classList.remove("active");
    }
    self.classList.add("active");
    xuanze3();
}

function qiehuan4(self){   
   var p = self.parentNode.children;
    for (var i = 0, pl = p.length; i < pl; i++) {
        p[i].classList.remove("active");
    }
    self.classList.add("active");
    xuanze4();
}

function xuanze() {
	var kk = document.getElementById("sousuo");
	var aa = kk.getElementsByClassName("active");
	var bb = aa[0].getElementsByTagName('a');
	var cc = bb[0].innerText;
	//alert(cc);
	var hh = document.getElementById("neirong");
	var haha = hh.value;
	haha = haha.replace(/%/g, '%25');
        haha = haha.replace(/\+/g, '%2B');
	haha = haha.replace(/#/g, '%23');
	//alert(haha);
	if(cc == "百度") {
		url = "https://www.baidu.com/s?&wd=" + haha;
		window.open(url, "_blank");
	}
	if(cc == "谷歌") {
		url = "https://www.google.com/search?q=" + haha;
		window.open(url, "_blank");
	}
	if(cc == "必应") {
		url = "https://www.bing.com/search?q=" + haha;
		window.open(url, "_blank");
	}
	if(cc == "搜狗") {
		url = "https://www.sogou.com/web?query=" + haha;
		window.open(url, "_blank");
	}
	if(cc == "360") {
		url = "https://www.so.com/s?q=" + haha;
		window.open(url, "_blank");
	}
	if(cc == "头条") {
		url = "https://so.toutiao.com/search?dvpf=pc&source=input&keyword=" + haha;
		window.open(url, "_blank");
	}
	if(cc == "神马") {
		url = "https://m.sm.cn/s?q=" + haha;
		window.open(url, "_blank");
	}
}

function xuanze2() {
	var kk = document.getElementById("sousuo2");
	var aa = kk.getElementsByClassName("active");
	var bb = aa[0].getElementsByTagName('a');
	var cc = bb[0].innerText;
	//alert(cc);
	var hh = document.getElementById("neirong");
	var haha = hh.value;
	//alert(haha);
	if(cc == "站长之家") {
		url = "https://seo.chinaz.com/" + haha;
		window.open(url, "_blank");
	}
	if(cc == "5118") {
		url = "https://seo.5118.com/" + haha;
		window.open(url, "_blank");
	}
	if(cc == "爱站网") {
		url = "https://www.aizhan.com/cha/" + haha;
		window.open(url, "_blank");
	}
	if(cc == "查反链") {
		url = "https://outlink.chinaz.com/" + haha;
		window.open(url, "_blank");
	}
	if(cc == "查友链") {
		url = "https://link.chinaz.com/" + haha;
		window.open(url, "_blank");
	}
}

function xuanze3() {
	var kk = document.getElementById("pingtai");
	var aa = kk.getElementsByClassName("active");
	var bb = aa[0].getElementsByTagName('a');
	var cc = bb[0].innerText;
	//alert(cc);
	if(cc == "百度站长平台") {
		url = "https://ziyuan.baidu.com/linksubmit/url" ;
		window.open(url, "_blank");
	}
	if(cc == "必应站长平台") {
		url = "http://www.bing.com/toolbox/webmaster/" ;
		window.open(url, "_blank");
	}
	if(cc == "搜狗站长平台") {
		url = "https://zhanzhang.sogou.com/" ;
		window.open(url, "_blank");
	}
	if(cc == "360站长平台") {
		url = "https://zhanzhang.so.com/";
		window.open(url, "_blank");
	}
	if(cc == "头条站长平台") {
		url = "https://zhanzhang.toutiao.com/";
		window.open(url, "_blank");
	}
	if(cc == "神马站长平台") {
		url = "https://zhanzhang.sm.cn/";
		window.open(url, "_blank");
	}
}

function xuanze4() {
	var kk = document.getElementById("pingtai2");
	var aa = kk.getElementsByClassName("active");
	var bb = aa[0].getElementsByTagName('a');
	var cc = bb[0].innerText;
	//alert(cc);
	if(cc == "头条号") {
		url = "https://mp.toutiao.com/profile_v4/index" ;
		window.open(url, "_blank");
	}
	if(cc == "百家号") {
		url = "https://baijiahao.baidu.com/builder/rc/home" ;
		window.open(url, "_blank");
	}
	if(cc == "搜狐号") {
		url = "https://mp.sohu.com/mpfe/v3/login" ;
		window.open(url, "_blank");
	}
	if(cc == "大鱼号") {
		url = "https://mp.dayu.com/";
		window.open(url, "_blank");
	}
	if(cc == "简书") {
		url = "https://www.jianshu.com/";
		window.open(url, "_blank");
	}
	if(cc == "博客园") {
		url = "https://www.cnblogs.com/";
		window.open(url, "_blank");
	}
	if(cc == "CSDN") {
		url = "https://www.csdn.net/";
		window.open(url, "_blank");
	}
}

function denglu() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("denglu").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", "gg/denglu.html", true);
	xmlhttp.send();
}

function zhuce() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("zhuce").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", "gg/zhuce.html", true);
	xmlhttp.send();
}
