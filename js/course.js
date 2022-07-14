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
