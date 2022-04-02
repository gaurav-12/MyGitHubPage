$(document).ready(() => {
    let shouting = false;
    const leftImage = $("#left img");
    const rightImage = $("#right img");
    const shout = $("#stewie-shout")[0];

    const peter = $(".peter-container img");
    $("#text-404").hover(() => {
        peter.attr("src", "404/images/peter_404.png");
    }, () => {
        peter.attr("src", "404/images/peter.png");
    })

    $("#left").click((e) => {
        if (!shouting) {
            leftImage.css("transform", `translate(${e.originalEvent.x}px, ${e.originalEvent.y}px)`);
            leftImage.css("display", "block");
            shout.play();
            setTimeout(() => {
                leftImage.css("display", "none");
                shouting = false;
            }, 1500)
            shouting = true;
        }
    });
    $("#right").click((e) => {
        if (!shouting) {
            // console.log(e.originalEvent.x, e.originalEvent.y);
            rightImage.css("transform", `translate(${e.originalEvent.layerX}px, ${e.originalEvent.y}px)`);
            rightImage.css("display", "block");
            shouting = true;
            shout.play();
            setTimeout(() => {
                rightImage.css("display", "none");
                shouting = false;
            }, 1500)
        }
    });

    setInterval(() => {
        $("#giggity-repeat")[0].play();
    }, 5000);
})