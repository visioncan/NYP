/************************  
 init 頁面初始 
************************/
function init(){
	
	SearchTabFn();
	$("label.placeholder").inputHolder({focus_fn:addfocus, blur_fn:addblur});
	
	var Body = $(document.body);
	if( Body.hasClass("keyword-search") ){ //搜尋結果
		SearchTabGoto();
		init_listing();
	}else if( Body.hasClass("home") ){ //首頁
		SearchTabGoto();
		init_home();
	}else if( Body.hasClass("list-space") ){ //版位層
		SearchTabGoto();
		init_listing_space();
	}else if( Body.hasClass("list-category") ){ //分類頁
		SearchTabGoto();
		init_listing_category();
	}else if( Body.hasClass("list-directory") ){ //目錄頁
		SearchTabGoto();
		init_listing_category();
	}else if( Body.hasClass("tel-search") ){ //電話搜尋
		SearchTabGoto("tel-tab");
		init_listing_tel();
	}else if( Body.hasClass("product-search") ){ //產品搜尋
		SearchTabGoto("product-tab");
		init_listing_product();
	}else if( Body.hasClass("latest") ){ //靜態頁，最新資訊頁
		SearchTabGoto();
		init_latest();
	}else if( Body.hasClass("contact") ){ //聯絡我們
		SearchTabGoto();
		init_contact();
	}else if( Body.hasClass("submit-store") ){ //商家新增與更新
		SearchTabGoto();
		init_submit_store();
	}else if( Body.hasClass("find-store") ){ //商家搜尋
		SearchTabGoto();
		init_find_store();
	}else if( Body.hasClass("map-search") ){ //地圖搜尋
		SearchTabGoto("map-tab");
		init_map_main();
	}else if( Body.hasClass("manage-store") ){
		init_manage_main();
	}else if( Body.hasClass("Login") ){
		init_login_main();
	}else if( Body.hasClass("arcode") ){ //靜態頁 AR
		SearchTabGoto();
		init_ar();
		
	}else if( Body.hasClass("store-home") ){
		init_store_home();
	}else if( Body.hasClass("store-product") ){
		init_store_product();
	}else if( Body.hasClass("store-detail") ){
		init_store_detial();
	}else if( Body.hasClass("store-news") ){
		init_store_news();
	}else if( Body.hasClass("store-qna") ){
		init_store_qna();
	}else if( Body.hasClass("store-coupon") ){
		init_store_coupon();
	}else if( Body.hasClass("store-video") ){
		init_store_video();
	}else if( Body.hasClass("store-site") ){
		init_store_site();
	
	}else if( Body.hasClass("store-admin-intro") ){  //後台
		init_admin_home();
	}else if( Body.hasClass("store-admin-product") ){     
		init_admin_product();
	}else if( Body.hasClass("store-admin-detail") ){
		init_admin_detail();
	}else if( Body.hasClass("store-admin-inquiry") ){
		init_admin_inquiry();
	}else if( Body.hasClass("store-admin-inquirydetail") ){
		init_admin_inquirydetail();
	}else if( Body.hasClass("store-admin-coupon") ){
		init_admin_coupon();
	}else if( Body.hasClass("store-admin-coupondetail") ){
		init_admin_coupondetail();
	}else if( Body.hasClass("store-admin-couponcustom") ){
		init_admin_couponcustom();
	}else if( Body.hasClass("store-admin-news") ){
		init_admin_news();
	}else if( Body.hasClass("store-admin-newsdetail") ){
		init_admin_newsdetail();
	}else if( Body.hasClass("store-admin-video") ){
		init_admin_video();
	}else if( Body.hasClass("store-admin-qna") ){
		init_admin_qna();
	}else if( Body.hasClass("store-admin-recommend") ){
		init_admin_recommend();
	}else if( Body.hasClass("store-admin-exp") ){
		init_admin_exp();
	}else if( Body.hasClass("store-admin-dashboard") ){
		init_admin_dashboard();
	}
	
	
	
	onResize();
	
}


