/**
 * Created by xin on 2016-01-26.
 */
// this is the main file that for the sidebar(one is written in Jquery plug-in, one is written in function way.
//
requirejs.config({
    paths:{
          jquery:'../Js/jquery-1.12.0.min'
    }
})

requirejs(['jquery','backtop'],function($,backtop){


    // jquery plug-in
    $('#backTop').backtop({
       mode:'move'
    });


    /*   module
    new backtop.BackTop($('#backTop'),{
        mode:'move',
        //pos:100,
        //speed:2000
    });

    */


});


/*
requirejs(['jquery','scrollto'],function($,scrollto){

    var scroll= new scrollto.ScrollTo({
    });


  $('#backTop').on('click', $.proxy(scroll.move,scroll));// this

    $(window).on('scroll',function(){
      checkPosition($(window).height());
  });

    checkPosition($(window).height());


    function checkPosition(pos){
        if ($(window).scrollTop() > pos) {
            $('#backTop').fadeIn();
        }else{
            $('#backTop').fadeOut();
        }

    }


});

*/