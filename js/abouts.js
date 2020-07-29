




for(let i = 0;i<5;i++){
	let a = $(".jjneirong>ul:eq(0)>li:eq(0)")[0].cloneNode(true)
	$(".jjneirong>ul:eq(0)")[0].appendChild(a)
}
$(".jjneirong>ul:eq(0)>li:odd>div").css("float","right")
$(".jjneirong>ul:eq(0)>li:even>div").css("float","left")

for(let i = 0;i<2;i++){
	let a = $(".zhaoxsul>li:eq(0)")[0].cloneNode(true)
	$(".zhaoxsul")[0].appendChild(a)
}

for(let i = 0;i<5;i++){
	let a = $(".falcullist>li:eq(0)")[0].cloneNode(true)
	$(".falcullist")[0].appendChild(a)
}
$(".falcullist>li:odd").css("justify-content","flex-end")
$(".falcullist>li:even").css("justify-content","flex-start")

$(".falcullist>li:odd>div:eq(1)").css("align-items","flex-start")
$(".falcullist>li:even>div:eq(1)").css("align-items","flex-end")


$(".jjbtn").on("click",(end)=>{
	if(end.target.className == "morra"){
		$(".morrs")[0].className = "morra"
		end.target.className = "morrs"
		let a = end.target.id.slice(7,end.target.id.length)*1
		for(let i=0; i< $(".jjneirong>ul").length;i++){
			$(".jjneirong>ul:eq("+i+")").css("display","none")
		}
		$(".jjneirong>ul:eq("+a+")").css("display","flex")
	}
})


