define('modules/js/jquery.float', function(require, exports, module) {

  var jQuery = require('components/jquery/jquery');
  ;(function ($) {
    $.fn.floatAd = function (options) {
      var defaults = {
        imgSrc: '',
        url: '',
        openStyle: 1,
        speed: 30,
        wrapClass: 'float_ad',
        closeClass: 'close_f_ad',
        position: {
          x: 0,
          y: 0
        }
      }
      var options = $.extend(defaults, options)
      var _target = options.openStyle == 1 ? "target='_blank'" : ''
      var html = "<div class='"+ options.wrapClass +"' style='position:absolute;left:0px;top:0px;z-index:1000000;cleat:both;'>"
      html += "  <a href='" + options.url + "' " + _target + "><img src='" + options.imgSrc + "' border='0' class='float_ad_img'/></a>"
      html += "<div class='"+ options.closeClass +"' style='position:absolute;width:24px;height:24px;color:#fff;background:rgba(0,0,0,.5);text-align:center;top:0;right:-24px;cursor:pointer;float:right;font-size:20px;line-height:20px;'>&times;</div></div>"
      $('body').append(html)
      function init () {
        var x = options.position.x,
          y = options.position.y
        var xin = true,
          yin = true
        var step = 1
        var delay = 10
        var obj = $('.'+options.wrapClass)
        obj.find('img.float_ad_img').load(function () {
          var float = function () {
            var L = T = 0
            var OW = obj.width()
            var OH = obj.height()
            var DW = document.documentElement.clientWidth
            var DH = document.documentElement.clientHeight
            x = x + step * (xin ? 1 : -1)
            if (x < L) {
              xin = true
              x = L
            }
            if (x > DW - OW - 1) {
              xin = false
              x = DW - OW - 1
            }
            y = y + step * (yin ? 1 : -1)
            if (y > DH - OH - 10) {
              yin = false
              y = DH - OH - 10
            }
            if (y < T) {
              yin = true
              y = T
            }
            var left = x
            var top = y
            obj.css({
              'top': top,
              'left': left
            })
          }
          var itl = setInterval(float, options.speed)
          $('.'+options.wrapClass).mouseover(function () {
            clearInterval(itl)
          })
          $('.'+options.wrapClass).mouseout(function () {
            itl = setInterval(float, options.speed)
          })
        })
      }
      init()
      $('.'+options.closeClass).click(function () {
        $('.'+options.wrapClass).css('display', 'none')
        clearInterval(itl)
      })
    }
  })(jQuery)
  

});
