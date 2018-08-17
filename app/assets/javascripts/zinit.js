  var turboloadF = function() {

    var vController = $('body').data('controller');
    var vAction = $('body').data('action');

    $('.materialboxed').materialbox();

    $('.parallax').parallax();

    $('.slider').slider({
      interval: 4000,
      height: 500,
    });

    $('#head_slider').slider({
      indicators: false,
      transition: 1000,
      interval: 4000,
    });

    $('.dropdown-button').dropdown({
      hover: true,
      coverTrigger: false,
    });

//    if (vAction == 'contact') {
//      $(".contact_main").css("background-image", "url('/images/contact2.jpg')");
//    }


  };

  $(document).on('turbolinks:load', turboloadF);
