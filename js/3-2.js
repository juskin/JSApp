/**
 * @author jiacc
 */

function showtip2(current, e, text) {
	// 如果是ie浏览器并且满足readystate标志位
	if(document.readyState == "complete") {
		// 循环播放链接
		document.all.tooltip2.innerHTML = '<marquee style="border:1px solid blue">' + text + '</marquee>'
		// 链接的显示左边界的确定
		document.all.tooltip2.style.pixelLeft = event.clientX + document.body.scrollLeft + 10
		// 链接的显示上边界的确定
		document.all.tooltip2.style.pixelTop = event.clientY + document.body.scrollTop + 10
		// 方框设置为显示
		document.all.tooltip2.style.visibility = "visible"
	}
}

//	设置链接不显示
function hidetip2() {
	// (document.all)
	document.all.tooltip2.style.visibility = "hidden";
}