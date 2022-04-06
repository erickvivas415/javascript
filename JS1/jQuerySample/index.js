var htmlAdd = "<h1>We did it!!!</h1>\
                <p>Second line</p>\
                <p>Third Line</p>";



$("h1").click(function(){
    $("h1").css("color", "blue");
    $(".addHTML").html(htmlAdd);
});