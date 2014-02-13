$(document).ready(function () {
    initUI();
});

function initUI() {
    setElemScreenHeight('section1');
}

function setElemScreenHeight(elemId) {
    $('#' + elemId).css('height', $(document).height());
}