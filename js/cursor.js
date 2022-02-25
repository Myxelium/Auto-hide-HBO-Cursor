console.log("INIT: js/cursor.js");

init();
function init(){
    console.warn('CURSUR INIT');
    var mouseTimer = null, cursorVisible = true;

    function disappearCursor() {
        console.log("cursor hidden")
        mouseTimer = null;
        document.body.style.cursor = "none";
        cursorVisible = false;
    }

    document.onmousemove = function() {
        if (mouseTimer) {
            window.clearTimeout(mouseTimer);
        }
        if (!cursorVisible) {
            document.body.style.cursor = "default";
            cursorVisible = true;
        }
        mouseTimer = window.setTimeout(disappearCursor, 5000);
    };
}