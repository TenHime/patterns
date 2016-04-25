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
    
    $('.subaction').popup();
    $('.row_name').popup();
    
    /*--------------------
        ACCORDION
    ----------------------*/     
    $('.ui.accordion').accordion();
   
    /*--------------------
        DROPDOWN
    ----------------------*/ 
    /*$('.ui.fluid.dropdown').dropdown('set selected',['CEO']);*/
    
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
});

