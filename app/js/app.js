// Check out - https://github.com/brunch/brunch-guide/blob/master/content/en/chapter04-starting-from-scratch.md
"use strict";
var jquery = require('jquery');

(function($) {
    var App = {
        init: function init(){
          // STICKY HEADER
            //$("header").sticky({topSpacing: 0, zIndex: 50});

            // BACKTOTOP
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $("#backtotop").addClass("active");
                } else {
                    $("#backtotop").removeClass("active");
                }
            });

            var $root = $('html, body');
            $('#backtotop').on("click", function () {
                $root.animate({
                    scrollTop: 0
                }, 2000);
                return false;
            });

            $('a').click(function() {
                $root.animate({
                    scrollTop: $( $.attr(this, 'href') ).offset().top - 70
                }, 500);
                return false;
            });
        },

        helloWorld: function helloWorld(){
            console.log('Hello world!');
        }
    }
    module.exports = App;
})(jquery);