/************************  
   resize 視窗
************************/
function onResize(){
	if( $.browser.name === 'msie' && $.browser.versionNumber <= 8 ){
		return false;
	}
	if( $(window).width() < 990 ){
		if ( $(document.body).css("overflow-x") !== "auto" )
			$(document.body).css( "overflow-x","auto" );
	}else{
		if ( $(document.body).css("overflow-x") !== "hidden" )
			$(document.body).css( "overflow-x","hidden" );	
	}
	//$.log( $(document.body).css("overflow-x") );
}

/************************  
   swf ads 
************************/
function onLoaded(){
	$.swfAD.play();
}
$.extend($,{ swfAD:{
	loaderUrl  : "templates/swf/swfAd.swf" ,
	params     : { wmode : "opaque" }
}});
$.extend($.swfAD, {
	add  : function( vars ){
		$.swfAD.coll.push(vars);
	},
	play : function(){
		if( typeof(swfads) !== 'undefined' ){
			if( swfads.length !== 0 ){
				for(var i in swfads){
					this.Embed( swfads[i] );
				}
			}
			swfads = null;
		}
	},
	Embed : function(vars){
		/*
		//params:
		
		*targetID
		*debug  
		*width
		*height
		adSwfURL
		adLinkURL
		adCode
		/**/
		var flashvars      = {};
		//flashvars.debug    = false;
		flashvars.width    = 300;
		flashvars.height   = 250;
		flashvars.targetID = "flash-ads";
		
		flashvars = $.extend( flashvars, vars);
		$.swfObj.Embed( 
				$.swfAD.loaderUrl,
				flashvars.targetID,
				flashvars.width, 
				flashvars.height,
				$.swfAD.params, 
				flashvars
		);
	}
});




$.extend($,{ swfObj:{
	installUrl : "templates/swf/expressInstall.swf" ,
	defParams  :  {
				menu  : "false",
				scale : "noScale",
				allowFullscreen : "true",
				allowScriptAccess : "always"
	}
}});
$.extend($.swfObj, {
	Embed : function( url, id, width, height, param ,vars){
		var params = $.extend( $.swfObj.defParams, param);
		swfobject.embedSWF(
					url, 
					id, 
					width, 
					height, 
					"10.0.0", 
					$.swfObj.installUrl, 
					vars, 
					params);
	}
});







/************************  
  上方 info bar 會員  - 該功能已加到yp.login.js裡
************************/
$.extend($,{ infoBar:{ 
	Ele : $("#infobar")
}});
$.extend($.infoBar, {
	init : function(){
		if( this.Ele.find(".account").length != 0 ){
			$.infoBar.memberPanelInit();
		}
		$("#infobar .fb a, #infobar .plurk a").tipsy({gravity: 'n'});
	},
	//會員面版
	memberPanelInit : function(){
			this.Ele.find(".account").click(function(){
				$(this).toggleClass("open");
				$(this).children(".sub-menu").slideToggle(100);
			});
			
			//在外部點擊
			$(document.body).bind('click', function(e) {
				if($(e.target).closest('.account').length == 0) {
					$.infoBar.closeMemberPanel();
				}
			});
	},
	//會員面版close
	closeMemberPanel : function(){
		var CloseTarget = this.Ele.find(".account");
		if( CloseTarget.hasClass("open") ){
			CloseTarget.children(".sub-menu").slideToggle(100,function(){
				CloseTarget.toggleClass("open");
			});
		}
	}
});




/************************  
Search 預設顯示的 Tab
************************/
function SearchTabGoto(_tab_id){
	if(_tab_id == undefined){
		if( $("#search li.select").length === 0 ){
			$("#search li").first().addClass("select");
		};
	}else{
		$("#search li.select").removeClass("select");
		$("#" + _tab_id).addClass("select");
		$("#searchfmebg").attr("class", _tab_id + "-fmbg");
	}
}

