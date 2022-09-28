"use strict";
// Find each file's url except javascript
$('a').each(function (_, htmlelem) {
    var href = $(htmlelem).attr('href');
    var match = href === null || href === void 0 ? void 0 : href.match('javascript:window.close();');
    if (match == null)
        null// window.open(href);
});

document.querySelectorAll("a")[0].addEventListener("click", function () {
    window.open(document.querySelectorAll("a")[0].href,"_blank");
    window.close();
})
//window.close();
//# sourceMappingURL=autodownload.js.map