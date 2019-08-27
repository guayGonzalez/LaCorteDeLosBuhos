
//PAGE SETTINGS - start

$(document).ready(function(){

    styleLogo();

    $(window).resize(function(){

        styleLogo();

    });

});

function styleLogo(){

    var lw = $('.MainLogo').width();

    $('.MainLogo').css('height', lw + 'px');

    var mh = $('.menuButton').height();

    $('.menuButton').css('width', mh + 'px');

}

//languaje


//PAGE SETTINGS - end

//PAGE FUNCTIONS - start

//navbar

$('.menuButton').click(function(){

    var s = $('.menuButton').attr('data-state');

    if(s == 'closed'){

        $('.menuButton').css({
            
            'background':'rgba(124, 124, 124, 1)'

        });

        $('.menuButton span').css({

            'width':'50%',
            'position':'absolute',
            'margin':'0px'

        });

        $('.l1').css({

            'transform':'rotate(45deg)'

        });

        $('.l2').css({

            'transform':'rotate(-45deg)'

        });

        $('.menuButton').attr('data-state','open');
        
    }else{

        $('.menuButton').css({
            
            'background':'rgba(124, 124, 124, 0.6)'

        });

        $('.menuButton span').css({

            'width':'30%',
            'position':'static',
            'margin':'2px'

        });

        $('.l1').css({

            'transform':'none'

        });

        $('.l2').css({

            'transform':'none'

        });

        $('.menuButton').attr('data-state','closed');

    }

});

//main section

function showHidden(s,o){

 switch(s){

    case 1:

        moveButton('90','markT','markD',o);

    break;

    case 2:

        moveButton('180','desT','desD',o);

    break;

    case 3:

        moveButton('270','devT','devD',o);

    break;

 }   

}

function moveButton(id,t,d,o){

    var but = document.getElementById(id);

    var state = but.getAttribute('data-state');

    var order = o;

    if(state == 'closed' && order == 'open'){

     $('#'+id).css('margin-left','50%');

     $('#'+id).css('transform','rotate(-'+id+'deg)');

     but.setAttribute('data-state','open');

     changeTitle(t,1);

     changeDesc(d,1);

    }
    
    if(state == 'open' && order == 'close'){

     $('#'+id).css('margin-left','0');

     $('#'+id).css('transform','none');

     but.setAttribute('data-state','closed');

     changeTitle(t,2);

     changeDesc(d,2);

}
}

function changeDesc(id,s,o){

    switch(s){

        case 1:

            $('#'+id).slideDown(500);

        break;

        case 2:

            $('#'+id).slideUp(500);

        break;

    }

}

function changeTitle(id,s,o){

    switch(s){

        case 1:

            $('#'+id).addClass('fullTitle');

        break;

        case 2:

            $('#'+id).removeClass('fullTitle');

        break;

    }

}

//PAGE FUNCTIONS - end





