define('modules/js/main', function(require, exports, module) {

  // Tab
  var TabClick = {
    init: function (me) {
      require(['components/jquery/jquery','components/bootstrap/tab'], function ($, tab){
        $(me).tab('show');
      })
    }
  };
  
  // Slimscroll
  var slimScroll = {
    init: function (e,h) {
      require(['components/jquery/jquery','modules/js/jquery.slimscroll.min'], function ($, slimScroll){
        var op={};
        if(h)op.height=h;
        $(e).slimScroll(op);
      })
    }
  };
  
  var slide = {
    init: function (e,op) {
      require(['components/jquery/jquery','modules/js/jquery.SuperSlide.2.1.1'], function ($, slide) {
        $(e).slide(op);
      })
    }
  };
  
  // Gallery
  var gallery = {
    init: function (e) {
      require(['components/jquery/jquery','modules/js/jquery.magnific-popup.min'], function ($, magnificPopup){
        $(e).magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
        });
      })
    }
  };
  
  // Pikaday
  var Datepicker = {
    init: function (op) {
      require(['components/pikaday/pikaday'], function (Pikaday) {
        var picker = new Pikaday(op);
      })
    }
  }
  
  // Parsley
  var parsley = {
    init: function (e, op) {
      require(['components/jquery/jquery','components/parsleyjs/parsley','components/parsleyjs/i18n/zh_cn'], function($, parsley){
        $(e).parsley(op);
      })
    }
  }
  
  // Share
  var Share = {
    start: function(e, op){
      require(['components/jquery/jquery','modules/js/jquery.share.min']), function($, share){
        $(e).share(op);
      }
    }
  }
  
  // Typahead
  var autocomplete = {
    init: function(e, op){
      require(['components/jquery/jquery','modules/js/typeahead.bundle.min'], function($, typeahead){
  
        
  
        var substringMatcher = function(strs) {
          return function findMatches(q, cb) {
            var matches, substringRegex;
  
            // an array that will be populated with substring matches
            matches = [];
  
            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');
  
            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
              if (substrRegex.test(str)) {
                matches.push(str);
              }
            });
  
            cb(matches);
          };
        };
  
        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California','Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii','Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana','Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota','Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire','New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota','Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island','South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont','Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  
        $(e).typeahead({
          hint: true,
          highlight: true,
          minLength: 1
        },
        {
          name: 'states',
          source: substringMatcher(states)
        });
  
        
      })
    }
  }
  
  // Float
  var Float = {
    init: function (e, op) {
      require(['components/jquery/jquery','modules/js/jquery.float'], function (floatAd) {
        $(e).floatAd(op);
      })
    }
  }
  
  // plyr 
  var Plyr = {
    init: function (e) {
      require(['plyr/dist/plyr'], function (plyr) {
        plyr.setup(); //初始化
        var players = plyr.setup(e); //获取实例
        players[0].play(); //调用API
      })
    }
  }
  
  exports.TabClick = TabClick;
  exports.slimScroll = slimScroll;
  exports.gallery = gallery;
  exports.slide = slide;
  exports.Datepicker = Datepicker;
  exports.parsley = parsley;
  exports.autocomplete = autocomplete;
  exports.Share = Share;
  exports.Float = Float;
  exports.Plyr = Plyr;

});
