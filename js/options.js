function saveurl() {
  var value_id   = $('#uido_id').val();
  var value_pass = $('#uido_pass').val();
  var value_5th  = document.getElementById("5th").checked;
  var value_6th  = document.getElementById("6th").checked;
  var value_7th  = document.getElementById("7th").checked;
  var value_sat  = document.getElementById("sat").checked;

  //var value_gakki2 = $('#rdo_gakki2').checked

  //$("#resultlb").text(value_gakki);
  chrome.storage.local.set(
    { uido_id   : value_id, 
      uido_pass : value_pass,
      tf_5th    : value_5th,
      tf_6th    : value_6th,
      tf_7th    : value_7th,
      tf_mon    : document.getElementById("mon").checked,
      tf_tue    : document.getElementById("tue").checked,
      tf_wed    : document.getElementById("wed").checked,
      tf_thu    : document.getElementById("thu").checked,
      tf_fri    : document.getElementById("fri").checked,
      tf_sat    : value_sat,
    });

  $("#resultlb").text('設定が成功しました. ');
  document.getElementById("resultlb").innerHTML = document.getElementById("resultlb").innerHTML + getNow();
}

$('#confirmbtn').on('click', saveurl);

// Initialize the record from storage
chrome.storage.local.get(function (item) {
  $("#uido_id").val(item.uido_id);
  $("#uido_pass").val(item.uido_pass);

  document.getElementById("5th").checked = item.tf_5th;
  document.getElementById("6th").checked = item.tf_6th;
  document.getElementById("7th").checked = item.tf_7th;
  document.getElementById("sat").checked = item.tf_sat;
  document.getElementById("mon").checked = item.tf_mon;
  document.getElementById("tue").checked = item.tf_tue;
  document.getElementById("wed").checked = item.tf_wed;
  document.getElementById("thu").checked = item.tf_thu;
  document.getElementById("fri").checked = item.tf_fri;
});

function getNow() {
  var now = new Date();
  var year = now.getFullYear();
  var mon = now.getMonth()+1; //１を足すこと
  var day = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  //出力用
  var s = hour + ":" + min + ":" + sec + ""; 
  return s;
}
