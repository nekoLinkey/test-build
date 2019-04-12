define('modules/js/responsive', function(require, exports, module) {

  // Responsive
  var Responsive = {
    init: function () {
      require(['components/jquery/jquery','modules/js/skel.min'], function ($, skel){
  
        // init
        
  
        var $window = $(window),
        $body = $('body');
  
        if (skel.vars.IEVersion < 9)
        $(':last-child').addClass('last-child');
  
  
        
  
        // 添加菜单按钮
        $(
          '<div id="navButton">' +
            '<a href="#navPanel" class="toggle"><i class="iconfont icon-list-nav"></i></a>' +
          '</div>'
        ).appendTo($body);
  
        
      })
    },
    panel: function() {
      require(['components/jquery/jquery','modules/js/panel'], function ($, panel){
  
        $.fn.navList = function() {
          var $this = $(this);
            $a = $this.find('a'),
            b = [];
  
          $a.each(function() {
  
            var $this = $(this),
              indent = Math.max(0, $this.parents('li').length - 1),
              href = $this.attr('href'),
              target = $this.attr('target');
  
            b.push(
              '<a ' +
                'class="link depth-' + indent + '"' +
                ( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
                ( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
              '>' +
                '<span class="indent-' + indent + '"></span>' +
                $this.text() +
              '</a>'
            );
  
          });
  
          return b.join('');
  
        };
  
        $(
          '<div id="navPanel">' +
            '<nav>' +
              // '<a href="index.html" class="link depth-0">网站首页</a>' +
              $('#nav').navList() +
            '</nav>' +
          '</div>'
        ).appendTo($('body'))
        .panel({
          delay: 500,
          hideOnClick: true,
          hideOnSwipe: true,
          resetScroll: true,
          resetForms: true,
          side: 'left',
          target: $('body'),
          visibleClass: 'navPanel-visible'
        });
  
      });
    }
  };
  
  exports.Responsive = Responsive;

});
