//SCROLL FUNCTIONS MANAGEMENT - start


window.onscroll = function() {detectScroll()}

$(document).ready(()=>{

if(window.innerWidth > 600){

splitScroll();

}


});

function detectScroll(){

const scroll = window.scrollY;    

const full = $(document).height();
 
const separator = window.innerHeight;

const i = scroll/separator;

const scrollBarMove = (scroll/full)*100;

$('.barSection').css('top',scrollBarMove+'%');

if(i > 0.8 && i < 1.3){

showHidden(1,'open');

}else{

showHidden(1,'close');

}

if(i > 1.8 && i < 2.3){

showHidden(2,'open');

}else{

showHidden(2,'close');

}

if(i > 2.8 && i < 3.3){

showHidden(3,'open');

}else{

showHidden(3,'close');

}

}

function splitScroll(){

    //Stick Side Logo

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({

        duration: '200%',
        triggerElement : '.interactiveLogo',
        triggerHook: 0
        
    })
    .setPin('.interactiveLogo')
    .addTo(controller);

    //MARKETING SECTION 

    //Complete first quarter of logo

    new ScrollMagic.Scene({

        triggerElement: '.marketingSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill1', 'fillpink')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.marketingSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter1', 'outerBorderpink')
    .addTo(controller);

    //Title Appear

    new ScrollMagic.Scene({

        triggerElement: '.marketingSec',
        triggerHook: 0.5

    })
    .setClassToggle('#markT', 'titleShow')
    .addTo(controller);

    //Description apear

    new ScrollMagic.Scene({

        triggerElement: '.marketingSec',
        triggerHook: 0

    })
    .addTo(controller);

    //DESING SECTION 

    //complete first quarter of logo

    new ScrollMagic.Scene({

        triggerElement: '.designSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill2', 'fillOrange')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.designSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter2', 'outerBorderOrange')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.designSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill1', 'fillOrange')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.designSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter1', 'outerBorderOrange')
    .addTo(controller);

    //Text Appear

    new ScrollMagic.Scene({

        triggerElement: '.designSec',
        triggerHook: 0.5

    })
    .setClassToggle('#desT', 'titleShow')
    .addTo(controller);

    //DEVELOPMENT SECTION 

    //complete first quarter of logo

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill3', 'fillYellow')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter4', 'outerBorderYellow')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill2', 'fillYellow')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter2', 'outerBorderYellow')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill1', 'fillYellow')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter1', 'outerBorderYellow')
    .addTo(controller);

    //Text Appear

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('#devT', 'titleShow')
    .addTo(controller);

}




//SCROLL FUNCTIONS MANAGEMENT - end