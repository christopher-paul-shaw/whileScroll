var scrolling = false;
window.onscroll = whileScrolling;
function whileScrolling() {
    scrolling = true;
}

setInterval(function() {
    if(scrolling) {
        scrolling = false;
        // Code To Run
	console.log('hello world');
    }
}, 500);
