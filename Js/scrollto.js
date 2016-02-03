/**
 * Created by xin on 2016-01-29.
 */
define(['jquery'],function($){

    function ScrollTo(opts){
        this.opts = $.extend({},ScrollTo.DEFAULTS, opts); //overwrite the default data
        this.$el= $('html, body'); //buffer
    }

    ScrollTo.DEFAULTS = {
        dest: 0,
        speed: 800
    };

    // buffer management for javascript
    ScrollTo.prototype.move = function(){
        var opts = this.opts;

        this.$el.animate(
            {
                scrollTop:opts.dest
            },opts.speed);
    };

    ScrollTo.prototype.go = function(){
        this.$el.scrollTop(this.opts.dest);
    };

    return{
        ScrollTo:ScrollTo
    }



});