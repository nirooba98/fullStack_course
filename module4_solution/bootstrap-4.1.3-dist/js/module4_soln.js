$(document).ready(function(){
    $("#reserveId").click(function(){
        $("#myModal").modal('show');
    });
});

$(document).ready(function(){
    $("#loginId").click(function(){
        $("#loginModal").modal('show');
    });
});

$(document).ready(function(){
    $("#carouselExampleCaptions").carousel( { interval: 2000 } );
    $("#carousel-pause").click(function(){
        $("#carouselExampleCaptions").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#carouselExampleCaptions").carousel('cycle');
    });
});

