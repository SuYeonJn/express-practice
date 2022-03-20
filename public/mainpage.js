/*window.onscroll = function() {myFunction()}; 

function myFunction() {
    if (400 < document.body.scrollTop || 400< document.documentElement.scrollTop) {
    document.getElementById("pro").src = "프로그램 일러.png";
    } else {
        document.getElementById("pro").src = "프로그램 일러-1.png";

    }
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
    document.getElementById("book").src = "책 일러.png";
    } else{
        document.getElementById("book").src = "책 일러-1.png";
    }
    if(document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600){
    document.getElementById("file").src = "자료실 일러.png";
    } else{
        document.getElementById("file").src = "자료실 일러-1.png";
    }
}*/


function fadeinout(mouse_location,old,pop){
    $(mouse_location).hover(function(){
        $(old).fadeOut(200,fadein(pop));
},
    function(){
        $(pop).fadeOut(200,fadein(old));
}
)}

$(document).ready(fadeinout(".main_1", "#pro","#pro2"))
$(document).ready(fadeinout(".main_2", "#book","#book2"))
$(document).ready(fadeinout(".main_3", "#file","#file2"))

