$(document).ready(function () {
    initUI();
});

function initUI() {
    setElemScreenHeight('.mainWrapper');
}

function setElemScreenHeight(elemRef) {
    $(elemRef).css('height', $(document).height());
}