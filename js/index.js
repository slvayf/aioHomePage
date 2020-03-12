function defaultSearch() {
	var textSearch = document.getElementsByClassName("searchInput")[0].value;
	window.open('https://www.baidu.com/s?wd=' + textSearch , '_self');
}