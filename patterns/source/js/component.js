$(document).ready(function() {
    
    /*--------------------
        DROPDOWN
    ----------------------*/ 
    
    // Standard
    $('.ui.dropdown').dropdown('toggle');
    
     $('#plan1_name').click(function(){
        $('.ui.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle')
    ;
     });
    
    $('#activities').click(function(){
        $('.ui.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle')
    ;
     });
    
    /*--------------------
        HOVER ON TABLE
    ----------------------*/ 
    
    $('.subaction').hide();
    
    $('tr').hover(function(){ 
        $(this).find('.subaction').transition('fade');
    },function(){  
       $(this).find('.subaction').transition('fade');
    });

    /*--------------------
        POPUP
    ----------------------*/ 
    
    $('.ui.label').popup();
    $('#btn_popup_titlelink').popup({
        popup : $('#popup_titlelink'),
        on    : 'click'
    });
    
    /*--------------------
        ACCORDION
    ----------------------*/     
    $('.ui.accordion').accordion();
   
    /*--------------------
        DROPDOWN
    ----------------------*/ 
    $('#modal_email1').dropdown('set selected',['work']);
    $('#modal_email2').dropdown('set selected',['home']);
    
    /*--------------------
        MODAL
    ----------------------*/
    $('#btn_modal_text').click(function(){
        $('#modal_text').modal('show');
        autofocus:false;
    });
    
    $('#btn_modal_form').click(function(){
        $('#modal_form').modal({autofocus:false,}).modal('show');
    });
    
    $('#btn_modal_3btn').click(function(){
        $('#modal_3btn').modal('show');
    });
    
    $('#btn_modal_3btnseparate').click(function(){
        $('#modal_3btnseparate').modal('show');
    });
    
    $('#btn_modal_notitle').click(function(){
        $('#modal_notitle').modal({autofocus:false,}).modal('show');
    });
    
    $('#btn_modal_2stepicon').click(function(){
        $('#modal_2stepicon').modal({autofocus:false,}).modal('show');
    });
    
    $('#btn_modal_4stepicon').click(function(){
        $('#modal_4stepicon').modal({autofocus:false,}).modal('show');
    });
    
    $('#btn_modal_2steptext').click(function(){
        $('#modal_2steptext').modal({autofocus:false,}).modal('show');
    });
    
    $('#btn_modal_4steptext').click(function(){
        $('#modal_4steptext').modal({autofocus:false,}).modal('show');
    });
    
    $('#btn_modal_simpletabs').click(function(){
        $('#modal_simpletabs').modal({autofocus:false,}).modal('show');
    });
    
    $('#btn_modal_forminform').click(function(){
        $('#modal_forminform').modal({autofocus:false,}).modal('show');
    });
    
    $('#btn_modal_formwarning').click(function(){
        $('#modal_formwarning').modal({autofocus:false,}).modal('show');
    });
    
    $('#btn_modal_checkbox').click(function(){
        $('#modal_checkbox').modal({autofocus:false,}).modal('show');
    });
    
    /*--------------------
            LOADING
    ----------------------*/
    var head_baloon = $('.head_loading_block');
    var baloon1 = $('.loading_block1');
    var baloon2 = $('.loading_block2');
    var baloon3 = $('.loading_block3');
    var baloon4 = $('.loading_block4');
    var baloon5 = $('.loading_block5');
    var baloon6 = $('.loading_block6');
     function runIt() {
        head_baloon.animate({opacity:'0.9'}, 600);
        head_baloon.animate({opacity:'0.5'}, 600, runIt);
        baloon1.animate({opacity:'0.9'}, 600);
        baloon1.animate({opacity:'0.5'}, 600, runIt);
        baloon2.animate({opacity:'0.9'}, 800);
        baloon2.animate({opacity:'0.5'}, 800, runIt);
        baloon3.animate({opacity:'0.9'}, 600);
        baloon3.animate({opacity:'0.5'}, 600, runIt);
        baloon4.animate({opacity:'0.9'}, 800);
        baloon4.animate({opacity:'0.5'}, 800, runIt);
        baloon5.animate({opacity:'0.9'}, 600);
        baloon5.animate({opacity:'0.5'}, 600, runIt);
        baloon6.animate({opacity:'0.9'}, 800);
        baloon6.animate({opacity:'0.5'}, 800, runIt);
    }
    runIt();
});