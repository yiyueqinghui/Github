var arr1=[
   {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   },
    {"img":"img/listimages.gif",
   "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决",
    "day":"2012-03-15"
   }
]
var hotArticle=[
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷歌Java版权纠纷将在4月份裁决"
     }
]
var  hotClass=[
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     }
]
var  hotNews=[
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     },
     {"img":"img/listimages.gif",
     "info":"甲骨文和谷在4月份裁决"
     }
]

//苹果动态资讯的获取
	for(var i=0;i<arr1.length;i++){
		var li ='<li><img src="'+arr1[i].img+'" />\
	    			<a href="">'+arr1[i].info+'</a>\
	    			<label>'+arr1[i].day+'</label>\
	    		</li>' 
	   $('.content-left-one ul').append(li);
	}

//热门文章的获取
	for(var i=0;i<hotArticle.length;i++){
		var li ='<li><img src="'+hotArticle[i].img+'" />\
	    			<a href="">'+hotArticle[i].info+'</a>\
	    		</li>' 
	   $('.content-left-three ul').append(li);
	}

//热门课程获取
	for(var i=0;i<hotClass.length;i++){
		var li ='<li><img src="'+hotClass[i].img+'" />\
	    			<a href="">'+hotClass[i].info+'</a>\
	    		</li>' 
	   $('.content-right-one ul').append(li);
	}

//技术讲堂
	for(var i=0;i<hotNews.length;i++){
		var li ='<li><img src="'+hotNews[i].img+'" />\
	    			<a href="">'+hotNews[i].info+'</a>\
	    		</li>' 
	   $('.content-right-two ul').append(li);
	}
