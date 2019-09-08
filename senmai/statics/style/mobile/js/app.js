

 /*$(function(){$('a[href*=#],area[href*=#]').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var $target=$(this.hash);$target=$target.length&&$target||$('[name='+this.hash.slice(1)+']');if($target.length){var targetOffset=$target.offset().top;$('html,body').animate({scrollTop:targetOffset},1000);return false}}})});*/

(function($) {
 
 $("#gotop").click(function(){$("html,body").animate({scrollTop: 0}, 600);});
 
  $("#bnt_sub_nav").click(function(){
  	$(this).toggleClass("on");
  	$("#sub_nav_content").slideToggle();
  });
  
  
 $(".ar_article p:last").css("padding","0");
  
	
$(".nav_btn").click(function(){
		if($(this).hasClass("nav_btn_active")){
			$(this).removeClass("nav_btn_active");
			$(".header-nav").removeClass("header-nav-active");
			$("body").removeClass("offcanvas-page");
		} else {
			$(this).addClass("nav_btn_active");
			$(".header-nav").addClass("header-nav-active");
			$("body").addClass("offcanvas-page");
		}
		$(".mask").slideToggle();
	});
	
	$(".nav_btn01").click(function(){
		if($(this).hasClass("nav_btn_active01")){
			$(this).removeClass("nav_btn_active01");
			$(".header-nav").removeClass("header-nav-active");
			$("body").removeClass("offcanvas-page");
		} else {
			$(this).addClass("nav_btn_active01");
			$(".header-nav").addClass("header-nav-active");
			$("body").addClass("offcanvas-page");
		}
		$(".mask").slideToggle();
	});
	
	$(".header-nav-li>a").click(function(){
		$(this).siblings(".header-nav-li-ul").slideToggle();
		$(this).parent().siblings().find(".header-nav-li-ul").slideUp();
	})
	$(".mask").click(function(){
		$(this).slideToggle();
		$(".nav_btn").removeClass("nav_btn_active");
		$(".nav_btn01").removeClass("nav_btn_active01");
		$(".header-nav").removeClass("header-nav-active");
		$("body").removeClass("offcanvas-page");
	})
	
	
	
	if($(".nav_btn_active").length>0){ // Mark 1
		$("body").addClass("offcanvas-page");
	  }
	else {$("body").removeClass("offcanvas-page");
	}
	
	if($(".nav_btn_active01").length>0){ // Mark 1
		$("body").addClass("offcanvas-page");
	  }
	else {$("body").removeClass("offcanvas-page");
	}
})(jQuery);
 
 



