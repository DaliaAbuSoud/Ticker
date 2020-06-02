(function() {
    var headlines = document.getElementById("headlines");
    var links = headlines.getElementsByTagName("a");
    var movingleft = headlines.offsetLeft;
    var animation;
    function moveHeadlines() {
        movingleft--;
        if (movingleft < -links[0].offsetWidth) {
            movingleft = movingleft + links[0].offsetWidth;
            links[0].parentNode.appendChild(links[0]);
        }
        headlines.style.left = movingleft + "px";
        animation = requestAnimationFrame(moveHeadlines);
    }

    headlines.addEventListener("mouseover", function() {
        cancelAnimationFrame(animation);
    });

    headlines.addEventListener("mouseout", function() {
        animation = requestAnimationFrame(moveHeadlines);
    });

    moveHeadlines();
})();
