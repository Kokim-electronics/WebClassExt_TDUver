/*"use strict";
// Save the record to storage
function saveurl() {
    var value = $('#urltext').val();
    var match = value.match('/webclass/login.php');
    if (match == null) {
        $("#resultlb").text('指定したリンクが無効です．');
    }
    else {
        $("#resultlb").text('設定が成功しました．');
        chrome.storage.sync.set({ url: value });
    }
}
$('#confirmbtn').on('click', saveurl);
// Initialize the record from storage
chrome.storage.sync.get(function (item) {
    $("#urltext").val(item.url);
});
//# sourceMappingURL=options.js.map*/

//"use strict";
// Save the record to storage
function saveurl() {
    var value_id = $('#uido_id').val();
    var value_pass = $('#uido_pass').val();

    //var value_gakki2 = $('#rdo_gakki2').checked
    $("#resultlb").text('設定が成功しました．');
    //$("#resultlb").text(value_gakki);
    chrome.storage.local.set({ uido_id: value_id, uido_pass: value_pass });
}

$('#confirmbtn').on('click', saveurl);

// Initialize the record from storage
chrome.storage.local.get(function (item) {
    $("#uido_id").val(item.uido_id);
    $("#uido_pass").val(item.uido_pass);
});