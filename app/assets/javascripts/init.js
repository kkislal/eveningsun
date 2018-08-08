  $( "#buycd" ).click(function() {
    $('.tap-target').tapTarget("open");
  });

  $(document).ready(function(){

    $("#start_div").css({top: $( window ).height()-100,display: 'block', position:'relative'});

    $('.materialboxed').materialbox();

    $('.parallax').parallax();

    $('.tap-target').tapTarget();

    $('.slider').slider({
      interval: 4000,
      height: 500,
    });

    $('#head_slider').slider({
      indicators: false,
      transition: 1000,
    });

  });
