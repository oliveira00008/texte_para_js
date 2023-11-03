window.requestAnimFrame = function () {
    return (
        window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame ||
        window.mozRRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback);
        }
    );
};