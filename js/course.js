function collapse() {
    var ph = document.getElementsByClassName('panel-heading');
    var contentsList = document.querySelectorAll(".panel.panel-default.cl-contentsList_folder");

    for (let index = 0; index < contentsList.length; index++) {
        var id_tmp = contentsList[index].id
        contentsList[index].id = "folder-id" + index;

        // 新しいHTML要素を作成
        var details_element = document.createElement('details');
        let clone = document.querySelector(`#folder-id` + index).cloneNode(true);
        details_element.appendChild(clone.children[0]);
        details_element.appendChild(clone.children[0]);
        details_element.classList.add("panel", "panel-default", "cl-contentsList_folder");
        details_element.querySelector(`.panel-heading`).id = "ph-id" + index;
        details_element.setAttribute("open","open");

        // 置き換え
        var contentsList_2 = document.getElementById('folder-id' + index);
        contentsList_2.replaceWith(details_element);
        contentsList_2.id = "ph-id" + index;

        /*==============================================================*/

        let ph_element = document.createElement('summary');
        clone = document.querySelector(`#ph-id` + index).cloneNode(true);
        ph_element.appendChild(clone.children[0]);
        ph_element.classList.add("panel-heading");
        if (syoki_tf){ 
          ph_element.children[0].textContent = "－　" + ph_element.children[0].textContent.slice(2);
        }else{
          ph_element.children[0].textContent = "－　" + ph_element.children[0].textContent;
        }

        ph_element.id = "sum-id" + index
        ph_element.setAttribute("onclick","if(this.parentNode.open){this.children[0].textContent='＋　' + this.children[0].textContent.slice(2)}else{this.children[0].textContent='－　' + this.children[0].textContent.slice(2)}");

        var ph_div2 = document.querySelector('#ph-id' + index);
        ph_div2.replaceWith(ph_element);
        document.querySelectorAll("details")[index].id = id_tmp;
    }
    syoki_tf=true;
}

function expand() {
    var ph = document.getElementsByClassName('panel-heading');
    var contentsList = document.querySelectorAll(".panel.panel-default.cl-contentsList_folder");

    for (let index = 0; index < contentsList.length; index++) {
        var id_tmp = contentsList[index].id
        contentsList[index].id = "folder-id" + index;

        // 新しいHTML要素を作成
        var details_element = document.createElement('details');//section');
        let clone = document.querySelector(`#folder-id` + index).cloneNode(true);

        details_element.appendChild(clone.children[0]);
        details_element.appendChild(clone.children[0]);

        details_element.classList.add("panel", "panel-default", "cl-contentsList_folder");
        details_element.querySelector(`.panel-heading`).id = "ph-id" + index;

        // 置き換え
        var contentsList_2 = document.getElementById('folder-id' + index);
        contentsList_2.replaceWith(details_element);
        contentsList_2.id = "ph-id" + index;

        /*==============================================================*/

        let ph_element = document.createElement('summary'); //div');
        clone = document.querySelector(`#ph-id` + index).cloneNode(true);

        ph_element.appendChild(clone.children[0]);
        ph_element.classList.add("panel-heading");

        if (syoki_tf){ 
          ph_element.children[0].textContent = "－　" + ph_element.children[0].textContent.slice(2);
        }else{
          ph_element.children[0].textContent = "－　" + ph_element.children[0].textContent;
          
        }
        //if (ph_element.children[0].textContent.endsWith("< 格納 >")){ 

        ph_element.children[0].textContent = "＋　" + ph_element.children[0].textContent.slice(2);
        ph_element.id = "sum-id" + index
        ph_element.setAttribute("onclick","if(this.parentNode.open){this.children[0].textContent='＋　' + this.children[0].textContent.slice(2)}else{this.children[0].textContent='－　' + this.children[0].textContent.slice(2)}");

        // ph_element.children[0].textContent = ph_element.children[0].textContent.slice(0,-6)
        // ph_element.id = "sum-id" + index;}

        var ph_div2 = document.querySelector('#ph-id' + index);
        ph_div2.replaceWith(ph_element);
        document.querySelectorAll("details")[index].id = id_tmp;
    }
    syoki_tf=true;
}

function judge() {
    if (tf) {
        setTimeout(expand, 150);
        tf = false;
    } else {
        setTimeout(collapse, 150);
        tf = true;
    }
}

// 初期実行===========================================
var tf = true;
var syoki_tf=false
collapse();
hoge = document.querySelectorAll(".tab-content")
// 初期実行===========================================

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
h3.innerText = "すべて折りたたむ";
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