/************************  
Search Tab 的click event
************************/
function SearchTabFn(){
	
	
	$.SearchTab.init();
	
	/* 開啟縣市選單 */
	$.locmenu.init();
	$("#search .select-location").click(function(){ 
		if( $.locmenu.isopen ){
			$.locmenu.close();
		}else{
			$.locmenu.open($(this));
		}
		return false; 
	});
}
//SearchTab 選單
$.extend($,{ SearchTab:{ 
	Ele : $("#search-tabs")
}});
$.extend($.SearchTab, {
	init : function(){
		if ( this.isMiniBar() ){
			$.SearchTab.minitabAction();
		}else{
			$.SearchTab.tabAction();
		}
	},
	// 一般 版選單
	tabAction : function(){
		$("#search-tabs li > a").click($.SearchTab.tabClickAction);
	},
	// mini 版選單
	minitabAction : function(){
		$("#search-tabs li > a").hover(
		  function(){
			$(this).parent("li").addClass("over");
			$("#search-tabs").addClass("menu-mini");
		},function(){
			$(this).parent("li").removeClass("over");
			$("#search-tabs").removeClass("menu-mini");
		}).click($.SearchTab.tabClickAction);
	},
	tabClickAction : function(){
		if(!$(this).hasClass("link")){
			if(!$(this).parent("li").hasClass("select") ){
				$("#search-tabs li.select").removeClass("select");
				$(this).parent("li").addClass("select");
				$.SearchTab.changeFromBg($(this));
				//mini版加一個動作
				if( $.SearchTab.isMiniBar() ){
					$(this).parent("li").removeClass("over");
					$("#search-tabs").removeClass("menu-mini");
				}
			}else{
				//防止user在點一次 for mini 
				if( $.SearchTab.isMiniBar() ){
					if( !$("#search-tabs").hasClass("menu-mini") ){
						$("#search-tabs").addClass("menu-mini");
					}
				}
			}
			$(this).blur();
			return false;
		}
	},
	isMiniBar : function(){
		if ( $("#header").hasClass("mini") ){
			return true;
		}else{
			return false;
		}
	},
	changeFromBg : function(_this){
		$("#searchfmebg").attr("class", _this.parent("li").attr("id") + "-fmbg");
	}
});




/* 額外的 focus blur event */
function addfocus(_target){
	_target.parent(".field").addClass("focus");
	if( $.browser.name === 'msie' ){_target.fadeTo('fast', 1)};
	if( $(document.body).hasClass("vip") ){
		$("#search .field").animate({ width: '200px', opacity : 1}, "fast");
		if( $("#preview-url").length > 0 ){
			$("#preview-url").animate({ left: "540px" }, "fast");
		}
	}
}
function addblur(_target){
	if( _target !== null ){
		_target.parent(".field").removeClass("focus");
	
		if(_target.val() === "" && $.browser.name === 'msie' ){
			_target.fadeTo('fast', 0);
		};
	}
	if( $(document.body).hasClass("vip") ){
		setTimeout(
			function(){
			if(!$.locmenu.isopen){
				$("#search .field").animate({width: '100px' , opacity : 0.8 }, "fast");
				if( $("#preview-url").length > 0 ){
					$("#preview-url").animate({ left: "440px" }, "fast");
				}
			}}, 1000);
	}
}








/************************  
預先載入圖片
************************/
function preloadImg(imgs){
	if (document.images) {
		var imageAry = new Array(),imageObj = new Image();
        imageAry = imgs.split(',');
		for(var i=0; i<=imageAry.length-1; i++) {
            //document.write('<img src="' + imageArray[i] + '" />');//uncomment to check images
            imageObj.src=imageAry[i];
        }
	}
}

