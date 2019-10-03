
//PAGE SETTINGS - start

$(document).ready(function(){

    styleLogo();

    styleScrollBar();

    $(window).resize(function(){

        styleLogo();
        styleScrollBar();

    });

    $.getJSON('../Assets/languajes/lang.en.json', function(data){

    });

});

function styleLogo(){

    if(window.innerWidth > 600){

    var lw = $('.MainLogo').width();

    $('.MainLogo').css('height', lw + 'px');

    var mh = $('.menuButton').height();

    $('.menuButton').css('width', mh + 'px');

    }

}

function styleScrollBar(){

const section = window.innerHeight;

const total = $(document).height();

const barheight = (section/total)*100;

$('.barSection').height(barheight+'%');

}

//languaje

$('#langChange').click(function(){

  ($('#langChange').attr('data-lang') === 'EN') ? setSpanish() : setEnglish() ;

});

function setEnglish(){

    $('#langChange').html('<a>EN</a>').attr('data-lang','EN');

    $.getJSON('../Assets/languajes/lang.en.json',(result)=>{
        $.each(result,(i, field) => {
            $('#'+i).html(field);
          });
    });
}

function setSpanish(){

    $('#langChange').html('<a>ES</a>').attr('data-lang','ES');

    $.getJSON('../Assets/languajes/lang.es.json',(result)=>{
        $.each(result,(i, field) => {
            $('#'+i).html(field);
          });
    });
}


//PAGE SETTINGS - end

//PAGE FUNCTIONS - start

//navbar

$('.menuButton').click(function(){

    var s = $('.menuButton').attr('data-state');

    if(s == 'closed'){

        $('.NavBar').addClass('openNav');
   
        $('.menuButton').attr('data-state','open');
        
    }else{

        $('.NavBar').removeClass('openNav');

        $('.menuButton').attr('data-state','closed');

    }

});

//Header

//parallax Movement

$('#Header').on('mousemove', (event) =>{

    let topMoveX = (event.clientX * 0.005);
    let topMoveY = (event.clientY * 0.005);

    $('#PageTitle').css({
        'transform':'translateX('+(topMoveX-1)+'%) translateY('+(topMoveY+1)+'%)'
    });
    $('#PageSubtitle').css({
        'transform':'translateX('+(topMoveX-2)+'%) translateY('+(topMoveY+1)+'%)'
    });


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





