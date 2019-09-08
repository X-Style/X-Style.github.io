// JavaScript Document
$(function(){
	/*document.onkeydown = function(){
		if(window.event && window.event.keyCode == 123) {
			alert("F12被禁用");
			event.keyCode=0;
			event.returnValue=false;
		}
		if(window.event && window.event.keyCode == 13) {
			window.event.keyCode = 505;
		}
		if(window.event && window.event.keyCode == 8) {
			alert(str+"\n请使用Del键进行字符的删除操作！");
			window.event.returnValue=false;
		}
	}
	
	document.oncontextmenu = function (event){
		if(window.event){
		event = window.event;
		}try{
		var the = event.srcElement;
		if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
		return false;
		}
		return true;
		}catch (e){
		return false;
		}
	}
	
	
	//屏蔽键盘事件
	document.onkeydown = function (){
		var e = window.event || arguments[0];
		//F12
		if(e.keyCode == 123){
			return false;
		//Ctrl+Shift+I
		}else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
			return false;
		//Shift+F10
		}else if((e.shiftKey) && (e.keyCode == 121)){
			return false;
		//Ctrl+U
		}else if((e.ctrlKey) && (e.keyCode == 85)){
			setTimeout(function(){
			    alert('');
			  },1);
			return false;
		}
	};
	//屏蔽鼠标右键
	document.oncontextmenu = function (){
		setTimeout(function(){
		    alert('');
		  },1);
		return false;
	}*/
	
	$("#loading").addClass("pc");
	$(".logo-water,.load-water").addClass("on");
	
	
	$(".top_tel").click(function(){
		$("#content_tel").slideToggle();
	});
	
	jQuery(window).scroll(function () {
        var windowTop = jQuery(window).scrollTop();
        if (windowTop > 50) {
            jQuery("#header").addClass("header");
        } else {
			jQuery("#header").removeClass("header");
        }
    });
	
	//在线客服
    $(function () {
        $("#izl_rmenu").each(function () {
            $(this).find(".btn-wx").mouseenter(function () {
                $(this).find(".pic").fadeIn("fast");
            });
            $(this).find(".btn-wx").mouseleave(function () {
                $(this).find(".pic").fadeOut("fast");
            });
            $(this).find(".btn-phone").mouseenter(function () {
                $(this).find(".phone").fadeIn("fast");
            });
            $(this).find(".btn-phone").mouseleave(function () {
                $(this).find(".phone").fadeOut("fast");
            });
            $(this).find(".btn-top").click(function () {
                $("html, body").animate({
                    "scroll-top": 0
                }, "fast");
            });
        });
        var lastRmenuStatus = false;
        $(window).scroll(function () {//bug
            var _top = $(window).scrollTop();
            if (_top > 200) {
                $("#izl_rmenu").data("expanded", true);
            } else {
                $("#izl_rmenu").data("expanded", false);
            }
            if ($("#izl_rmenu").data("expanded") != lastRmenuStatus) {
                lastRmenuStatus = $("#izl_rmenu").data("expanded");
                if (lastRmenuStatus) {
                    $("#izl_rmenu .btn-top").slideDown();
                } else {

                    $("#izl_rmenu .btn-top").slideUp();
                }
            }
        });
    });
	//--------------------------------在线客服结束---------------------------------------//
	
	$(window).load(function(){
		$('.target').delay(800).scrollClass();
	});
	
	(function($){
		$.fn.scrollClass = function(config){
			var num=50;
			var defaults = {};
			var config = $.extend(defaults, config);
			var target = this;
			function addAction(){
				var length = target.length;
				for(var i=0; i<length; i++){
					if(target.eq(i).hasClass('action')) continue;
					var in_position = target.eq(i).offset().top + 100;
					var window_bottom_position = $(window).scrollTop() + $(window).height();
					if(in_position < window_bottom_position){
						target.eq(i).addClass('action');
					}
				}
			}
			addAction();
	
			$(window).on('scroll', function(){
				addAction();
			});
			return target;
		};
	})($);
});