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