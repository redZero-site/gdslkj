layui.use('element', function() {
	var element = layui.element;

	//…
});

// 点击按钮
$(".zhankai").on("click", () => {
	if ($(".zhankai>p:eq(0)").css("transform") == "none") {
		$(".head_zhong>.head_text>.layui-nav").css({
			"height": "240px",
		})
		zk()
	} else {
		$(".head_zhong>.head_text>.layui-nav").css({
			"height": "0px",
		})
		sq()
	}
})

function zk() {
	$(".zhankai>p:eq(0)").css({
		"transform": "rotate(45deg) translate(0,7px)"
	})
	$(".zhankai>p:eq(1)").css({
		"display": "none"
	})
	$(".zhankai>p:eq(2)").css({
		"transform": "rotate(-45deg) translate(0,-7px)",
	})
}

function sq() {
	$(".zhankai>p:eq(0)").css({
		"transform": "none",
		"width": "30px"
	})
	$(".zhankai>p:eq(1)").css({
		"display": "flex"
	})
	$(".zhankai>p:eq(2)").css({
		"transform": "none",
		"width": "30px"
	})
}

function lsXys() {
	if (window.innerWidth <= 770) {
		$(".head_zhong>.head_text>.layui-nav").css({
			"height": "0px",
			"transition": "height 0.3s"
		})
		sq()
	} else {
		$(".head_zhong>.head_text>.layui-nav").css({
			"height": "80px"
		})
	}
	window.onresize = function() {
		lsXys()
	}
}
lsXys()
