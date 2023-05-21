"use strict";

/***********管理者からのお知らせ部分***********/
var infobox = $('#NewestInformations');
var title = $('#UserTopInfo .page-header');
//title.text('管理者からのお知らせ　 < クリックして格納 >');
// Collapse the notifications
switchInfoboxVisibility();
// Append the notifications if there are any unread messages
/*$(window).on('load', function () {
    // js-unread-message-count is updated by ajax, can't catch the updated timing
    setTimeout(function () {
        var value = $('#js-unread-message-count').text();
        if (value != '') {
            switchInfoboxVisibility();
        }
    }, 200);
});*/
$('#UserTopInfo .page-header').on('click', function () {
    switchInfoboxVisibility();
});
function switchInfoboxVisibility() {
    if (infobox.is(':visible') == true) {
        infobox.hide();
        title.text('管理者からのお知らせ　 > クリックして展開 <');
        $('#UserTopInfo .page-header')[0].style.cursor = "pointer"
    }
    else {
        infobox.show();
        title.text('管理者からのお知らせ　 < クリックして格納 >');
    }
}//document.querySelectorAll("#NewestInformations")[0].style.display = "none";
/***********管理者からのお知らせ部分***********/

/***********学習と振り返りの記録部分***********/
$('.side-block-content')[0].id = "gakusyucontent";
$('.side-block-title')[0].id = "gakushutitle";
var gakushucontent = $('#gakusyucontent');
var gakushutitle = $('#gakushutitle');
switchInfoboxVisibilitygakushu()//gakushucontent.hide();
//gakushutitle.text('学習と振り返りの記録　 > クリックして展開 <');
// Collapse the notifications
//switchInfoboxVisibilitygakushu();
$('#gakushutitle').on('click', function () {
    switchInfoboxVisibilitygakushu();
});
function switchInfoboxVisibilitygakushu() {
    if (gakushucontent.is(':visible') == true) {
        $('.side-block-content')[0].style.display ="none";
        gakushutitle.text('学習と振り返りの記録　 > クリックして展開 <');
        $('.side-block-title')[0].style.cursor = "pointer"
    }
    else {
        $('.side-block-content')[0].style.display ="";
        gakushutitle.text('学習と振り返りの記録　 < クリックして格納 >');
    }
}//$('.side-block-content')[0].style.display ="none";
/***********学習と振り返りの記録部分***********/

/***********電子ポートフォリオ部分***********/
$('.side-block-content')[1].id = "portfoliocontent";
$('.side-block-title')[1].id = "portfoliotitle";
var portfoliocontent = $('#portfoliocontent');
var portfoliotitle = $('#portfoliotitle');
switchInfoboxVisibilityportfolio()//gakushucontent.hide();
//gakushutitle.text('電子ポートフォリオ　 > クリックして展開 <');
// Collapse the notifications
//switchInfoboxVisibilitygakushu();
$('#portfoliotitle').on('click', function () {
    window.location.href = "/webclass/ip_mods.php/addon/tdu/plugin/portfolio/main";
    //switchInfoboxVisibilityportfolio();
});
function switchInfoboxVisibilityportfolio() {
    if (portfoliocontent.is(':visible') == true) {
        $('.side-block-content')[1].style.display ="none";
        portfoliotitle.text('電子ポートフォリオ');
        $('.side-block-title')[1].style.color = "#1365b5";
        $('.side-block-title')[1].style.textDecoration = "underline"
        $('.side-block-title')[1].style.cursor = "pointer"
    }
    else {
        $('.side-block-content')[1].style.display ="";
        portfoliotitle.text('電子ポートフォリオ　 < クリックして格納 >');
    }
}//$('.side-block-content')[0].style.display ="none";
/***********電子ポートフォリオ部分***********/

// Arrange the row
$('.row > div').each(function (_, elem) {
    $(elem).removeAttr('class');
});
// Easter egg
/*
var egg = ['(。・・)_旦', 'Σ(ﾟдﾟlll)', '(±.±)', '(ヾ;￣ω￣)ヾﾔﾚﾔﾚ',
    '┐(￣～￣)┌', '(-Д-＼)=３', '！(。_。)アレレ'];
$('.course-webclass').html('WebClass&nbsp;&nbsp;' + egg[Math.floor(Math.random() * egg.length)]);
*/
// [Obsolete]
//$('.container .row').prepend('<div id="UserTopInfo"><h4 class="page-header"></h4>' +
//    '<iframe class="extinfo" style="width:100%;height:300;border:none;" ' +
//    'src=""></iframe></div>');
//# sourceMappingURL=mainpage.js.map

chrome.storage.local.get(function (item) {
  if (item.tf_5th) {
    document.querySelectorAll("tr")[5].style.display = "none";
  }
  if (item.tf_6th) {
    document.querySelectorAll("tr")[6].style.display = "none";
  }
  if (item.tf_7th) {
    document.querySelectorAll("tr")[7].style.display = "none";
  }
  if (item.tf_mon) {
    document.querySelectorAll("tr th")[1].style.display = "none";
    for (var n=1;n<=7;n++){
      document.querySelectorAll("tr")[n].children[1].style.display = "none";
    }
  }
  if (item.tf_tue) {
    document.querySelectorAll("tr th")[2].style.display = "none";
    for (var n=1;n<=7;n++){
      document.querySelectorAll("tr")[n].children[2].style.display = "none";
    }
  }
  if (item.tf_wed) {
    document.querySelectorAll("tr th")[3].style.display = "none";
    for (var n=1;n<=7;n++){
      document.querySelectorAll("tr")[n].children[3].style.display = "none";
    }
  }
  if (item.tf_thu) {
    document.querySelectorAll("tr th")[4].style.display = "none";
    for (var n=1;n<=7;n++){
      document.querySelectorAll("tr")[n].children[4].style.display = "none";
    }
  }
  if (item.tf_fri) {
    document.querySelectorAll("tr th")[5].style.display = "none";
    for (var n=1;n<=7;n++){
      document.querySelectorAll("tr")[n].children[5].style.display = "none";
    }
  }
  if (item.tf_sat) {
    document.querySelectorAll("tr th")[6].style.display = "none";
    for (var n=1;n<=7;n++){
      document.querySelectorAll("tr")[n].children[6].style.display = "none";
    }
  }

});