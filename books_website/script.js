function scrollDown() {
    //  = document.getElementById("sec_two").scrollY;
     var scrollTo = window.outerHeight + 30;
    var id = setInterval(eachFrame, 2);
    function eachFrame(){
        if(window.scrollY >= scrollTo - 100) {
            clearInterval(id);
        }else{
            window.scrollBy(0, 10);
        }
    }
}