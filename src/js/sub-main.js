
    function subMain () {
        console.log('sub-main.js');
    };

    function detectEdge() {
        var ua = window.navigator.userAgent;
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        return false;
    }
    
    var firstWidth = $(".icon-wrapper img").width();
    var firstLoad = true;
    function logoReize(e) {
        var icon = $(".icon-wrapper img");
        var $this = $(this);
        var window = {
            width: $this.width(),
            height: $this.height()
        };
        var logo = {
            width: icon.width(),
            height: icon.height()
        };
    
        if (firstLoad) {
            icon.show();
            firstLoad = false;
        }
    
        // Ratio 1:2
        if (window.width / 2 < firstWidth) {
            icon.css('width', window.width / 2);
        }
        if (window.width / 2 >= firstWidth) {
            icon.css('width', firstWidth);
        }
    }
    
    function et_pb_fullwidth_header_scroll(event) {
        event.preventDefault();
        var heroBlock = $('.hero');
        var header_offset = 0;
        var hero_offset = 0;
        if (typeof heroBlock.offset() !== 'undefined') {
            header_offset = $('.residential-header').height();
            hero_offset = heroBlock.offset().top + heroBlock.height() - 75;
    
            $('html, body, #residential-wrapper').animate({ scrollTop: hero_offset }, 280, 'linear');
    
            if (detectEdge()) {
                heroBlock.next()[0].scrollIntoView({block: "start", behavior: "smooth"});
            }
        }
    }