$(document).ready(function() {
    
    /*--------------------
        DROPDOWN
    ----------------------*/ 
    
    // Standard
    $('.ui.dropdown').dropdown();
    
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
});

