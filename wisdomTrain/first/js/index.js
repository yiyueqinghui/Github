//		轮播初始化
$(document).ready(function() {
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false,
		slideshowSpeed: 6000
	});
});



 var arr1=[
  
   {"img":"listimages.gif",
   "info":"1甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"1甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"1甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"1甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"1甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"1甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"1甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"1甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  }
  ]
var arr2=[
  
   {"img":"listimages.gif",
   "info":"2甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"2甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"2甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"2甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"2甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"2甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"2甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"2甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  }
  ]
 var arr3=[
  
   {"img":"listimages.gif",
   "info":"3甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"3甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"3甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"3甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"3甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"3甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"3甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"3甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  }
  ]
var arr4=[
  
   {"img":"listimages.gif",
   "info":"4甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"4甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"4甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"4甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"4甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"4甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"4甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  },
  {
   "img":"listimages.gif",
   "info":"4甲骨文和谷歌Java版权纠纷将在4月份裁决",
   "day":"2012-03-15"
  }
  ]
var classStyle=[
		{
			"info": "开发语言系列",
			"img": "img/8.gif"
		}, {
			"info": "数据库开发与管理系列",
			"img": "img/8.gif"
		}, {
			"info": "Redhat",
			"img": "img/8.gif"
		}, {
			"info": "Cisco",
			"img": "img/8.gif"
		}, {
			"info": "ITIL",
			"img": "img/8.gif"
		}, {
			"info": "vMware",
			"img": "img/8.gif"
		}, {
			"info": "CIW",
			"img": "img/8.gif"
		}, {
			"info": "CompTIA",
			"img": "img/8.gif"
		}, {
			"info": "Siemens/SAP",
			"img": "img/8.gif"
		}, {
			"info": "Slftware Development",
			"img": "img/8.gif"
		}, {
			"info": "IT Management",
			"img": "img/8.gif"
		}
	]

var	classStyle=[
		{
			"info": "开发语言系列",
			"img": "img/8.gif"
		}, {
			"info": "数据库开发与管理系列",
			"img": "img/8.gif"
		}, {
			"info": "Redhat",
			"img": "img/8.gif"
		}, {
			"info": "Cisco",
			"img": "img/8.gif"
		}, {
			"info": "ITIL",
			"img": "img/8.gif"
		}, {
			"info": "vMware",
			"img": "img/8.gif"
		}, {
			"info": "CIW",
			"img": "img/8.gif"
		}, {
			"info": "CompTIA",
			"img": "img/8.gif"
		}, {
			"info": "Siemens/SAP",
			"img": "img/8.gif"
		}, {
			"info": "Slftware Development",
			"img": "img/8.gif"
		}, {
			"info": "IT Management",
			"img": "img/8.gif"
		}
	]
var	skillClass=[

		{
			"img": "listimages.gif",
			"info": "1甲骨文和谷歌Java版权纠纷将在4月份裁决",
			"day": "2012-03-15"
		}, {
			"img": "listimages.gif",
			"info": "1甲骨文和谷歌Java版权纠纷将在4月份裁决",
			"day": "2012-03-15"
		}, {
			"img": "listimages.gif",
			"info": "1甲骨文和谷歌Java版权纠纷将在4月份裁决",
			"day": "2012-03-15"
		}, {
			"img": "listimages.gif",
			"info": "1甲骨文和谷歌Java版权纠纷将在4月份裁决",
			"day": "2012-03-15"
		}, {
			"img": "listimages.gif",
			"info": "1甲骨文和谷歌Java版权纠纷将在4月份裁决",
			"day": "2012-03-15"
		}, {
			"img": "listimages.gif",
			"info": "1甲骨文和谷歌Java版权纠纷将在4月份裁决",
			"day": "2012-03-15"
		}, {
			"img": "listimages.gif",
			"info": "1甲骨文和谷歌Java版权纠纷将在4月份裁决",
			"day": "2012-03-15"
		}, {
			"img": "listimages.gif",
			"info": "1甲骨文和谷歌Java版权纠纷将在4月份裁决",
			"day": "2012-03-15"
		}
	]
var	hotclass=[
		{
			"img": "listimages.gif",
			"info": "甲骨文和谷裁决java版权"
		}, {
			"img": "listimages.gif",
			"info": "甲骨文和谷裁决java版权"
		}, {
			"img": "listimages.gif",
			"info": "甲骨文和谷裁决java版权"
		}, {
			"img": "listimages.gif",
			"info": "甲骨文和谷裁决java版权"
		}, {
			"img": "listimages.gif",
			"info": "甲骨文和谷裁决java版权"
		}, {
			"img": "listimages.gif",
			"info": "甲骨文和谷裁决java版权"
		}, {
			"img": "listimages.gif",
			"info": "甲骨文和谷裁决java版权"
		}, {
			"img": "listimages.gif",
			"info": "甲骨文和谷裁决java版权"
		}
	]
var	hotTeacher=[
	    {
	     "img":"laoshi3.gif",
	     "name":"陈楠",
	     "info":"智盟培训中心高级c++讲师,十年c++项授课经验"
	    },{
	     "img":"laoshi2.jpg",
	     "name":"杨学岗",
	     "info":"智盟培训中心高级c++讲师,十年c++项授课经验"
	    },{
	     "img":"laoshi1.jpg",
	     "name":"李振",
	     "info":"智盟培训中心高级智盟培训中心高级c++讲师,十年c++项授课经验"
	    }
	]


//方法一(改html样式的内容)
//课程体系数据获取(必须有相应的结构)  (每个的样式都已存在,获取数据,进行填充即可)
//$.get("fonts/data.json",{},function(data){
	for(var i=0;i<classStyle.length;i++){
//		var li = document.createElement("li");
	  $("#data01 li").eq(i).find('img').attr("src",classStyle[i].img);
	  $("#data01 li").eq(i).find('a').html(classStyle[i].info);
		
	}
	
//},'json')

//方法二(创建html样式并添加内容)
//最新开课获取数据
	for(var i=0;i<arr1.length;i++){
	    var p = '<p><img src="img/'+arr1[i].img+'"/>\
	            <a href="">'+arr1[i].info+'</a>\
			    <span>'+arr1[i].day+'</span>\
	         </p>'
	    $("#container1").append(p);
		}

	for(var i=0;i<arr2.length;i++){
	    var p = '<p><img src="img/'+arr2[i].img+'"/>\
	            <a href="">'+arr2[i].info+'</a>\
			    <span>'+arr2[i].day+'</span>\
	         </p>'
	    $("#container2").append(p);
		}

	for(var i=0;i<arr3.length;i++){
	    var p = '<p><img src="img/'+arr3[i].img+'"/>\
	            <a href="">'+arr3[i].info+'</a>\
			    <span>'+arr3[i].day+'</span>\
	         </p>'
	    $("#container3").append(p);
		}

	for(var i=0;i<arr4.length;i++){
	    var p = '<p><img src="img/'+arr4[i].img+'"/>\
	            <a href="">'+arr4[i].info+'</a>\
			    <span>'+arr4[i].day+'</span>\
	         </p>'
	    $("#container4").append(p);
		}


// tab选项卡切换
function showTab(tabid) {
	var tab = document.getElementById('tab');
	var tabs = tab.children;
	var father = document.getElementById("container");
	//         console.log(father);
	var containers = father.children;
	for(var i = 0; i < containers.length; i++) {
		if(containers[i].getAttribute("id") == tabid) {
			containers[i].style.display = "block";
			tabs[i].style.background = "#303136";
			tabs[i].style.color = "white";

		} else {
			containers[i].style.display = "none";
			tabs[i].style.background = "#D8D8D8";
			tabs[i].style.color = "";
		}
	}
}

//技术讲堂
   for(var i=0;i<skillClass.length;i++){
   	var li = document.createElement("li");
   	li.innerHTML= '<p>\
   	                    <img src="img/'+skillClass[i].img+'" alt=""/>\
   	                    <a href="">'+skillClass[i].info+'</a>\
					    <span>'+skillClass[i].day+'</span>\
		    	    </p>';
//  console.log(li);
    $("#course21").append(li);
   }
    

//热门课程
	for(var i=0;i<hotclass.length;i++){
		var li = '<li>\
					  <img src="img/'+hotclass[i].img+'" alt="" />\
					  <a href="">'+hotclass[i].info+'</a>\
		         </li>'
		$(".top-class ul").append(li);
	}

//热门老师(方法一  创建对象,添加类名,添加内容)
	for(var i=0;i<hotTeacher.length;i++){
		var li = document.createElement("li");
		li.className = "clearfix";
		li.innerHTML = '<div class="lf">\
		                    <img src="img/'+hotTeacher[i].img+'" alt=""/>\
		                </div>\
					    <div class="rf">\
					        <h4>'+hotTeacher[i].name+'</h4>\
					        <p>'+hotTeacher[i].info+'</p>\
					     </div>'
        console.log(li);
       $(".top-teacher ul").append(li);
	}
//热门老师(方法二 直接创建一个变量包含一切标签)
//	for(var i=0;i<hotTeacher.length;i++){
//		var li ='<li class="clearfix"><div class="lf">\
//		                    <img src="img/'+hotTeacher[i].img+'" alt=""/>\
//		                </div>\
//					    <div class="rf">\
//					        <h4>'+hotTeacher[i].name+'</h4>\
//					        <p>'+hotTeacher[i].info+'</p>\
//					     </div></li>'
////      console.log(li);
//     $(".top-teacher ul").append(li);
//	}


//广告

   function getStyle(obj,name){
   	if(window.getComputedStyle){
 		return window.getComputedStyle(obj)[name];   //不兼容IE 
   	}else{
   		return obj.currentStyle[name];             //  兼容IE
   	}
   };
   var ad = document.getElementById("ad");
   var close = document.getElementById("close");
   var h =parseInt(getStyle(ad,"height")) ;
   var h2 = window.innerHeight - ad.clientHeight;
   var speed = 10;
   var btn_bottom = -h; 
   var t1 = setInterval(function() {
     btn_bottom+=speed;
     ad.style.bottom = btn_bottom+"px";
     if(btn_bottom>=(h2/2)){
     	clearInterval(t1);
     }
    }, 100);
    
    close.onclick = function(){
    	ad.style.display = "none";
    }

