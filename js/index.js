
(function lifun(){
	for(let i = 0; i < $(".ul1>li").length ; i++){
		$(".ul1>li:eq("+i+")").on("mouseover",(end)=>{
			if(end.target.className != "act"){
				$(".ul1>.act")[0].className = "";
				end.target.className = "act"
				let a = end.target.id.slice(6,7)*1
				$(".qiyexx_nr>.neironxs")[0].className = "";
				$(".qiyexx_nr>li:eq("+a+")")[0].className = "neironxs"
			}
		})
	}
})()