/************************  
input的placeholder - 寫入文字到input方式 會抓title來寫 所以要加title
************************/
$.fn.inputTipbytitle = function(elem){
	var attrElem = ( elem == undefined )? "title" : elem ;
 	var _target = $(this);
	var _title  = _target.attr(attrElem);
	if( _target.val() === '' ){
		_target.val(_title).css("color","gray");
	}
	_target.bind("focus", function(){ _target.css("color","black"); if(_target.val()==_title){_target.val("");} });
	_target.bind("blur", function(){  if(_target.val()==''){ _target.val(_title); _target.css("color","gray"); }  });
};
/************************  
input的placeholder - 使用label方式
************************/
$.fn.inputHolder = function(opt){
	var defaults = {
		fade_timeout : "fast",
		fade_opacity : 0,
		focus_fn     : null, /* 自訂外額 focus blur fnunction*/
		blur_fn      : null
	};
	var options = $.extend({}, defaults, opt);
	
	this.each(function(){
		
		var for_id = $(this).attr("for");
		if( !for_id ) return ;
		
		var fns = this;
		fns.holderlabel = $(this);
		fns.inputField  = $("#" + for_id);
		fns.showing = true;
		
		if( fns.inputField.length === 0) return; 
		
		//Check 
		if(fns.inputField .val() != ""){
			fns.holderlabel.hide();
			fns.showing = false;
			if( $.browser.name === 'msie' ){ fns.inputField.fadeTo('fast', 1) };//fix ie field alpha 
		}
		
		/* 檢查是否空值 */
		fns.checkForEmpty = function(blur){
			if(fns.inputField.val() == ""){
				fns.prepForShow();
				fns.setOpacity( blur ? 1.0 : options.fadeOpacity );
			} else {
				fns.setOpacity(0);
			}
		};
		
		/* 設定透明度 */
		fns.setOpacity = function(_op){
			fns.holderlabel.stop().animate({ opacity: _op }, options.fade_timeout);
			fns.showing = (_op > 0.0);
		};
		
		/* 如keyin就消失 */
		fns.hideOnChange = function(e){
			if((e.keyCode == 16) || // Skip Shift
			   (e.keyCode == 9)     // Skip Tab
			  ) return;
			if(fns.showing){
				fns.holderlabel.hide();
				fns.showing = false;
			}
			// Remove keydown event to save on CPU processing
			fns.inputField.unbind('keydown.infieldlabel');
		};
		
		/**/
		fns.prepForShow = function(e){
			if(!fns.showing) {
				fns.holderlabel.css({opacity: 0.0}).show();
				// Reattach the keydown event
				fns.inputField.bind('keydown.infieldlabel',function(e){
					fns.hideOnChange(e);
				});
			}
		};

		fns.inputField.focus(function(){
			if( fns.showing ){
				fns.setOpacity( options.fade_opacity );
			}
			if( options.focus_fn != null){
				options.focus_fn( fns.inputField );
			}
		}).blur(function(){
			fns.checkForEmpty( true );
			if( options.blur_fn != null){
				options.blur_fn( fns.inputField );
			}
		}).bind('keydown.infieldlabel', function(e){
			fns.hideOnChange(e);
		}).change(function(e){
			fns.checkForEmpty();
		}).bind('onPropertyChange', function(){
			fns.checkForEmpty();
		});
	});
};





/************************  
  開啟縣市選單的event 有修改 10_1214
************************/
$.extend($,{ locmenu:{ ele : $("#location-menu") , target_input : null, isopen : false, keyinCityBox : '<span class="selected-city"></span>' }});
$.extend($.locmenu, {
	init : function(){
		//關閉
		$.locmenu.ele.children(".closebtn").click(function(){
			$.locmenu.close();
			return false;
		});
		//地址連結
		$.locmenu.ele.find("a").click(function(){
			if( $(this).hasClass("my") ){
				$.locmenu.seleinsert( $(this).attr("addr") );
			}else{
				$.locmenu.seleinsert( $(this).text() );
				if($("#keyword-tab").attr("class")) $("#keyword_a_id").val($(this).attr("class"));
				else if($("#product-tab").attr("class")) $("#product_a_id").val($(this).attr("class"));
				//$.locmenu.target_input.val( $.locmenu.target_input.val() + " " + $(this).text() );
			}
			$.locmenu.close();
			$(this).blur();
			return false;
		});
		//在外部點擊
		$(document.body).bind('click', function(e) {
			if($(e.target).closest('#location-menu').length == 0) {
				if( $.locmenu.isopen ){
					$.locmenu.close();
				}
			}
		});
		
	},
	seleinsert : function(_val){
		var seletInCityBox;
		if( $.locmenu.target_input.next(".selected-city").length === 0 ){
			seletInCityBox = $('<span></span>',{
					"class" : "selected-city" ,
					"html"  : _val
				});
			$.locmenu.target_input.after(seletInCityBox);
		}else{
			seletInCityBox = $.locmenu.target_input.nextAll(".selected-city");
			seletInCityBox.html(_val);
		}
		
		//調整input寬度
		$.locmenu.target_input.css("width", seletInCityBox.parent().width() - seletInCityBox.width() - 34 );
	},
	open : function(_ref_target){
		$.locmenu.isopen = true;
		$.locmenu.ele.show().find("#location-list").stop().slideDown(100);
		$.locmenu.target_input = _ref_target.prevAll("input[type='text']");
		var arw = $.locmenu.ele.children(".arw");
		var pos = _ref_target.offset();
		
		$.locmenu.ele.css({
			"top"  : (pos.top + 35) ,
			"left" : (pos.left - ($.locmenu.ele.width()/2))
		});
		//11_0224[add START]
		if( $.mypos.isopen ){
			$.mypos.close();
		} 
		//11_0224[add END]
	},
	close : function(){
		$.locmenu.isopen = false;
		$.locmenu.ele.hide().find("#location-list").stop().hide();
		addblur(null); //商家輸入框收合
	}
});


