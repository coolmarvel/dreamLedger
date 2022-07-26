
// 스피너 //
$(document).ready(function () {
	$('#spinner').click(function () {
		$('.sk-chase').show();
	});
})

/* 탭 메뉴*/
$(function () {
	"use strict";
	$(".tab_content").hide();
	$(".tab_content:first").show();

	$(".tab_bar li").click(function () {
		$(".tab_bar li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
});

$(document).ready(function () {
	var currentGfgStep, nextGfgStep, previousGfgStep;
	var opacity;
	var current = 1;
	var steps = $("fieldset").length;

	setProgressBar(current);

	$(".btn_next_arrow").click(function () {

		currentGfgStep = $(this).parent().parent();
		nextGfgStep = $(this).parent().parent().next();

		$(".progressbar li").eq($("fieldset")
			.index(nextGfgStep)).addClass("active");

		nextGfgStep.show();
		currentGfgStep.animate({ opacity: 0 }, {
			step: function (now) {
				opacity = 1 - now;

				currentGfgStep.css({
					'display': 'none',

				});
				nextGfgStep.css({ 'opacity': opacity });
			},
			duration: 0
		});
		setProgressBar(++current);
	});

	$(".btn_prev_arrow").click(function () {

		currentGfgStep = $(this).parent().parent();
		previousGfgStep = $(this).parent().parent().prev();

		$(".progressbar li").eq($("fieldset")
			.index(currentGfgStep)).removeClass("active");

		previousGfgStep.show();

		currentGfgStep.animate({ opacity: 0 }, {
			step: function (now) {
				opacity = 1 - now;

				currentGfgStep.css({
					'display': 'none',

				});
				previousGfgStep.css({ 'opacity': opacity });
			},
			duration: 0
		});
		setProgressBar(--current);
	});

	function setProgressBar(currentStep) {
		var percent = parseFloat(100 / steps) * current;
		perDcent = percent.toFixed();
		$("#progressbar")
			.css("width", percent + "%")
	}

	$(".submit").click(function () {
		return false;
	})


	$("#phySever .addbtn").click(function () {
		// console.log('dd')
		$('.toast.pop01').fadeIn(400).delay(1000).fadeOut(400)
	});


});



/* layout */
$(document).ready(function () {
	"use strict";

	$('.nav-toggle').click(function (e) {
		e.preventDefault();

		$('#container').toggleClass('closeNav');
		$('.nav-toggle').toggleClass('active');

		$("#lnb ul ul").hide();
	});
});

// /* resize_layout */
// $(document).ready(function () {
// 	"use strict";

// 	$(window).resize(function () {
// 		var width = window.outerWidth;

// 		if (width < 1125) {
// 			$('body').addClass('mobileNav');
// 			$('#container').removeClass('closeNav');

// 			$('.nav-toggle').click(function (e) {
// 				e.preventDefault();

// 				$('.nav-toggle').toggleClass('m_active');
// 			});
// 		} else if (width > 1125) {
// 			$('body').removeClass('mobileNav');
// 			$('.menu').hover(function () {
// 				$('.menu').toggleClass('menu_hv');
// 			});
// 		}
// 	});
// });

/*Datepicker*/
$(function () {
	"use strict";
	$(".S_date, .E_date").datepicker();
});

$(function () {
	"use strict";
	$(".S_date, .E_date").attr('readOnly', 'true');
});

/* 탭 메뉴*/
$(function () {
	"use strict";
	$(".tab_content").hide();
	$(".tab_content:first").show();

	$(".tabs ul li").click(function () {
		$(".tabs ul li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
});

/*alert popup*/
$(function () {
	"use strict";
	var appendthis = ("<div class='modal-overlay js-modal-close'></div>");

	$('a[data-modal-id]').click(function (e) {
		e.preventDefault();

		$("body").append(appendthis);
		$(".modal-overlay").fadeTo(500, 0.7);
		//$(".js-modalbox").fadeIn(500);
		var modalBox = $(this).attr('data-modal-id');
		$('#' + modalBox).fadeIn($(this).data());
	});

	$(".js-modal-close, .modal-overlay").click(function () {
		$(".modal-box, .modal-box-al, .modal-overlay").fadeOut(500, function () {
			$(".modal-overlay").remove();
		});
	});

	$(window).resize(function () {
		$(".modal-box, .modal-box-al").css({
			top: ($(window).height() - $(".modal-box, .modal-box-al").outerHeight()) / 2,
			left: ($(window).width() - $(".modal-box, .modal-box-al").outerWidth()) / 2
		});
	});

	$(window).resize();
});

/*select*/
$(document).ready(function () {
	"use strict";
	$("select").styledSelect();
});

/*placeholder*/
$(document).ready(function () {
	"use strict";
	$('.placeholder').autoClear();
});


/* add search box*/
$(document).ready(function () {
	"use strict";
	$(".search_more_btn").click(function () { $(".add_search_info_box").toggle(); });

});

/* add box*/
$(document).ready(function () {
	"use strict";
	$(".view_btn").click(function () { $(".view_info_box").toggle(); });

});

/*alert popup02*/

// $(function () {
// 	"use strict";
// 	var appendthis = ("<div class='modal-overlay js-modal-close'></div>");
// 	$('a[data-modal-id]').click(function (e) {
// 		e.preventDefault();
// 		$("body").append(appendthis);
// 		$(".modal-overlay").fadeTo(500, 0.7);
// 		//$(".js-modalbox").fadeIn(500);
// 		var modalBox = $(this).attr('data-modal-id');
// 		$('#' + modalBox).fadeIn($(this).data());
// 	});
// 	$(".js-modal-close, .modal-overlay").click(function () {
// 		$(".modal-box_a, .modal-overlay").fadeOut(500, function () {
// 			$(".modal-overlay").remove();
// 		});
// 	});
// 	$(window).resize(function () {
// 		$(".modal-box_a").css({
// 			top: ($(window).height() - $(".modal-box_a").outerHeight()) / 2,
// 			left: ($(window).width() - $(".modal-box_a").outerWidth()) / 2
// 		});
// 	});
// 	$(window).resize();
// });

/*항상 떠 있는 팝업 스크립트
$(function(){
	"use strict";
	$(".js-modal-close, .modal-overlay").click(function() {
		$(".modal-box-a, .modal-overlay").fadeOut(500, function() {
			$(".modal-overlay").remove();
		});
	});
	$(window).resize(function() {
			$(".modal-box-a").css({
				top: ($(window).height() - $(".modal-box-a").outerHeight()) / 2,
				left: ($(window).width() - $(".modal-box-a").outerWidth()) / 2
			});
		});
});

/*LNB Navigation */
(function ($) {
	"use strict";

	$(document).ready(function () {
		$('.LNB_navi > ul > li > a').click(function () {
			$('.LNB_navi li').removeClass('active');
			$(this).closest('li').addClass('active');
			var checkElement = $(this).next();

			if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				$('.LNB_navi ul ul:visible').slideUp('normal');
				$(".has_sub_show").attr('id', '0');
				$(".has_sub_show").children('ul').slideUp();
				checkElement.slideDown('normal');
			}
		});
	});
})(jQuery);

/* table */
$(function () {
	"use strict";

	$('.tablesorter').tablesorter({
		usNumberFormat: false,
		sortReset: true,
		sortRestart: true
	});
});

/* div 높이 같게 */
$(document).ready(function () {
	"use strict";

	$('.graph_wrap_con_wrap').each(function () {
		var highestBox = 0;

		$('.layout').each(function () {
			if ($(this).height() > highestBox)
				highestBox = $(this).height();
		});

		$('.layout').height(highestBox);
	});
});

/* ie8 */
/* check */
$(document).ready(function () {
	"use strict";

	$("input:checkbox").on('click', function () {
		if ($(this).prop('checked')) {
			$(this).parent().addClass("selected");
		} else {
			$(this).parent().removeClass("selected");
		}
	});
});


$(document).ready(function () {
	"use strict";

	var _designRadio = $('.designRadio');
	var _iLabel = $('.iLabel');

	$(_iLabel).click(function () {
		var _thisRadio = $(this).parent().find('> .designRadio');
		var _value = $(this).parent().find('>input').val();

		$(_designRadio).children().removeClass('checked');
		$(_thisRadio).children().addClass('checked');
		console.log(_value);
	});

	$(_designRadio).click(function () {
		var _value = $(this).parent().find('>input').val();

		$(_designRadio).children().removeClass('checked');
		$(this).children().addClass('checked');
		console.log(_value);
	});
});

/*table add*/
$(document).ready(function () {
	$(".add").click(function () {
		$(".addtbl01:first").clone(true).appendTo("#data_tbl").find('input[type="text"]').val('').end()
	});

	$('.delete').click(function () {
		$(this).parents(".addtbl01").remove();
	});
});

/*table add*/
$(document).ready(function () {
	$(".add02").click(function () {
		$(".addtbl02:first").clone(true).appendTo("#data_tbl").find('input[type="text"]').val('').end()
	});

	$('.delete02').click(function () {
		$(this).parents(".addtbl02").remove();
	});
});

/*table add*/
$(document).ready(function () {
	$(".add03").click(function () {
		$(".addtbl03:first").clone(true).appendTo("#data_tbl").find('input[type="text"]').val('').end()
	});

	$('.delete03').click(function () {
		$(this).parents(".addtbl03").remove();
	});
});

/*input file*/
$(document).ready(function () {
	var fileTarget = $('.filebox .upload-hidden');

	fileTarget.on('change', function () {
		if (window.FileReader) {
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}

		$(this).siblings('.upload-name').val(filename);
	});
});

/*layer print*/
function fade(modal) {
	var appendthis = ("<div class='modal-overlay js-modal-close'></div>");

	//e.preventDefault();

	$("body").append(appendthis);
	$(".modal-overlay").fadeTo(100, 0.7);
	//$(".js-modalbox").fadeIn(100);

	//var modalBox = $(this).attr(modal);
	$('#' + modal).fadeIn(100);
}

function fadeClose() {
	$(".modal-overlay").remove();
	$(".modal-box, .modal-box-al, .modal-overlay").fadeOut(100);
}

$(function () {
	// 자산등록 구분 '구매자산/렌탈자산' 라디오 버튼 선택 시 영역 변경. 2020-07-27. kws.
	$("#asset02").click(function () {
		$("#tbl_purchase").addClass("tbl_hide");
		$("#tbl_rental").removeClass("tbl_hide");

		if ($("#status_p").is(":checked") == true) {			// 자산등록 구분 '구매자산' 클릭 시
			$("#status_r").prop("checked", true);
			$("#div_prov").removeClass("div_hide");
		} else {														// 자산등록 구분 '렌탈자산' 클릭 시
			$("#status_r").prop("checked", false);
			$("#div_prov").addClass("div_hide");
		}
	});

	$("#asset01").click(function () {
		$("#tbl_purchase").removeClass("tbl_hide");
		$("#tbl_rental").addClass("tbl_hide");

		if ($("#status_r").is(":checked") == true) {			// 자산등록 구분 '렌탈자산' 클릭 시
			$("#status_p").prop("checked", true);
			$("#div_prov").removeClass("div_hide");
		} else {														// 자산등록 구분 '구매자산' 클릭 시
			$("#status_p").prop("checked", false);
			$("#div_prov").addClass("div_hide");
		}
	});
});

// 상태('자산지급') 체크 시 '지급(인사) 정보' 레이어 표시/감추기. 2020-07-31. kws.
$(function () {
	// 구매자산 상태('자산지급') 체크 시
	$("#status_p").on('click', function () {
		if ($("#status_p").is(":checked")) {
			$("#div_prov").removeClass("div_hide");
		} else {
			$("#div_prov").addClass("div_hide");
		}
	});

	// 렌탈자산 상태('자산지급') 체크 시
	$("#status_r").on('click', function () {
		if ($("#status_r").is(":checked")) {
			$("#div_prov").removeClass("div_hide");
		} else {
			$("#div_prov").addClass("div_hide");
		}
	});
});

// 하드웨어 구분 값이 변경되면 페이지 이동. 2020-08-20. kws.
$(function () {
	$("#hd").change(function () {
		if ($("#hd option:selected").val() == "hd01") {					// 노트북
			location.href = "menu_003_reg01.html";
		} else if ($("#hd option:selected").val() == "hd05") {		// 네트웍장비
			location.href = "menu_003_reg02.html";
		} else if ($("#hd option:selected").val() == "hd08") {		// 모바일기기
			location.href = "menu_003_reg03.html";
		}
	});
});

// 레이어 중 버튼 그룹 영역 보여주기/숨기기 설정. 2020-09-05. kws.
function showHide(target_id, stat1, stat2) {
	$('#' + target_id + ' div.select_pop1').css("display", stat1);
	$('#' + target_id + ' div.select_pop2').css("display", stat2);
}

/**************************************************
	popup 1 : 계약진행과정 레이어
	popup 2 : 메시지 레이어
	popup 3 : 자산 상세보기 레이어
	popup 4 : 자산 인쇄 레이어
	popup 5 : 소프트웨어 자산 지급현황 레이어
***************************************************/
// 레이어 팝업 띄우기 (체크박스 한개만 유효). 2020-09-05. kws.
function popLayerOne(nm_chkbox, target, action, item) {
	var varTarget = ['하드웨어 자산', '소프트웨어 자산', '지급정보'];
	var varAction = ['삭제', '상세보기', '인쇄', '지급현황', '수정'];
	var pop_action = varAction[action];

	var listArray = [];
	var checkbox = $("input[name=" + nm_chkbox + "]:checked");

	// 체크된 모든 열의 첫번째 값을 배열에 넣음
	checkbox.each(function (i) {
		var tr = checkbox.parent().parent().eq(i);
		var td = tr.children();

		listArray.push(td.eq(2).text());
	});

	$('#popup2 p.modal_tit').empty();
	$('#popup2 p.modal_tit').append('자산 ' + varAction[action]);
	$('#popup2 div.modal_content').empty();

	if (listArray == '' || listArray.length < 1) {		// 선택한 체크박스 없음
		if (target == 2 && action == 3) {				// 지급정보 수정 요청.
			pop_action = varAction[4];

			alert(pop_action + '할 ' + varTarget[target] + ' 자산을 선택해주세요.');
		} else {										// 그 외
			if (action == 1) {
				pop_action = '정보를 확인';
			} else if (target == 1 && action == 3 && !item && item.tirm() != '') {
				pop_action = '지급현황을 확인';
			}

			$('#popup2 div.modal_content').append(pop_action + '할 ' + varTarget[target] + ' 자산을 선택해주세요.');

			showHide('popup2', 'none', 'block');
			fade('popup2');
		}

		return false;
	} else if (listArray.length > 1) {			// 다중 체크박스 선택
		if (target == 2 && action == 3) {		// 지급정보 수정 요청.
			pop_action = varAction[4];

			alert('1개의 ' + varTarget[target] + '만 선택해주세요.');
		} else {								// 그 외
			$('#popup2 div.modal_content').append('<span class="txt_blue">1개</span>의 ' + varTarget[target] + ' 자산만 선택해주세요.');

			showHide('popup2', 'none', 'block');
			fade('popup2');
		}

		return false;
	} else {														// 체크박스 1개 선택
		if (action == 1) {											// 자산 정보 상세보기
			fade('popup3');
		} else if (action == 2) {									// 자산 정보 인쇄
			$("input:radio[name=ast_print]:input[value=ast_info]").prop("checked", true);

			$('.pop_srh_sub span').removeClass('on');
			$('.tab_con_box').removeClass('on');

			$("#tab-1").addClass('on');

			fade('popup4');
		} else if (target == 1 && action == 3) {					// 소프트웨어 자산 지급현황
			$("#popup3 p.modal_tit").empty();
			$("#popup3 p.modal_tit").append('소프트웨어 자산 지급현황_' + item);
			fade('popup5');
		} /*else if (target == 1 && action == 2)  {					// 소프트웨어 자산 지급정보 수정
			location.href = "menu_004_modi_user.html";
		}*/ else if (target == 2 && action == 3) {					// 소프트웨어 자산 지급정보 수정
			location.href = "menu_004_modi_user.html";
		} else {
			$('#popup2 div.modal_content').append('선택하신 ' + varTarget[target] + ' 자산 <span class="txt_blue">' + listArray.pop(0) + '</span>를 ' + varAction[action] + '하시겠습니까?');
			$('#popup2 div.select_pop1 a.btn_action').empty();
			$('#popup2 div.select_pop1 a.btn_action').append(pop_action);

			showHide('popup2', 'block', 'none');
			fade('popup2');
		}
	}
}

// 레이어 팝업 띄우기 (체크박스 여러개 유효). 2020-09-05. kws.
function popLayerMulti(nm_chkbox, target, action, item) {
	var varTarget = ['하드웨어 자산', '소프트웨어 자산', '지급정보'];
	var varAction = ['삭제', '상세보기', '인쇄', '지급현황', '수정'];

	var listArray = [];
	var checkbox = $("input[name=" + nm_chkbox + "]:checked");

	// 체크된 모든 열의 첫번째 값을 배열에 넣음
	checkbox.each(function (i) {
		var tr = checkbox.parent().parent().eq(i);
		var td = tr.children();

		listArray.push(td.eq(2).text());
	});

	$('#popup2 p.modal_tit').empty();
	$('#popup2 p.modal_tit').append('자산 ' + varAction[action]);
	$('#popup2 div.modal_content').empty();

	if (listArray == '' || listArray.length < 1) {
		$('#popup2 div.modal_content').append(varAction[action] + '할 ' + varTarget[target] + ' 자산을 선택해주세요.');

		showHide('popup2', 'none', 'block');
		fade('popup2');

		return false;
	}

	if (listArray.length >= 1) {
		$('#popup2 div.select_pop1 a.btn_action').empty();
		$('#popup2 div.select_pop1 a.btn_action').append(varAction[action]);

		showHide('popup2', 'block', 'none');

		if (listArray.length == 1 && action == 0) {
			$('#popup2 div.modal_content').append('선택하신 ' + varTarget[target] + ' 자산 <span class="txt_blue">' + listArray.pop(0) + '</span>를 ' + varAction[action] + '하시겠습니까?');
			fade('popup2');
			return false;
		}

		$('#popup2 div.modal_content').append('선택하신 ' + varTarget[target] + ' 자산 <span class="txt_blue">' + listArray.length + '</span>개를 삭제하시겠습니까?');
		fade('popup2');
	}
}
//데이터피커


$(document).ready(function () {


	$('.xdsoft_monthpicker .xdsoft_prev').addClass('las la-angle-left')
	$('.xdsoft_monthpicker .xdsoft_next').addClass('las la-angle-right')
	//	$('.xdsoft_monthpicker .xdsoft_today_button').addClass('las la-home')

	//$('.xdsoft_monthpicker .xdsoft_prev,.xdsoft_today_button').css('text-indent', 0)
	//$('.xdsoft_monthpicker .xdsoft_prev,.xdsoft_today_button').css('background', 'none')

	$('.xdsoft_label.xdsoft_year i').remove();
	$('.xdsoft_label.xdsoft_month i').remove();
	$('.xdsoft_today_button').remove();
	//$('.xdsoft_timepicker.active .xdsoft_prev,.xdsoft_next').remove();




	// 'divAdd'라는 id를 가진 object에 'addCl'이라는 class를 추가
	$(".certi").click(function () {
		$(this).toggleClass('active');


	});

	$('#datetimepickerBtn').click(function () {
		$('#datetimepicker').datetimepicker('show'); //support hide,show and destroy command
	});
	$('#datetimepickerBtn2').click(function () {
		$('#datetimepicker2').datetimepicker('show'); //support hide,show and destroy command
	});


});

//인증서 checked
function selectAll() {
	if ($("#allck").is(":checked")) $("input[name=certi]").prop("checked", true);
	else $("input[name=certi]").prop("checked", false);
}
$(document).ready(function () {
	$("input[name=certi]").prop("checked", true)
	$("#allck").click(
		selectAll
	);

	$("input[name=certi]").click(function () {
		var total = $("input[name=certi]").length;
		var checked = $("input[name=certi]:checked").length;

		if (total != checked) $("#allck").prop("checked", false);
		else $("#allck").prop("checked", true);
	});
});



