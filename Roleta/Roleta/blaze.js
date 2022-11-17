var stoping = false;
var itemSelected = 0;

jQuery(function ($) {
  var $owl = $('.owl-carousel');

  //inicialização Owl
  $('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      },
      1000: {
        items: 7
      }
    }
  });

  // função do click no Girar
  $('#js-btn-jump').click(function (e) {
    e.preventDefault();
    stoping = false;
    // Random de 0 a 14
    itemSelected = Math.floor((Math.random() * 14) + 1);
    var $jump = $(this);
    $jump.html('rodando ...');
    $jump.attr('disabled', 'disabled');
    // acionar autoplay
    $owl.trigger('play.owl.autoplay', [100]);
    //velocidade lenta por passo
    setTimeout(slowSpeed, 2000, $owl, 200);
    setTimeout(slowSpeed, 4000, $owl, 250);
    setTimeout(slowSpeed, 5000, $owl, 300);
    setTimeout(stopAutoplay, 6000);
    return false;
  });

  $owl.on('changed.owl.carousel', function (e) {
    if (stoping) {
      // verificar o stop da roleta
      var index = e.item.index;
      var element = $(e.target).find(".owl-item").eq(index).find('.element-roulette');
      var item = element.data('item');
      if (item == itemSelected) {
        // elemento random, stop roleta
        $owl.trigger('stop.owl.autoplay');
        $('#js-btn-jump').html('Girar');
        $('#js-btn-jump').removeAttr('disabled');
      }
    }
  });

  // velocidade
  slowSpeed($owl, 1000);

});

/** 
 * Reducao da velocidade da roleta
 * @param {type} $owl
 * @param {type} speed
 * @returns {undefined}
*/
function slowSpeed($owl, speed) {
  $owl.trigger('play.owl.autoplay', [speed]);
}

/**
 * Para autoplay da roleta
 * @returns {undefined}
 */
function stopAutoplay() {
  stoping = true;
}