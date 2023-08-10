// Para usar jQuery
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.main_theme = {
    attach: function (context, settings) {
      console.log('It works!');
    }
  };

}(jQuery, Drupal));

// Para usar sin jQuery
(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.main_theme = {
    attach: function (context, settings) {
      console.log('It works!');
    }
  };

}(Drupal, once));
