/**
 * Created by xin on 2016-01-29.
 */
define(['jquery','scrollto'],function($,scrollto){
   function BackTop(el,opts){
       this.opts= $.extend({},BackTop.DEFAULTS,opts);
       this.$el=$(el);
       this.scroll = new scrollto.ScrollTo({
           dest:0,
           speed:this.opts.speed
       });
       this._checkPosition();

       if(this.opts.mode=="move"){
           this.$el.on('click', $.proxy(this._move,this)); // underline means only for internal usage
       }else
       {
           this.$el.on('click', $.proxy(this._go,this));
       }

       $(window).on('scroll', $.proxy(this._checkPosition,this));
   }

    BackTop.DEFAULTS={
        mode:'move',
        pos:$(window).height(),
        speed:800
    };
    BackTop.prototype._move = function() {
        this.scroll.move();

    };

    BackTop.prototype._go = function() {

        this.scroll.go();

    };

    BackTop.prototype._checkPosition =function(){

        var $el = this.$el;
        if($(window).scrollTop() > this.opts.pos){
            $el.fadeIn();
        }else{
            $el.fadeOut();
        }

    };

    // Jquery Plug-in

    $.fn.extend({
       backtop:function(opts){
        this.each(function(){
            new BackTop(this,opts);
        });

       }
    });


    return{
        BackTop: BackTop
    };

});