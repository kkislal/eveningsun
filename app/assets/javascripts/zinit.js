  var turboloadF = function() {

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

  };

  $(document).on('turbolinks:load', turboloadF);
