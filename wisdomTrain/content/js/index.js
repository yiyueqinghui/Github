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
var hotClass=[
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
var hotNews=[
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




//热门文章
	for(var i=0;i< hotArticle.length;i++){
		var li ='<li><img src="'+ hotArticle[i].img+'" />\
	    			<a href="">'+ hotArticle[i].info+'</a>\
	    		</li>' 
	   $('.hot-article ul').append(li);
	}
//热门课堂
	for(var i=0;i< hotClass.length;i++){
		var li ='<li><img src="'+ hotClass[i].img+'" />\
	    			<a href="">'+ hotClass[i].info+'</a>\
	    		</li>' 
	   $('.content-right-one ul').append(li);
	}
//热门新闻
	for(var i=0;i< hotNews.length;i++){
		var li ='<li><img src="'+ hotNews[i].img+'" />\
	    			<a href="">'+ hotNews[i].info+'</a>\
	    		</li>' 
	   $('.content-right-two ul').append(li);
	}
