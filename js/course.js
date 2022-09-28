function collapse() {
    var ph = document.getElementsByClassName('panel-heading');

    var contentsList = document.querySelectorAll(".panel.panel-default.cl-contentsList_folder");

    for (let index = 0; index < contentsList.length; index++) {
        contentsList[index].id = "folder-id" + index;

        // 新しいHTML要素を作成
        var details_element = document.createElement('details');
        let clone = document.querySelector(`#folder-id` + index).cloneNode(true);

        details_element.appendChild(clone.children[0]);
        details_element.appendChild(clone.children[0]);

        details_element.classList.add("panel", "panel-default", "cl-contentsList_folder");
        details_element.querySelector(`.panel-heading`).id = "ph-id" + index;

        // 置き換え
        var contentsList_2 = document.getElementById('folder-id' + index);
        contentsList_2.replaceWith(details_element);

        /*==============================================================*/

        let ph_element = document.createElement('summary');
        clone = document.querySelector(`#ph-id` + index).cloneNode(true);

        ph_element.appendChild(clone.children[0]);

        ph_element.classList.add("panel-heading");

        var ph_div2 = document.querySelector('#ph-id' + index);
        ph_div2.replaceWith(ph_element);
    }
}

function expand() {
    var ph = document.getElementsByClassName('panel-heading');

    var contentsList = document.querySelectorAll(".panel.panel-default.cl-contentsList_folder");

    for (let index = 0; index < contentsList.length; index++) {
        contentsList[index].id = "folder-id" + index;

        // 新しいHTML要素を作成
        var details_element = document.createElement('section');
        let clone = document.querySelector(`#folder-id` + index).cloneNode(true);

        details_element.appendChild(clone.children[0]);
        details_element.appendChild(clone.children[0]);

        details_element.classList.add("panel", "panel-default", "cl-contentsList_folder");
        details_element.querySelector(`.panel-heading`).id = "ph-id" + index;

        // 置き換え
        var contentsList_2 = document.getElementById('folder-id' + index);
        contentsList_2.replaceWith(details_element);

        /*==============================================================*/

        let ph_element = document.createElement('div');
        clone = document.querySelector(`#ph-id` + index).cloneNode(true);

        ph_element.appendChild(clone.children[0]);

        ph_element.classList.add("panel-heading");

        var ph_div2 = document.querySelector('#ph-id' + index);
        ph_div2.replaceWith(ph_element);
    }
}

function judge() {
    if (tf) {
        setTimeout(expand, 200);
        tf = false;
    } else {
        setTimeout(collapse, 200);
        tf = true;
    }
}

// 初期実行===========================================
var tf = false;
// expand();
hoge = document.querySelectorAll(".tab-content")
// 初期実行===========================================

/*
<div class="toggle_switch">
    <input type="checkbox" name="xxx" id="cb_toggle_switch">
    <label for="cb_toggle_switch"></label>
</div>
*/

var div;
var label;
var h3;
var input;
var span;

//========================
div = document.createElement('div');
div.className = "toggle_switch";

h3 = document.createElement('h3');
h3.style = "margin-top: 0px; margin-bottom: 10px;";
h3.innerText = "折りたたむ";
div.appendChild(h3);

input = document.createElement('input');
input.type = "checkbox";
input.checked = false;
input.id = "cb_toggle_switch";
input.onclick = judge;
div.appendChild(input);

label = document.createElement('label');
label.htmlFor = "cb_toggle_switch";
div.appendChild(label);
//========================
hoge[0].before(div);

/*
window.addEventListener('load', (event)=> {
    var huga = document.querySelectorAll("a");
    console.log(huga);
    for (var i = 0; i < huga.length; i++) {
        if (huga[i].href.startsWith("https://els.sa.dendai.ac.jp/webclass/download.php/")) {
            pop = huga[i].href
            huga[i].addEventListener("click", function () {
                window.open(pop, "_blank");
            })
            huga[i].removeAttribute("href");
        }
    }

});*/

window.onload = function () {
    var huga = document.links;
    setTimeout(function () {
        for (var i = 0; i < huga.length; i++) {
            if (huga[i].href.startsWith("https://els.sa.dendai.ac.jp/webclass/download.php/")) {
            // pop = huga[i].href
            huga[i].addEventListener("click", function () {
                //window.open(huga[i].href, "_blank");
                //this.href = "#";
                //window.location = "#"
            })
            // huga[i].removeAttribute("href");//href = "#"
            //huga[i].tabIndex = -1;
            // huga[i].className = "disabled";
            huga[i].removeAttribute("download");
        }
        }
    }, 250);
};