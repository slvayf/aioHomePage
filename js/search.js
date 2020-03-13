function coreSearch(searchEngines) {
	// 获取input的输入内容
	var textSearch = document.getElementsByClassName("searchInput")[0].value;
	if ( textSearch !== "" ) {
		// 拼接搜索引擎和搜索内容并在当前页面打开
		window.open( searchEngines + textSearch, '_self' );
	} else {
		// 输入内容为空时焦点返回input
		document.getElementsByClassName("searchInput")[0].focus();
	}
}

function buttonSearch() {
	// input左边的搜索按钮默认使用百度作为搜索引擎
	coreSearch("https://www.baidu.com/s?wd=");
}

function enterSearch(event) {
	// 获取input键盘事件，回车事件编码=13
	var evt = window.event || event; 
	if ( evt.keyCode == 13 ) {
		// input回车事件默认使用百度作为搜索引擎
		coreSearch("https://www.baidu.com/s?wd=");
	}
}