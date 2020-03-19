// 定义默认搜索引擎
var defaultSearchEngines = 'https://www.baidu.com/s?wd=';

// 自定义搜索工具箱，一条完整的搜索引擎或站点包括：标签[target]、标签对应的网址或可识别搜索参数搜索引擎链接[url]
var data = [
    { target: '谷歌', url: "'https://www.google.com/search?q='" },
	{ target: '必应', url: "'https://cn.bing.com/search?q='" },
	{ target: '搜狗', url: "'https://www.sogou.com/web?query='" },
	{ target: '360', url: "'https://www.so.com/s?q='" },
	{ target: '百度百科', url: "'https://baike.baidu.com/item/'" },
	{ target: '维基百科', url: "'https://zh.wikipedia.org/wiki/'" },
	{ target: '京东', url: "'https://search.jd.com/Search?enc=utf-8&keyword='" },
	{ target: '淘宝', url: "'https://s.taobao.com/search?q='" },
    { target: '豆瓣', url: "'https://www.douban.com/search?q='" },
	{ target: '知乎', url: "'https://www.zhihu.com/search?type=content&q='" },
	{ target: '百度翻译', url: "'https://fanyi.baidu.com/#en/zh/'" },
	{ target: '谷歌翻译', url: "'https://translate.google.cn/#view=home&op=translate&sl=auto&tl=zh-CN&text='" },
	{ target: '腾讯视频', url: "'https://v.qq.com/x/search/?q='" },
    { target: '哔哩哔哩', url: "'https://search.bilibili.com/all?keyword='" },
]

// 核心搜索函数
function coreSearch(searchEngines) {
	// 获取input的输入内容
	var textSearch = document.getElementsByClassName("searchInput")[0].value;
	if ( textSearch !== "" ) {
		// 如果搜索框存在内容，则拼接搜索引擎和搜索内容
		if ( defaultSearchEngines === searchEngines ) {
			// 默认搜索引擎在当前页面打开
			window.open( searchEngines + textSearch, '_self' );
		} else {
			// 非默认搜索引擎，使用新页面打开，这样可以在关掉新页面回到主页在其他站点继续搜索
			window.open( searchEngines + textSearch );
		}
	} else if ( defaultSearchEngines != searchEngines ) {
		// 不存在搜索内容，但传入搜索引擎非默认搜索引擎，则直接打开搜索引擎所属网站
		// 搜索引擎所属网站需要从传入搜索引擎中截取
		searchEngines = searchEngines.split("://")[0] + "://www." + (searchEngines.split(".com")[0]).split(".")[1] + ".com";
		window.open( searchEngines );
	} else {
		// 输入内容为空时焦点返回input
		document.getElementsByClassName("searchInput")[0].focus();
	}
}

function buttonSearch() {
	// input左边的搜索按钮使用默认搜索引擎
	coreSearch(defaultSearchEngines);
}

function enterSearch(event) {
	// 获取input键盘事件，回车事件编码=13
	var evt = window.event || event; 
	if ( evt.keyCode == 13 ) {
		// input回车事件使用默认搜索引擎
		coreSearch(defaultSearchEngines);
	}
}

// 绘制单个div，由generateSearchBox组装
function generateDiv(item) {
	var div = '<button class="draw" onclick="coreSearch('+item.url+')">'+item.target+'</button>'
    return div
}

// 循环组装div并最终覆盖加载到searchBox
function generateSearchBox() {
    var html = ''
    for( var i = 0;i<data.length;i++ ) {
        html += generateDiv(data[i])
    }
    document.getElementsByClassName("searchBox")[0].innerHTML = html
}

// 延时100ms再执行generateSearchBox函数（因为需要在页面加载完成后执行）
setTimeout(function(){generateSearchBox();}, 100);