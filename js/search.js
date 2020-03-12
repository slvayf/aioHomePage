function defaultSearch() {
	var textSearch = document.getElementsByClassName("searchInput")[0].value;
	if ( textSearch !== "" ) {
		window.open('https://www.baidu.com/s?wd=' + textSearch, '_self');
	} else {
		document.getElementsByClassName("searchInput")[0].focus();
	}
}