$(document).ready(function () {
    //initUI();
    initComponents();
    //initListeners();
});

function initUI() {
    setElemScreenHeight('.mainWrapper');
}

function initComponents() {
}

function initListeners() {
    /* On Window resize event */
    $(window).resize(function() {
         setElemScreenHeight('.mainWrapper');
    });
}

function setElemScreenHeight(elemRef) {
    $height = $(window).height();
    $(elemRef).height($height);
}