var animation = [];

["banner", "classes", "notification", "setting"].forEach(x => {
    let tmp = bodymovin.loadAnimation({
        wrapper: document.getElementById(x),
        animType: 'canvas',
        autoplay: false,
        loop: false,
        path: `animation/${x}.json`
    });

    animation[x] = tmp;
    
    [{
        "name" : "mouseover",
        "offset" : 0
    },{
        "name" : "mouseleave",
        "offset" : 60
    }].forEach(y => {
        document.getElementById(x).addEventListener(y.name, function(){
            tmp.goToAndStop(0 + y.offset);
            tmp.playSegments([0 + y.offset, 59 + y.offset], true);
        });
    });
});

setTimeout(() => {
    animation["banner"].play();

    $("#content").css("visibility", "visible");
    $("#particles-js").css("opacity", "1");
    $("#content").css("transform", "translate(-50%, -50%)");

    setTimeout(() => {
        animation["classes"].play();
        setTimeout(() => {
            animation["notification"].play();
            setTimeout(() => {
                animation["setting"].play();
            }, 100);
        }, 100);
    }, 100);
}, 1600);

// initialization.addEventListener('complete', () =>{
// });