/************************  
 我的位置  $.mypos
************************/
$.extend($,{ mypos:{ 
	Btn : $("#mypos"), //按鈕
	PosSettingBox : $("#mypos-setting"), //設定的視窗
	isSet : false , //是否已設定
	isopen: false   //是否已開啟視窗
}});
$.extend($.mypos, {
	init : function(_op){
		//set
		$.mypos.isSet = _op.isSet;
		//looks
		if( $.mypos.isSet ){
			$.mypos.Btn.attr("class", "set altfn");
		}else{
			$.mypos.Btn.attr("class", "unset altfn");
		}
		//key in 的 inputHolder
		$.mypos.PosSettingBox.find("label").inputHolder();
		//open
		$.mypos.Btn.click(function(){
			$.mypos.open();
			return false;
		});
		// close
		$.mypos.PosSettingBox.children(".closebtn").click(function(){
			$.mypos.close();
			return false;
		});
		//在外部點擊
		$(document.body).bind('click', function(e) {
			if($(e.target).closest('#mypos-setting').length == 0) {
				if( $.mypos.isopen ){
					$.mypos.close();
				}
			}
		});
	},
	SetTo : function(_bool){
		if(_bool){
			$.mypos.Btn.attr("class", "set altfn");
			$.mypos.isSet = true;
		}else{
			$.mypos.Btn.attr("class", "unset altfn");
			$.mypos.isSet = false;
		}
	},
	formCheck : function(){
    if($("#mypos-address").val() == ""){
      if($.setMyPosition()){//Check我的位置first
            alert('移除完成');
            $.mypos.close();
          }else{
            alert("您的區域或地址尚未填寫");
          }
          return false;
    }else{
      var myPosData = eval('('+$.setMyPosition()+')');//設定我的位置
      if(myPosData[0]){
        return true;
      }else{
        $("#mypos-address").focus();
      }
    }
	},
	open : function(){
		$.mypos.isopen = true;
		var pos = $.mypos.Btn.offset();
		$.mypos.PosSettingBox.css({
			"top"  : (pos.top + 35) ,
			"left" : (pos.left - ($.mypos.PosSettingBox.width()/2) + 11 ) 
		}); //11是btn的寬度一半
		$.mypos.PosSettingBox.show().children(".view").stop().slideDown(100);
		
		if( $.mypos.isSet ){ 
			$.mypos.PosSettingBox.find("a.remove").show();
		}
		//11_0224[add START]
		if( $.locmenu.isopen ){
			$.locmenu.close();
		}
		//11_0224[add END]
	},
	close : function(){
		$.mypos.isopen = false;
		$.mypos.PosSettingBox.hide().children(".view").stop().hide();
	}
});


/************************  
  加上title提示  $.alts
************************/
$.extend($,{ alts:{ }});
$.extend($.alts, {
	init : function(){
		//$.log($(".altfn").length);
		if($(".altfn").length != 0){
			$(".altfn").tipsy({gravity: 's'});
		};
	}
});

/************************  
 ready
************************/
$(document).ready(init);
$(window).resize(onResize); 
$(window).load(onLoaded);

$.enableConsole = true;
$.fn.log = $.log = $.fn.console = $.console = function(str, method){
method = (( method == undefined) ? "log" :  method );
if (window.console && console[method] && $.enableConsole)
	//console[method].apply(this, [].splice.call(arguments,1))
	console[method](str);
	return this;
};

